#!/usr/bin/env node
/*
 * Copyright (c) 2026 Aegis AO Soft LLC. All rights reserved.
 *
 * Turns the built single-page app into static pages, one per route.
 *
 * Why this exists: aegisaosoft.com is a Vite React app, so every address on the domain
 * returned the same 459-byte shell — a <title> and an empty <div id="root">. Search engines
 * run the script eventually and saw the pages; the crawlers behind the AI assistants people
 * now ask for software recommendations (ClaudeBot, GPTBot, PerplexityBot) do not run
 * JavaScript at all, so to them the company had no site. Google, for its part, could not tell
 * the home page from www. and indexed neither. This walks the built app in a real browser and
 * writes what it renders to dist/<route>/index.html, head and all.
 *
 * The snapshots are not hydrated: main.tsx calls createRoot, so React discards the prerendered
 * DOM and renders its own over it. That is deliberate — the snapshot is English, and a visitor
 * whose browser asks for Portuguese must not be handed a half-hydrated English page.
 *
 * Deliberately soft: no browser, or a page that fails to render, warns and exits 0. A company
 * site that cannot deploy because a prerender step broke is worse than one that deploys
 * without snapshots.
 *
 *   node scripts/prerender.js [distDir]
 */
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = path.join(__dirname, '..');
const BUILD = path.resolve(process.argv[2] || path.join(ROOT, 'client', 'dist'));

/** Enough rendered text to call a page rendered. The shell has none. */
const MIN_TEXT = 200;
const PAGE_TIMEOUT = 30000;

const warn = (message) => console.warn(`prerender: ${message}`);

const routesToRender = () =>
  JSON.parse(fs.readFileSync(path.join(ROOT, 'client', 'src', 'seo', 'pages.json'), 'utf8'))
    .pages.map((page) => page.path);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.map': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

/**
 * Serves the build the way the server serves it: static files first, the shell for everything
 * else. Written against node's own http so the step needs nothing installed beyond the browser
 * driver. Port 0 so a dev server already running is left alone.
 */
const serve = () =>
  new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const requested = decodeURIComponent((req.url || '/').split('?')[0]);
      // Nothing outside the build directory is servable, whatever the path says.
      const resolved = path.resolve(BUILD, `.${requested}`);
      const file =
        resolved.startsWith(BUILD) && fs.existsSync(resolved) && fs.statSync(resolved).isFile()
          ? resolved
          : path.join(BUILD, 'index.html');
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });

/*
 * A browser, from wherever one is: puppeteer's own download in CI, and the Chrome that is
 * already on a developer machine otherwise — which is what makes this runnable before it is
 * pushed.
 */
const CHROME_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const launchBrowser = async () => {
  const args = ['--no-sandbox', '--disable-dev-shm-usage'];
  let core;
  try {
    core = require('puppeteer-core');
  } catch (err) {
    try {
      core = require('puppeteer');
    } catch (err2) {
      return null;
    }
  }
  const executablePath = CHROME_CANDIDATES.find((candidate) => {
    try {
      return fs.existsSync(candidate);
    } catch (err) {
      return false;
    }
  });
  if (!executablePath) return null;
  return core.launch({ headless: 'new', executablePath, args });
};

const snapshot = async (page, url) => {
  await page.goto(url, { waitUntil: 'networkidle0', timeout: PAGE_TIMEOUT });
  // The locale bundles land after the network first goes quiet; waiting on rendered text
  // covers that without knowing which page this is.
  await page.waitForFunction(
    (min) => {
      const root = document.getElementById('root');
      return !!root && (root.innerText || '').trim().length > min;
    },
    { timeout: PAGE_TIMEOUT },
    MIN_TEXT
  );
  if (typeof page.waitForNetworkIdle === 'function') {
    await page.waitForNetworkIdle({ idleTime: 600, timeout: 8000 }).catch(() => undefined);
  }
  return page.evaluate(() => `<!DOCTYPE html>\n${document.documentElement.outerHTML}`);
};

const outputFile = (route) =>
  route === '/' ? path.join(BUILD, 'index.html') : path.join(BUILD, route, 'index.html');

const main = async () => {
  if (!fs.existsSync(path.join(BUILD, 'index.html'))) {
    warn(`no build at ${BUILD} — nothing to prerender`);
    return;
  }

  const browser = await launchBrowser();
  if (!browser) {
    warn('no Chrome or Chromium available; the site deploys as a plain SPA (crawlers see the shell)');
    return;
  }

  const { server, port } = await serve();
  const base = `http://127.0.0.1:${port}`;
  const routes = routesToRender();
  const rendered = new Map();
  let failed = 0;

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    // A snapshot must not inherit a language a previous page stored.
    await page.evaluateOnNewDocument(() => {
      try {
        window.localStorage.clear();
      } catch (err) {
        /* storage unavailable: the app falls back to English anyway */
      }
    });

    for (const route of routes) {
      try {
        rendered.set(route, await snapshot(page, base + route));
      } catch (err) {
        failed += 1;
        warn(`${route}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Written only after every page is rendered: '/' overwrites the shell the others are served
  // from, so writing as we go would prerender later routes from an earlier one.
  for (const [route, html] of rendered) {
    const file = outputFile(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
  }

  console.log(`prerender: ${rendered.size}/${routes.length} routes written to ${BUILD}`);
  if (failed) warn(`${failed} route(s) left as the SPA shell`);
};

main().catch((err) => {
  warn(`skipped: ${err && err.message}`);
});
