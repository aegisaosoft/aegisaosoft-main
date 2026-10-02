#!/usr/bin/env node
/*
 * Copyright (c) 2026 Aegis AO Soft LLC. All rights reserved.
 *
 * What the site answers, checked by asking it.
 *
 * The defects this guards against all looked fine from a browser and were only visible to a
 * crawler: the home page and www. serving byte-identical HTML with no canonical between them
 * (Search Console: "duplicate, no user-declared canonical", home page unindexed), every
 * address returning the same title and description, and every guessed path returning the shell
 * with a 200 — a soft 404, which is how pages that never existed end up in an index.
 *
 * There is no test runner in this repository, so the server is started as a child process on
 * its own port and probed over HTTP.
 *
 *   node scripts/check-site.js     (needs client/dist and server/public — see npm run verify)
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PORT = 5287;
const BASE = `http://127.0.0.1:${PORT}`;
const PUBLIC_DIR = path.join(ROOT, 'server', 'public');

const seo = JSON.parse(fs.readFileSync(path.join(ROOT, 'client', 'src', 'seo', 'pages.json'), 'utf8'));
const SITE = seo.site;

const failures = [];
const fail = (message) => failures.push(message);

const get = (urlPath, headers = {}) =>
  new Promise((resolve, reject) => {
    const req = http.get(`${BASE}${urlPath}`, { headers }, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error(`timed out on ${urlPath}`)));
  });

const post = (urlPath, payload) =>
  new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = http.request(`${BASE}${urlPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, (res) => {
      let text = '';
      res.on('data', (chunk) => { text += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: text }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error(`timed out on POST ${urlPath}`)));
    req.end(body);
  });

const waitForServer = async () => {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      await get('/');
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  return false;
};

const tagOf = (html, name) => {
  const match = html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`));
  return match ? match[1] : null;
};
const canonicalOf = (html) => {
  const match = html.match(/<link rel="canonical" href="([^"]*)"/);
  return match ? match[1] : null;
};
const titleOf = (html) => {
  const match = html.match(/<title>([^<]*)<\/title>/);
  return match ? match[1] : null;
};

(async () => {
  if (!fs.existsSync(path.join(PUBLIC_DIR, 'index.html'))) {
    console.error('check-site: server/public is missing — run npm run verify');
    process.exit(1);
  }

  /* --------------------------------------------------- the files, before the server runs */

  const sitemapPath = path.join(ROOT, 'client', 'public', 'sitemap.xml');
  const robotsPath = path.join(ROOT, 'client', 'public', 'robots.txt');
  if (!fs.existsSync(sitemapPath) || !fs.existsSync(robotsPath)) {
    fail('sitemap.xml or robots.txt is missing — run node scripts/generate-seo.js');
  } else {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    const robots = fs.readFileSync(robotsPath, 'utf8');
    for (const page of seo.pages) {
      const listed = sitemap.includes(`<loc>${SITE}${page.path}</loc>`);
      if (page.noindex && listed) fail(`sitemap.xml lists ${page.path}, which is noindex`);
      if (!page.noindex && !listed) fail(`sitemap.xml is missing ${page.path} — regenerate it`);
    }
    const listedCount = (sitemap.match(/<loc>/g) || []).length;
    const indexable = seo.pages.filter((page) => !page.noindex).length;
    if (listedCount !== indexable) {
      fail(`sitemap.xml has ${listedCount} urls, expected ${indexable} — regenerate it`);
    }
    if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt does not name the sitemap');
  }

  /*
   * Titles and descriptions belong to one page each. Two pages sharing them is what Bing
   * reports as "identical titles" and Google treats as one page having been published twice.
   */
  const seen = new Map();
  for (const page of seo.pages) {
    for (const [what, value] of [['title', page.title], ['description', page.description]]) {
      const key = `${what}:${value}`;
      if (seen.has(key)) fail(`${page.path} and ${seen.get(key)} share the same ${what}`);
      seen.set(key, page.path);
    }
    if (!page.description || page.description.length < 50) {
      fail(`${page.path} has no usable description`);
    }
  }

  /*
   * Every route the app declares is listed here too. The server answers an address that is
   * not in pages.json with a 404, so a new product page added to App.tsx alone works under
   * `vite dev` and is a 404 in production.
   */
  const appSource = fs.readFileSync(path.join(ROOT, 'client', 'src', 'App.tsx'), 'utf8');
  const known = new Set([...seo.pages.map((p) => p.path), ...Object.keys(seo.redirects || {})]);
  for (const [, route] of appSource.matchAll(/<Route path="([^"*]+)"/g)) {
    if (!known.has(route)) fail(`App.tsx routes ${route}, but pages.json does not list it`);
  }

  /*
   * The public contact address is alex@aegisaosoft.com — on the company's own domain, which is what
   * Google Play and the Microsoft Store verify the developer against. The old Gmail inbox must not
   * creep back in through the footer, the contact page or a translated error message.
   */
  const assetsDir = path.join(PUBLIC_DIR, 'assets');
  const bundle = fs.existsSync(assetsDir)
    ? fs.readdirSync(assetsDir).filter((f) => f.endsWith('.js'))
      .map((f) => fs.readFileSync(path.join(assetsDir, f), 'utf8')).join('\n')
    : '';
  if (!bundle) fail('no built JavaScript in server/public/assets — run npm run build and npm run stage first');
  if (bundle.includes('aegisaosoft@gmail.com')) fail('the site still shows aegisaosoft@gmail.com as a contact address');
  if (bundle && !bundle.includes('alex@aegisaosoft.com')) fail('the site does not show alex@aegisaosoft.com anywhere');

  /*
   * The contact form reaches the company inbox. It used to post to http://localhost:5000 (a dev
   * default baked into every production build) and the server only logged what arrived.
   */
  if (bundle.includes('localhost:5000')) fail("the built app still calls http://localhost:5000 — the contact form would post to the visitor's own machine");
  const contactMail = require(path.join(ROOT, 'server', 'contactMail.js'));
  const visitor = { name: 'Pat Example', email: 'pat@example.com', company: 'Example Fleet', message: 'Hello' };
  const built = contactMail.buildMessage(contactMail.readInquiry(visitor).inquiry, { SMTP_USER: 'alex@aegisaosoft.com' });
  if (built.to !== 'alex@aegisaosoft.com') fail(`contact mail goes to ${built.to}, expected alex@aegisaosoft.com`);
  if (built.replyTo.address !== 'pat@example.com') fail('contact mail does not reply to the visitor');
  if (built.from.address !== 'alex@aegisaosoft.com') fail('contact mail is not sent from the SMTP mailbox itself');
  for (const [why, bad] of [
    ['missing message', { ...visitor, message: ' ' }],
    ['line break in the name (header injection)', { ...visitor, name: 'Pat\r\nBcc: x@example.com' }],
    ['malformed email', { ...visitor, email: 'pat@' }],
    ['oversized message', { ...visitor, message: 'x'.repeat(5001) }],
  ]) {
    if (!contactMail.readInquiry(bad).error) fail(`contact form accepted a ${why}`);
  }
  if (contactMail.createTransport({}) !== null) fail('contact form claims a mail transport with no SMTP credentials');

  /* ------------------------------------------------------------------ what the server says */

  const server = spawn(process.execPath, [path.join(ROOT, 'server', 'index.js')], {
    cwd: ROOT,
    // json transport: the contact form builds and "sends" its mail without an SMTP server.
    env: { ...process.env, PORT: String(PORT), NODE_ENV: 'production', CONTACT_MAIL_TRANSPORT: 'json' },
    stdio: 'ignore',
  });

  try {
    if (!await waitForServer()) {
      console.error('check-site: the server did not come up');
      process.exit(1);
    }

    // Every page answers 200, names itself as the canonical, and carries its own description.
    for (const page of seo.pages) {
      const res = await get(page.path);
      if (res.status !== 200) {
        fail(`${page.path} answered ${res.status}, expected 200`);
        continue;
      }
      const canonical = canonicalOf(res.body);
      if (canonical !== `${SITE}${page.path}`) {
        fail(`${page.path} declares canonical "${canonical}", expected ${SITE}${page.path}`);
      }
      if (titleOf(res.body) !== page.title) {
        fail(`${page.path} is titled "${titleOf(res.body)}", expected "${page.title}"`);
      }
      if (tagOf(res.body, 'description') !== page.description) {
        fail(`${page.path} does not carry its own description — is the snapshot stale?`);
      }
      const robots = tagOf(res.body, 'robots') || '';
      if (page.noindex && !robots.startsWith('noindex')) {
        fail(`${page.path} should be noindex but says "${robots}"`);
      }
      if (!page.noindex && robots.startsWith('noindex')) {
        fail(`${page.path} is served as noindex`);
      }
    }

    // The addresses the router redirects are answered before the app loads.
    for (const [from, to] of Object.entries(seo.redirects || {})) {
      const res = await get(from);
      if (res.status !== 301) fail(`${from} answered ${res.status}, expected a 301`);
      if (res.headers.location !== to) {
        fail(`${from} redirects to "${res.headers.location}", expected ${to}`);
      }
    }

    // Any other hostname pointed at this app is a copy of the site, and the copy is what
    // Google indexed. They redirect here, path intact.
    for (const other of ['www.aegisaosoft.com', 'aegisaosoft.net']) {
      const res = await get('/about', { Host: other });
      if (res.status !== 301) fail(`Host: ${other} answered ${res.status}, expected 301`);
      const target = `${SITE}/about`;
      if (res.headers.location !== target) {
        fail(`Host: ${other} redirected to "${res.headers.location}", expected ${target}`);
      }
    }

    // Azure's own hostname keeps serving the app — health probes use it — but is not indexed.
    const azure = await get('/', { Host: 'aegisaosoft.azurewebsites.net' });
    if (azure.status !== 200) fail(`the Azure hostname answered ${azure.status}, expected 200`);
    if (azure.headers['x-robots-tag'] !== 'noindex') {
      fail('the Azure hostname is served without X-Robots-Tag: noindex');
    }

    // An address the site does not have is refused, twice over.
    for (const ghost of ['/product', '/company', '/nonexistent-xyz', '/products/nope']) {
      const res = await get(ghost);
      if (res.status !== 404) fail(`${ghost} answered ${res.status}, expected 404`);
      if (tagOf(res.body, 'robots') !== 'noindex, follow') {
        fail(`${ghost} is a 404 but its robots tag says "${tagOf(res.body, 'robots')}"`);
      }
      if (!res.body.includes('<div id="root">')) fail(`${ghost} did not return the app shell`);
    }

    // The contact form answers 400 for an incomplete inquiry and 200 once the mail is handed over.
    const incomplete = await post('/api/contact', { name: 'Pat', email: 'pat@example.com' });
    if (incomplete.status !== 400) fail(`incomplete contact inquiry answered ${incomplete.status}, expected 400`);
    const sent = await post('/api/contact', { name: 'Pat', email: 'pat@example.com', message: 'Hello' });
    if (sent.status !== 200) fail(`contact inquiry answered ${sent.status}, expected 200`);

    // The API is still there, and still JSON.
    const health = await get('/api/health');
    if (health.status !== 200) fail(`/api/health answered ${health.status}`);
    if (health.body.includes('<html')) fail('/api/health returned HTML instead of JSON');
  } catch (err) {
    fail(`probe failed: ${err.message}`);
  } finally {
    server.kill();
  }

  if (failures.length) {
    console.error('Site check failed:\n');
    for (const message of failures) console.error(`  - ${message}`);
    process.exit(1);
  }
  console.log(
    `Site check passed: ${seo.pages.length} pages with their own metadata, `
    + 'other hosts redirected, unknown paths 404 + noindex.'
  );
})();
