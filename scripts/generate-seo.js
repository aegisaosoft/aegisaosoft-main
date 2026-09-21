#!/usr/bin/env node
/*
 * Copyright (c) 2026 Aegis AO Soft LLC. All rights reserved.
 *
 * Writes the two files a crawler asks for before it reads anything else:
 *
 *   client/public/robots.txt  — what may be crawled, and where the sitemap is.
 *   client/public/sitemap.xml — every indexable address of the site.
 *
 * Both are generated from client/src/seo/pages.json and committed, because the deploy builds
 * the client and never runs this. Re-run it after adding or removing a route:
 *
 *   node scripts/generate-seo.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'client', 'public');
const seo = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'client', 'src', 'seo', 'pages.json'), 'utf8')
);

const SITE = seo.site;
const indexable = seo.pages.filter((page) => !page.noindex);
const today = new Date().toISOString().slice(0, 10);

/* The home page above the rest, and the product pages above the marketing ones they explain. */
const priorityOf = (route) => {
  if (route === '/') return '1.0';
  return route.startsWith('/products') ? '0.8' : '0.6';
};

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexable.map((page) => [
    '  <url>',
    `    <loc>${SITE}${page.path}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    '    <changefreq>monthly</changefreq>',
    `    <priority>${priorityOf(page.path)}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

/*
 * Everything is crawlable except the two addresses that work but have no business in a result
 * page. They carry `noindex` as well — robots.txt only stops the crawl, and an address that is
 * never crawled can still be indexed from a link somewhere else.
 */
const robots = [
  'User-agent: *',
  'Allow: /',
  ...seo.pages.filter((page) => page.noindex).map((page) => `Disallow: ${page.path}`),
  '',
  `Sitemap: ${SITE}/sitemap.xml`,
  '',
].join('\n');

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots);

console.log(`sitemap.xml: ${indexable.length} urls`);
console.log('robots.txt: written');
