/**
 * Custom deploy script that bypasses gh-pages ENAMETOOLONG issue.
 * Force-pushes the out/ folder directly to the gh-pages branch using raw git.
 */
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'out')

function run(cmd, opts = {}) {
  console.log('>', cmd)
  return execSync(cmd, { stdio: 'inherit', ...opts })
}

// Ensure .nojekyll is present
fs.writeFileSync(path.join(outDir, '.nojekyll'), '')

// Init a fresh git repo inside out/ and force-push to gh-pages
run('git init -b gh-pages', { cwd: outDir })
run('git config core.longpaths true', { cwd: outDir })
run('git config user.email "deploy@vpee.co"', { cwd: outDir })
run('git config user.name "Vpee Deploy"', { cwd: outDir })
run('git remote add origin https://github.com/ZipAuto/vppe.git', { cwd: outDir })
run('git add -A', { cwd: outDir })
run('git commit -m "deploy: Vpee site update"', { cwd: outDir })
run('git push origin gh-pages --force', { cwd: outDir })
console.log('\nPublished to GitHub Pages!')
