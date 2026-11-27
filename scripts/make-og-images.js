#!/usr/bin/env node
/*
 * Copyright (c) 2026 Aegis AO Soft LLC and Alexander Orlov.
 * 34 Middletown Ave, Atlantic Highlands, NJ 07716
 *
 * THIS SOFTWARE IS THE CONFIDENTIAL AND PROPRIETARY INFORMATION OF
 * Aegis AO Soft LLC and Alexander Orlov.
 *
 * This code may be used, reproduced, modified, or distributed ONLY with the
 * prior written permission of Aegis AO Soft LLC / Alexander Orlov.
 *
 * Author: Alexander Orlov
 * Aegis AO Soft LLC
 */

/*
 * Draws the link-preview card (og:image) for every product: client/public/og/<name>.png,
 * 1200 x 627, the size LinkedIn, Facebook and X crop to.
 *
 * Why this exists: every page used to share hero-bg.jpg, a 538 x 404 picture with no words on
 * it, so a LinkedIn post linking eight products showed eight identical pictures. Each card now
 * names its product. pages.json says which card a page uses ("image"); SeoHead writes it into
 * og:image and the prerendered snapshot carries it to crawlers that run no JavaScript.
 *
 * Not part of the build: the PNGs are committed. Run it again after changing a card:
 *
 *   node scripts/make-og-images.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'client', 'public', 'og');
const W = 1200;
const H = 627;

const dataUri = (file) => {
  const ext = path.extname(file).slice(1).replace('jpg', 'jpeg');
  return `data:image/${ext};base64,${fs.readFileSync(path.join(ROOT, file)).toString('base64')}`;
};

const SHIELD = dataUri('client/src/assets/logo.png');
const EZ_LOGO = dataUri('client/src/assets/myeztoll-logo.png');
const EZ_MARK = dataUri('client/src/assets/ez-mark.png');
const RENTAL = dataUri('client/public/rental-bg.jpg');
const BRAZIL = dataUri('client/public/brazilian-bg.jpg');

const chips = (items) => `<div class="chips">${items.map((c) => `<span>${c}</span>`).join('')}</div>`;

/* The right half of each card: something that is that product and no other. */
const art = {
  company: `<div class="art"><img class="shield-big" src="${SHIELD}" alt=""></div>`,
  myeztoll: `<div class="art"><img class="logo-inv" src="${EZ_LOGO}" alt=""></div>`,
  owner: `<div class="art"><div class="phone"><div class="notch"></div>
      <img class="phone-logo" src="${EZ_MARK}" alt="">
      <div class="row w80"></div><div class="row w60"></div><div class="row w70 accent"></div>
      <div class="row w50"></div></div></div>`,
  myezwheels: `<div class="art photo" style="background-image:url('${RENTAL}')">
      <img class="mark-on-photo" src="${EZ_MARK}" alt=""></div>`,
  mercadinho: `<div class="art photo" style="background-image:url('${BRAZIL}')"></div>`,
  localizer: `<div class="art"><div class="code">
      <div><span class="k">&lt;h1&gt;</span><s>Welcome back</s><span class="k">&lt;/h1&gt;</span></div>
      <div class="arrow">&#8595;</div>
      <div><span class="k">&lt;h1&gt;</span>{t(<span class="str">'home.title'</span>)}<span class="k">&lt;/h1&gt;</span></div>
      <div class="langs">${['EN', 'ES', 'PT', 'FR', 'DE', 'NB', 'RU', 'AR', 'ZH', 'JA'].map((l) => `<b>${l}</b>`).join('')}</div>
    </div></div>`,
  huecontrol: `<div class="art"><div class="bulbs">
      <i style="--c:#ffb648;left:40px;top:70px"></i><i style="--c:#ff4f8b;left:210px;top:30px"></i>
      <i style="--c:#7c5cff;left:330px;top:190px"></i><i style="--c:#36c5f0;left:120px;top:250px"></i>
      <i style="--c:#4ade80;left:300px;top:360px"></i><i style="--c:#ffe066;left:60px;top:410px"></i>
    </div></div>`,
  sewgen: `<div class="art"><svg viewBox="0 0 400 400" width="400" height="400">
      <circle cx="200" cy="200" r="170" fill="none" stroke="#f5b91e" stroke-width="6" stroke-dasharray="14 10"/>
      <circle cx="200" cy="200" r="148" fill="none" stroke="#ffffff33" stroke-width="2"/>
      <text x="200" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="260" font-weight="bold" font-style="italic"
        fill="none" stroke="#ffffff" stroke-width="5" stroke-dasharray="12 8">S</text>
    </svg></div>`,
};

