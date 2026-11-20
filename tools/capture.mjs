// Renders poster/poster.html to entry.png with the local Chrome for Testing
// binary (headless). Usage: node tools/capture.mjs [out.png]
// New headless crops the bottom of a 1024x1024 shot, so this uses
// --headless=old, which renders the full page.
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] ?? join(root, 'entry.png'));
const page = 'file://' + join(root, 'poster', 'poster.html');

const candidates = [
  process.env.CHROME_PATH,
  '/home/hatch/workspace/makefun/token-radar-work/chrome-linux64/chrome',
  join(root, '..', 'token-radar-work', 'chrome-linux64', 'chrome'),
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error('Chrome for Testing not found. Set CHROME_PATH.');
  process.exit(1);
}

const run = spawnSync(chrome, [
  '--headless=old',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--window-size=1024,1024',
  `--screenshot=${out}`,
  page,
], { stdio: 'inherit' });
if (run.status !== 0) process.exit(run.status ?? 1);
console.log('wrote', out);
