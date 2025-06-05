import { Resume } from "./Resume";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "stream";
import type { ResumeSchema as ResumeType } from "./types";
import { I18nextProvider } from "react-i18next";
import { createI18N } from "./i18n";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Correction ESM/TypeScript : déclaration séparée
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

async function render(resume: ResumeType) {
  // Lecture du CSS minifié si présent, sinon fallback sur le CSS normal
  const cssPath = path.resolve(__dirname, "../style.css");
  const cssMinPath = path.resolve(__dirname, '../style.min.css');
  let styles = "";
  try {
    if (fs.existsSync(cssMinPath)) {
      styles = fs.readFileSync(cssMinPath, 'utf8');
    } else {
      styles = fs.readFileSync(cssPath, "utf8");
    }
  } catch (e) {
    console.error(e);
    styles = "";
  }
  // Utilisation de renderToPipeableStream pour le rendu streaming
  const stream = new PassThrough();
  let html = "";
  const promise = new Promise<string>((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <I18nextProvider i18n={createI18N("fr")}>
        <Resume {...resume} />
      </I18nextProvider>,
      {
        onAllReady() {
          pipe(stream);
        },
        onError(err) {
          reject(err);
        },
      }
    );
    stream.on("data", (chunk) => {
      html += chunk.toString();
    });
    stream.on("end", () => {
      resolve(html);
    });
    stream.on("error", (err) => {
      reject(err);
    });
  });
  const resumeHtml = await promise;
  // Lecture du template HTML (index.html)
  const templatePath = path.resolve(__dirname, "../src/index.html");
  let template = '';
  try {
    template = fs.readFileSync(templatePath, "utf8");
  } catch (e) {
    console.error('Erreur lecture template HTML:', e);
    // fallback minimal si le template n'est pas trouvé
    template = `<!doctype html><html lang="en"><head><meta charset="UTF-8" /></head><body><div id="root">{{RESUME_HTML}}</div></body></html>`;
  }
  // Remplacement du <div id="root"></div> par le rendu React
  template = template.replace('<div id="root"></div>', `<div id="root">${resumeHtml}</div>`);
  // Suppression de la balise <script type="module" src="main.tsx"></script> (pour build/export)
  template = template.replace(/<script[^>]*src=["']main\.tsx["'][^>]*><\/script>/, '');
  // Ajout de balises meta SEO dans le <head>
  const metaSeo = `\n    <meta name="description" content="CV de ${resume.basics?.name || ''}${resume.basics?.label ? ' – ' + resume.basics.label : ''}">\n    <meta name="author" content="${resume.basics?.name || ''}">\n    <meta property="og:title" content="${resume.basics?.name || 'CV'}">\n    <meta property="og:description" content="${resume.basics?.summary || ''}">\n    <meta property="og:type" content="profile">\n    <meta property="og:locale" content="fr_FR">\n  `;
  template = template.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />' + metaSeo);
  // Injection du CSS minifié dans le <head> (avant </head>)
  template = template.replace('</head>', `<style>${styles}</style>\n</head>`);
  // Remplacement du <title> si besoin
  template = template.replace(/<title>.*<\/title>/, `<title>${resume.basics?.name || "Resume"}</title>`);
  return template;
}

export { render };
