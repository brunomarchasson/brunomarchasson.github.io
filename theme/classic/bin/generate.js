#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const resumePath = process.argv[2];
  if (!resumePath) {
    console.error('Usage: generate.js <resume.json>');
    process.exit(1);
  }
  const resume = JSON.parse(fs.readFileSync(resumePath, 'utf8'));
  const { render } = await import(path.resolve(__dirname, '../dist/index.js'));
  const html = await render(resume);
  process.stdout.write(html);
}

main();