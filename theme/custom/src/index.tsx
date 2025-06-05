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
  return `<!doctype html><html lang="en"><head>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>${resume.basics?.name || "Resume"}</title>
     <style>${styles}</style>
  </head>
  <body>
  <div id="root">
  ${resumeHtml}
  </div></body>
      </html>`;
}

export { render };
