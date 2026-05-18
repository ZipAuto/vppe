/**
 * Converts all product images to WebP with transparent white backgrounds.
 * - PNG images with Photoroom (already transparent): convert to WebP only.
 * - PNG/JPG images with white backgrounds: remove near-white pixels then convert to WebP.
 * Run: node scripts/convert-images.mjs
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..', 'public', 'images', 'products')

// White background threshold — pixels with R,G,B all above this become transparent
const WHITE_THRESHOLD = 235

async function removeWhiteBackground(inputPath) {
  const image = sharp(inputPath).ensureAlpha()
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const buf = Buffer.from(data)

  for (let i = 0; i < width * height; i++) {
    const offset = i * channels
    const r = buf[offset]
    const g = buf[offset + 1]
    const b = buf[offset + 2]
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      buf[offset + 3] = 0 // transparent
    }
  }

  return sharp(buf, { raw: { width, height, channels } })
}

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return

  const outPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  if (fs.existsSync(outPath)) {
    console.log(`  skip (exists): ${path.basename(outPath)}`)
    return
  }

  try {
    const isPhotoroom = filePath.includes('Photoroom')
    if (isPhotoroom || ext === '.png') {
      // Already may have transparency — just convert to WebP
      await sharp(filePath)
        .webp({ quality: 90, lossless: false })
        .toFile(outPath)
    } else {
      // JPG — remove white background then convert
      const processed = await removeWhiteBackground(filePath)
      await processed
        .webp({ quality: 90 })
        .toFile(outPath)
    }
    console.log(`  ✓ ${path.basename(outPath)}`)
  } catch (err) {
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`)
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walkDir(full)
    } else if (entry.isFile()) {
      await convertFile(full)
    }
  }
}

// Also convert vape-premium-*.jpg in /images/products root
async function convertGalleryImages() {
  const files = fs.readdirSync(ROOT).filter(f => f.startsWith('vape-premium') && /\.(jpg|jpeg|png)$/i.test(f))
  for (const f of files) {
    const filePath = path.join(ROOT, f)
    const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    if (fs.existsSync(outPath)) { console.log(`  skip: ${f}`); continue }
    try {
      await sharp(filePath).webp({ quality: 92 }).toFile(outPath)
      console.log(`  ✓ gallery: ${path.basename(outPath)}`)
    } catch (err) {
      console.error(`  ✗ ${f}: ${err.message}`)
    }
  }
}

console.log('Converting product images to WebP...')
await walkDir(ROOT)
await convertGalleryImages()
console.log('\nDone! All images converted.')
