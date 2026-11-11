// Cuts a release: bump version, build a signed installer, publish it to GitHub Releases
// together with latest.json, which installed copies poll for updates.
// Usage: npm run release [patch|minor|major|none]   (commit your changes first)
// `none` publishes the version already in package.json without bumping it.
import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const run = (cmd, env) => execSync(cmd, { stdio: 'inherit', env: { ...process.env, ...env } });
const out = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

const bump = process.argv[2] || 'patch';
if (!['patch', 'minor', 'major', 'none'].includes(bump)) throw new Error('usage: npm run release [patch|minor|major|none]');
if (out('git status --porcelain')) throw new Error('Commit or stash your changes first.');
const key = process.env.TAURI_SIGNING_PRIVATE_KEY || join(homedir(), '.tauri', 'vermil-tasks.key');
if (!existsSync(key) && !process.env.TAURI_SIGNING_PRIVATE_KEY) throw new Error(`Signing key not found at ${key}`);
const repo = out('gh repo view --json nameWithOwner -q .nameWithOwner');

if (bump !== 'none') run(`npm version ${bump} --no-git-tag-version`);
const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
const tag = `v${version}`;

run('npx tauri build', { TAURI_SIGNING_PRIVATE_KEY: key, TAURI_SIGNING_PRIVATE_KEY_PASSWORD: process.env.TAURI_SIGNING_PRIVATE_KEY_PASSWORD || '' });

// GitHub rewrites spaces in asset names, so publish under a name without any
const built = join('src-tauri', 'target', 'release', 'bundle', 'nsis', `Vermil Tasks_${version}_x64-setup.exe`);
const dir = join('src-tauri', 'target', 'release-assets');
mkdirSync(dir, { recursive: true });
const asset = `VermilTasks_${version}_x64-setup.exe`;
copyFileSync(built, join(dir, asset));
writeFileSync(join(dir, 'latest.json'), JSON.stringify({
  version,
  pub_date: new Date().toISOString(),
  platforms: {
    'windows-x86_64': {
      signature: readFileSync(built + '.sig', 'utf8'),
      url: `https://github.com/${repo}/releases/download/${tag}/${asset}`,
    },
  },
}, null, 2));

if (bump !== 'none') {
  run('git add package.json package-lock.json');
  run(`git commit -m "Release ${tag}"`);
}
if (!out(`git tag -l ${tag}`)) run(`git tag -a ${tag} -m "Vermil Tasks ${version}"`);
run('git push --follow-tags');
run(`gh release create ${tag} "${join(dir, asset)}" "${join(dir, 'latest.json')}" --title "Vermil Tasks ${version}" --generate-notes`);
console.log(`\nReleased ${tag}. Installed copies will offer the update.`);
