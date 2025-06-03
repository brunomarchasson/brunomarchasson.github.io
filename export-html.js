const fs = require('fs');
const path = require('path');

// Charge le JSON du CV
const resume = JSON.parse(fs.readFileSync('resume.json', 'utf8'));

// Charge le thème local
const {render} = require('./theme/custom/dist');

// Génère le HTML
const html = render(resume);

// Crée le dossier dist si besoin
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Écrit le HTML dans dist/index.html
fs.writeFileSync(path.join(distDir, 'index.html'), html);

console.log('CV généré dans dist/index.html');