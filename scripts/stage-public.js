#!/usr/bin/env node
/*
 * Copyright (c) 2026 Aegis AO Soft LLC. All rights reserved.
 *
 * Puts the built client where the server serves it from, exactly as the deploy workflow does:
 * client/dist into server/public, plus the page table the server reads to know which addresses
 * are pages. Running the checks against anything else would be checking a different site.
 *
 *   node scripts/stage-public.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'client', 'dist');
const PUBLIC_DIR = path.join(ROOT, 'server', 'public');

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('stage-public: client/dist is missing — run npm run build first');
  process.exit(1);
}

fs.rmSync(PUBLIC_DIR, { recursive: true, force: true });
fs.cpSync(DIST, PUBLIC_DIR, { recursive: true });
fs.copyFileSync(
  path.join(ROOT, 'client', 'src', 'seo', 'pages.json'),
  path.join(PUBLIC_DIR, 'pages.json')
);

console.log(`stage-public: ${DIST} -> ${PUBLIC_DIR} (+ pages.json)`);
