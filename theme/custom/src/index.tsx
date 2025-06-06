import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "stream";
import type { ResumeSchema as ResumeType } from "./types";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { App } from "./app";

// Correction ESM/TypeScript : déclaration séparée
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

async function render(resume: ResumeType) {
  // Lecture du CSS généré par Vite dans dist/assets/
  let styles = "";
  try {
    const distAssetsPath = path.resolve(__dirname, "../../dist/ssr/assets");
    let cssFile = "";
    if (fs.existsSync(distAssetsPath)) {
      const files = fs.readdirSync(distAssetsPath);
      const cssFiles = files.filter(f => f.endsWith('.css'));
      if (cssFiles.length > 0) {
        cssFile = path.join(distAssetsPath, cssFiles[0]);
        styles = fs.readFileSync(cssFile, 'utf8');
      }
    }
  } catch (e) {
    console.error('Erreur lecture CSS Vite:', e);
    styles = "";
  }

  // Génération des balises meta dynamiques
  const metaTags = `\n<title>${resume.basics?.name ? `${resume.basics.name} – CV` : "CV"}</title>\n<meta name="description" content="CV de ${resume.basics?.name || ""}${resume.basics?.label ? " – " + resume.basics.label : ""}" />\n<meta name="author" content="${resume.basics?.name || ""}" />\n<meta property="og:title" content="${resume.basics?.name || "CV"}" />\n<meta property="og:description" content="${resume.basics?.summary || ""}" />\n<meta property="og:type" content="profile" />\n<meta property="og:locale" content="fr_FR" />\n`;

  // Utilisation de renderToPipeableStream pour le rendu streaming
  const stream = new PassThrough();
  let html = "";
  const promise = new Promise<string>((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
        <App resume = {resume} />,
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
  const templatePath = path.resolve(__dirname, "../../src/index.html");
  let template = '';
  try {
    template = fs.readFileSync(templatePath, "utf8");
  } catch (e) {
    console.error('Erreur lecture template HTML:', e);    
  }
  // Remplacement du <div id="root"></div> par le rendu React
  template = template.replace('<div id="root"></div>', `<div id="root">${resumeHtml}</div>`);
  // Suppression de la balise <script type="module" src="main.tsx"></script> (pour build/export)
  template = template.replace(/<script[^>]*src=["']main\.tsx["'][^>]*><\/script>/, '');
  // Injection du CSS minifié dans le <head> (avant </head>)
  template = template.replace('</head>', `<style>${styles}</style>\n</head>`);
  // Injection des balises meta dynamiques dans le <head> (avant </head>)
  template = template.replace('</head>', `${metaTags}</head>`);
  return template;
}

export { render };
