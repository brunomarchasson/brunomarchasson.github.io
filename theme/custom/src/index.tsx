import { Resume } from './Resume';
import { renderToString } from 'react-dom/server';
import type { ResumeSchema as ResumeType } from './types';
import { I18nextProvider } from 'react-i18next';
import { createI18N, Language } from './i18n';
import fs from 'fs';
import path from 'path';


function render(resume: ResumeType) {
  // Lecture du CSS à l'exécution
  const cssPath = path.resolve(__dirname, '../style.css');
  let styles = '';
  try {
    styles = fs.readFileSync(cssPath, 'utf8');
  } catch (e) {
    styles = '';
  }
  console.log(styles)
  const resumeHtml = renderToString(
    <I18nextProvider i18n={createI18N('fr')}>
      <Resume {...resume} />
    </I18nextProvider>
  );
  return `<!doctype html><html lang="en"><head>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>${resume.basics?.name || 'Resume'}</title>
     <style>${styles}</style>
  </head>
  <body>
  <div id="root">
  ${resumeHtml}
  </div></body>
      </html>`;
};

export { render };
// Pour CommonJS (nécessaire pour resumed)
module.exports = { render,
  pdfRenderOptions: {
    printBackground: true
  }
 };