const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1080, height: 1350 });

  const htmlPath = path.resolve(__dirname, 'carrossel.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  // Aguarda fontes carregarem
  await page.waitForTimeout(2500);

  const outDir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const slides = await page.$$('.slide');

  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const dest = path.join(outDir, `slide-${num}.png`);
    await slides[i].screenshot({ path: dest });
    console.log(`✓ slide-${num}.png`);
  }

  await browser.close();
  console.log(`\nPronto — ${slides.length} slides em instagram/`);
})();
