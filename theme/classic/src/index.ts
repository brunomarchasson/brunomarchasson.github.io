import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import App from './App.vue';
import fs from 'fs';
import path from 'path';

export async function render(resume: any) {
  const app = createSSRApp({
    render: () => h(App, { resume })
  });

  // Lecture du CSS
  const cssPath = path.resolve(__dirname, '../style.css');
  let styles = '';
  try {
    styles = fs.readFileSync(cssPath, 'utf8');
  } catch (e) {
    styles = '';
  }

  const html = await renderToString(app);
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>${resume.basics?.name || 'CV'}</title>
  <style>${styles}</style>
</head>
<body>
  <div id="app">${html}</div>
</body>
</html>`;
}