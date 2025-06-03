import puppeteer from 'puppeteer';
import process from 'process';


(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto(`file://${process.cwd()}/dist/index.html`, { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'dist/resume.pdf', format: 'A4' });
  await browser.close();
})();