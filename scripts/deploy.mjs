/**
 * Custom deploy script for Vpee → GitHub Pages.
 * Force-pushes the out/ folder to the gh-pages branch.
 * Also creates RSC alias files to fix 404s caused by Next.js App Router
 * generating RSC payloads in subdirectories (__next.X/$param.txt) while
 * the client router requests them as flat files (__next.X.$param.txt).
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

/**
 * Recursively walk a directory and call cb for every file.
 */
function walkFiles(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(full, cb)
    } else {
      cb(full)
    }
  }
}

/**
 * For every __next.<route>/ directory inside the out/ tree, create flat-file
 * aliases so the Next.js client router can fetch RSC payloads via XHR.
 *
 * Example:
 *   out/categoria/accesorios/__next.categoria/$d$slug.txt
 *   → out/categoria/accesorios/__next.categoria.$d$slug.txt   (alias)
 *   out/categoria/accesorios/__next.categoria/$d$slug/__PAGE__.txt
 *   → out/categoria/accesorios/__next.categoria.$d$slug.__PAGE__.txt  (alias)
 */
function createRscAliases(dir) {
  let count = 0
  function processDir(currentDir) {
    let entries
    try { entries = fs.readdirSync(currentDir, { withFileTypes: true }) } catch { return }

    for (const entry of entries) {
      const full = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        // Check if this is a __next.<route> directory
        if (entry.name.startsWith('__next.')) {
          const prefix = entry.name // e.g. "__next.categoria"
          const parentDir = currentDir

          // Walk inside the __next.<route>/ directory
          function processRscDir(rscDir, dotPrefix) {
            let rscEntries
            try { rscEntries = fs.readdirSync(rscDir, { withFileTypes: true }) } catch { return }

            for (const rscEntry of rscEntries) {
              const rscFull = path.join(rscDir, rscEntry.name)
              if (rscEntry.isFile()) {
                // e.g. "$d$slug.txt" → alias as "__next.categoria.$d$slug.txt"
                const aliasName = dotPrefix + '.' + rscEntry.name
                const aliasPath = path.join(parentDir, aliasName)
                if (!fs.existsSync(aliasPath)) {
                  fs.copyFileSync(rscFull, aliasPath)
                  count++
                }
              } else if (rscEntry.isDirectory()) {
                // e.g. "$d$slug/" → recurse, flatten as "__next.categoria.$d$slug.__PAGE__.txt"
                const newDotPrefix = dotPrefix + '.' + rscEntry.name
                processRscDir(rscFull, newDotPrefix)
              }
            }
          }

          processRscDir(full, prefix)
        }
        // Always recurse into all directories
        processDir(full)
      }
    }
  }
  processDir(dir)
  console.log(`  RSC aliases created: ${count}`)
}

// ── Main ────────────────────────────────────────────────────────────────────

// 1. Ensure .nojekyll
fs.writeFileSync(path.join(outDir, '.nojekyll'), '')

// 2. Create RSC flat-file aliases to fix GitHub Pages 404s
console.log('\nCreating RSC aliases...')
createRscAliases(outDir)

// 3. Init a fresh git repo inside out/ and force-push to gh-pages
run('git init -b gh-pages', { cwd: outDir })
run('git config core.longpaths true', { cwd: outDir })
run('git config user.email "deploy@vpee.co"', { cwd: outDir })
run('git config user.name "Vpee Deploy"', { cwd: outDir })
run('git remote add origin https://github.com/ZipAuto/vppe.git', { cwd: outDir })
run('git add -A', { cwd: outDir })
run('git commit -m "deploy: Vpee site update"', { cwd: outDir })
run('git push origin gh-pages --force', { cwd: outDir })
console.log('\nPublished to GitHub Pages!')