const cards = [
  {
    file: 'aegis-ao-soft', art: art.company, name: 'Aegis AO Soft',
    line: 'AI-powered software platforms for real operations',
    chips: ['MyEZToll', 'MyEZWheels', 'Mercadinho25', 'Aegis Localizer', 'HueControl', 'SewGen'],
  },
  {
    file: 'myeztoll', art: art.myeztoll, name: 'MyEZToll',
    line: 'Toll, GPS and violation platform for rental fleets',
    chips: ['Tolls', 'Tickets', 'Tesla Supercharging', 'Billed to the renter'],
  },
  {
    file: 'myeztoll-owner', art: art.owner, name: 'MyEZToll Owner',
    line: 'Android app for rental fleet owners',
    chips: ['Fleet dashboard', 'Bookings', 'Disputes', 'Turo sync'],
  },
  {
    file: 'myezwheels', art: art.myezwheels, name: 'MyEZWheels',
    line: 'Your own rental storefront, on your own domain',
    chips: ['15 languages', 'Licence capture', 'Online payments'],
  },
  {
    file: 'mercadinho25', art: art.mercadinho, name: 'Mercadinho25',
    line: 'Marketplace platform for Brazilian artisan products',
    chips: ['AI translation', 'Social commerce', 'Multi-tenant'],
  },
  {
    file: 'aegis-localizer', art: art.localizer, name: 'Aegis Localizer',
    line: 'AI localization for any codebase',
    chips: ['Finds hardcoded strings', 'Translates with Claude', 'Rewrites the source'],
  },
  {
    file: 'huecontrol', art: art.huecontrol, name: 'HueControl',
    line: 'Windows control centre for Philips Hue',
    chips: ['Lights', 'Rooms', 'Scenes', 'Sensors', 'Free'],
  },
  {
    file: 'sewgen', art: art.sewgen, name: 'SewGen',
    line: 'AI embroidery and monogram file generator',
    chips: ['DST', 'PES', 'JEF', '$4.99 per design'],
  },
];

const css = `
* { margin: 0; box-sizing: border-box; }
body { width: ${W}px; height: ${H}px; overflow: hidden; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  background: radial-gradient(circle at 85% 20%, #1d2a44 0, #0d121c 55%, #090c12 100%); color: #fff; }
.card { position: relative; width: ${W}px; height: ${H}px; display: flex; }
.text { width: 640px; padding: 72px 0 0 72px; position: relative; z-index: 2; }
.bar { width: 72px; height: 8px; background: #f5b91e; border-radius: 4px; margin-bottom: 36px; }
h1 { font-size: 78px; line-height: 1.02; font-weight: 800; letter-spacing: -1.5px; }
p { font-size: 34px; line-height: 1.25; color: #c9d1e0; margin-top: 22px; max-width: 560px; }
.chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 34px; max-width: 580px; }
.chips span { font-size: 20px; padding: 8px 16px; border: 1.5px solid #f5b91e88; border-radius: 999px; color: #f3e3b5; }
.brand { position: absolute; left: 72px; bottom: 52px; display: flex; align-items: center; gap: 14px;
  font-size: 22px; color: #aab3c5; z-index: 2; }
.brand img { width: 46px; height: 46px; border-radius: 10px; }
.art { position: absolute; right: 0; top: 0; width: 520px; height: ${H}px; display: flex;
  align-items: center; justify-content: center; }
.photo { width: 620px; background-size: cover; background-position: center;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 45%); mask-image: linear-gradient(90deg, transparent 0%, #000 45%); }
.mark-on-photo { position: absolute; right: 40px; bottom: 40px; width: 150px; filter: invert(1) drop-shadow(0 2px 6px #000); }
.shield-big { width: 360px; border-radius: 40px; box-shadow: 0 20px 60px #0008; }
.logo-inv { width: 420px; filter: invert(1); }
.phone { position: relative; width: 250px; height: 480px; border: 6px solid #e5e7eb; border-radius: 40px;
  background: #121a29; padding: 60px 26px 0; box-shadow: 0 20px 60px #0009; }
.notch { position: absolute; top: 14px; left: 50%; width: 80px; height: 10px; margin-left: -40px;
  background: #e5e7eb; border-radius: 6px; }
.phone-logo { width: 150px; filter: invert(1); display: block; margin: 10px auto 40px; }
.row { height: 22px; border-radius: 8px; background: #2a3650; margin-bottom: 18px; }
.row.accent { background: #f5b91e; } .w80 { width: 80%; } .w60 { width: 60%; } .w70 { width: 70%; } .w50 { width: 50%; }
.code { font-family: Consolas, 'Courier New', monospace; font-size: 26px; background: #0a0f18;
  border: 1.5px solid #2a3650; border-radius: 16px; padding: 34px 32px; width: 450px; color: #e5e7eb; }
.code .k { color: #60a5fa; } .code .str { color: #f5b91e; } .code s { color: #94a3b8; }
.code .arrow { color: #f5b91e; font-size: 34px; margin: 10px 0; text-align: center; }
.langs { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 26px; }
.langs b { font-size: 18px; font-weight: 600; padding: 5px 10px; border-radius: 6px; background: #1e293b; color: #cbd5e1; }
.bulbs { position: relative; width: 460px; height: 520px; }
.bulbs i { position: absolute; width: 110px; height: 110px; border-radius: 50%; background: var(--c);
  box-shadow: 0 0 60px 18px var(--c); opacity: .9; }
`;

const html = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
  <div class="card">${c.art}
    <div class="text"><div class="bar"></div><h1>${c.name}</h1><p>${c.line}</p>${chips(c.chips)}</div>
    <div class="brand"><img src="${SHIELD}" alt="">aegisaosoft.com</div>
  </div></body></html>`;

const CHROMES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

(async () => {
  const puppeteer = require('puppeteer-core');
  const executablePath = CHROMES.find((p) => fs.existsSync(p));
  if (!executablePath) throw new Error('no Chrome found; set CHROME_PATH');
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath, headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
    for (const c of cards) {
      await page.setContent(html(c), { waitUntil: 'load' });
      const file = path.join(OUT, `${c.file}.png`);
      await page.screenshot({ path: file, clip: { x: 0, y: 0, width: W, height: H } });
      console.log(`og: ${path.relative(ROOT, file)}`);
    }
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
