#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Copier le resume.json fourni en argument (ou à la racine du projet) dans public/
const resumeArg = process.argv[2];
const resumeSrc = resumeArg && fs.existsSync(resumeArg)
  ? resumeArg
  : path.resolve(rootDir, '../../resume.json');
const resumeDest = path.resolve(rootDir, 'public/resume.json');
fs.copyFileSync(resumeSrc, resumeDest);

// 2. Lancer le build Astro
execSync('pnpm build', { cwd: rootDir, stdio: 'inherit', shell: true });

// 3. Lire le HTML généré
const htmlPath = path.resolve(rootDir, 'dist/index.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

// 4. Exporter la méthode render attendue par jsonresume
export function render() {
  return html;
}

// 5. Si appelé en CLI, afficher le HTML (pour compatibilité avec le build-html.js principal)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  process.stdout.write(html);
}
