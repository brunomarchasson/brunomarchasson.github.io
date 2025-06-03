// Script Node.js pour générer le HTML du CV avec le thème passé en argument
// Usage : node scripts/build-html.js classic|local

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recherche d'un paramètre nommé --theme=xxx
let theme = 'classic';
for (const arg of process.argv) {
  if (arg.startsWith('--theme=')) {
    theme = arg.split('=')[1];
  }
}
// Si aucun --theme=xxx, on prend le dernier argument utilisateur (hors node, script, --)
if (theme === 'classic') {
  const userArgs = process.argv.filter(arg => !arg.endsWith('node.exe') && !arg.endsWith('build-html.js') && arg !== '--' && !arg.startsWith('--theme='));
  if (userArgs.length > 0) theme = userArgs[userArgs.length - 1];
}

const resumePath = path.resolve(__dirname, '../resume.json');
const distDir = path.resolve(__dirname, '../dist');
const outPath = path.join(distDir, 'index.html');
const nodeExec = process.execPath;

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const themeBin = path.resolve(__dirname, '../theme/'+theme+'/bin/generate.js')

if (!fs.existsSync(themeBin)) {
  console.error(`Script JS du thème introuvable : ${themeBin}`);
  process.exit(1);
}

try {
  execSync(`"${nodeExec}" "${themeBin}" "${resumePath}" > "${outPath}"`, { shell: true, stdio: 'inherit' });
  console.log(`CV généré avec le thème '${theme}' dans dist/index.html`);
} catch (e) {
  console.error('Erreur lors de la génération du CV:', e);
  process.exit(1);
}
