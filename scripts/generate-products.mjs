/**
 * Generates lib/products.ts from:
 *  - precios-productos.csv  (all product names + prices + categories)
 *  - public/images/new_products/ (all product images, converted to WebP)
 *
 * Run: node scripts/generate-products.mjs
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const NP = path.join(ROOT, 'public', 'images', 'new_products')
const CSV = path.join(ROOT, 'precios-productos.csv')

// ─── 1. Convert all images in new_products to WebP ───────────────────────────
async function convertDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) { await convertDir(full); continue }
    const ext = path.extname(e.name).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
    const out = full.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    if (fs.existsSync(out)) continue
    try {
      await sharp(full).webp({ quality: 90 }).toFile(out)
      console.log('✓', path.relative(NP, out))
    } catch (err) {
      console.error('✗', e.name, err.message)
    }
  }
}
console.log('Converting images to WebP…')
await convertDir(NP)

// ─── 2. Build a flat index: normalizedName → relativePublicPath ──────────────
function norm(s) {
  return s
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const imageIndex = new Map() // normalized_name → public path
function indexDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) { indexDir(full); continue }
    if (!e.name.endsWith('.webp')) continue
    const nameNoExt = path.basename(e.name, '.webp')
    const relPath = '/images/new_products' + full.replace(NP, '').replace(/\\/g, '/')
    imageIndex.set(norm(nameNoExt), relPath)
  }
}
indexDir(NP)

function findImage(productName) {
  const key = norm(productName)
  if (imageIndex.has(key)) return imageIndex.get(key)
  // Partial match — find longest key that is a substring
  let best = null, bestLen = 0
  for (const [k, v] of imageIndex) {
    if (key.includes(k) || k.includes(key)) {
      if (k.length > bestLen) { best = v; bestLen = k.length }
    }
  }
  return best
}

// ─── 3. Parse CSV ─────────────────────────────────────────────────────────────
const csvRaw = fs.readFileSync(CSV, 'utf8')
const rows = csvRaw.trim().split('\n').slice(1) // skip header

function parsePrice(s) {
  const cleaned = s.replace(/[$.\s]/g, '').replace(',', '')
  return parseInt(cleaned, 10) || 0
}

// ─── 4. Category mapping CSV → site ──────────────────────────────────────────
const CSV_CAT_MAP = {
  'EQUIPOS': 'vaporizadores',
  'EQUIPOS- BATERIAS': 'vaporizadores',
  'EQUIPOS- BATERIAS': 'vaporizadores',
  'EQUIPOS -VAPORIZADORES': 'desechables',
  'EQUIPOS -VAPORIZADORES': 'desechables',
  'BONGS': 'bongs',
  'GRINDERS': 'grinders',
  'ACCESORIOS': 'accesorios',
  'ACCESOSRIOS': 'accesorios',
  'ACCESORIOS -  FILTROS': 'accesorios',
  'ACCESORIOS -  PIPAS': 'accesorios',
  'ACCESOSRIOS - PALAS': 'accesorios',
  'ACCESOSRIOS - PAPERS': 'accesorios',
  'ACCESOSRIOS - PAPERS': 'accesorios',
  'BEBIDAS': 'bebidas',
  'BLONES': 'accesorios',
  'CONOS': 'accesorios',
  'POUCHES': 'accesorios',
  'RESISTENCIAS': 'resistencias',
  'PODS': 'pods',
  'LIQUIDOS': 'pods',
  'CBD': 'pods',
  'CIGARRILLOS': 'accesorios',
}

const SITE_CATEGORY_NAMES = {
  desechables: 'Desechables',
  vaporizadores: 'Vaporizadores',
  bongs: 'Bongs',
  grinders: 'Grinders',
  accesorios: 'Accesorios',
  bebidas: 'Bebidas',
  resistencias: 'Resistencias',
  pods: 'Pods & Liquidos',
}

// Some EQUIPOS -VAPORIZADORES products are actually rechargeable
const RECHARGEABLE_KEYWORDS = [
  'Oxva SLIM', 'Oxva Xlim', 'Tanque', 'Vaporesso Armour', 'YoCan', 'Freemax',
]

function getSiteSlug(csvCat, productName) {
  // Normalize csvCat to find in map
  const trimmed = csvCat.trim()
  // Check rechargeable override
  if (trimmed.includes('VAPORIZADORES')) {
    const isRechargeable = RECHARGEABLE_KEYWORDS.some(k => productName.includes(k))
    if (isRechargeable) return 'vaporizadores'
    return 'desechables'
  }
  for (const [k, v] of Object.entries(CSV_CAT_MAP)) {
    if (trimmed === k) return v
  }
  // Fallback: search by partial key match
  for (const [k, v] of Object.entries(CSV_CAT_MAP)) {
    if (trimmed.includes(k.split(' ')[0])) return v
  }
  return 'accesorios'
}

// ─── 5. Features per category ────────────────────────────────────────────────
function getFeatures(categorySlug, name, price) {
  switch (categorySlug) {
    case 'desechables': {
      const puffs = extractPuffs(name)
      const base = puffs ? [`${puffs} puffs`, 'Listo para usar'] : ['Sin mantenimiento', 'Listo para usar']
      return [...base, 'Nicotina 5%', 'Bateria recargable', 'Mesh coil']
    }
    case 'vaporizadores':
      return ['Alta potencia', 'Bateria recargable', 'Control de temperatura', 'Compatible pods', 'Garantia']
    case 'bongs':
      return ['Vidrio borosilicato', 'Filtracion de agua', 'Facil limpieza', 'Diseno premium']
    case 'grinders':
      return ['Dientes diamante', 'Cierre magnetico', 'Facil uso', 'Alta durabilidad']
    case 'resistencias':
      return ['Resistencia original', 'Vapor denso', 'Larga duracion', 'Compatible serie']
    case 'pods':
      return ['Compatible serie', 'Alta capacidad', 'Sabor intenso', 'Facil recarga']
    case 'bebidas':
      return ['Fria y refrescante', 'Presentacion original', 'Producto importado']
    default:
      return ['Calidad premium', 'Producto original', 'Garantia Vpee']
  }
}

function extractPuffs(name) {
  const match = name.match(/(\d+[\.,]?\d*)\s*k\b/i)
  if (match) return (parseFloat(match[1].replace(',', '.')) * 1000).toLocaleString('es-CO')
  const milMatch = name.match(/(\d+)\s*mil\s*puff/i)
  if (milMatch) return (parseInt(milMatch[1]) * 1000).toLocaleString('es-CO')
  const rawMatch = name.match(/(\d[\d.]+)\s*puff/i)
  if (rawMatch) return rawMatch[1]
  return null
}

function getBrand(productName, categorySlug) {
  if (productName.startsWith('Vape Waka') || productName.startsWith('Vapo Waka') || productName.includes('Waka')) return 'Waka'
  if (productName.includes('Lost Mary')) return 'Lost Mary'
  if (productName.includes('Oxva') || productName.includes('OXVA')) return 'OXVA'
  if (productName.includes('Geek') || productName.includes('Geekvape')) return 'GeekVape'
  if (productName.includes('Vaporesso')) return 'Vaporesso'
  if (productName.includes('Caliburn') || productName.includes('Uwell')) return 'Uwell'
  if (productName.includes('OCB')) return 'OCB'
  if (productName.includes('RAW') || productName.includes('Raw')) return 'RAW'
  if (productName.includes('Smok') || productName.includes('Smoke')) return 'Smok'
  if (productName.includes('Freemax')) return 'Freemax'
  if (productName.includes('King Palm')) return 'King Palm'
  if (productName.includes('YoCan') || productName.includes('Yocan')) return 'YoCan'
  if (productName.includes('QOMO') || productName.includes('Xmax')) return 'Xmax'
  if (productName.includes('Voopoo') || productName.includes('voopoo')) return 'Voopoo'
  if (productName.includes('Ursa') || productName.includes('Geekvape')) return 'GeekVape'
  if (categorySlug === 'bebidas') return 'Vpee Bar'
  if (categorySlug === 'grinders') return 'Vpee Tools'
  if (categorySlug === 'bongs') return 'Vpee Glass'
  return 'Vpee'
}

function getBadge(productName, categorySlug, price) {
  if (productName.toLowerCase().includes('premium') || price >= 150000) return 'Premium'
  if (['Vape Waka Mini', 'Grinder OCB Metal', 'Bong Vidrio Grande', 'Vapo Waka Blast 36k'].some(n => productName.includes(n.split(' ').pop()))) return 'Mas Vendido'
  if (productName.includes('16k') || productName.includes('30k') || productName.includes('36k') || productName.includes('25k')) return 'Nuevo'
  if (categorySlug === 'desechables' && price <= 25000) return 'Oferta'
  return undefined
}

function slugify(s) {
  return s
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// ─── 6. Parse products from CSV ───────────────────────────────────────────────
const seenSlugs = new Map()
const products = []
let id = 1

for (const line of rows) {
  // Split CSV: "CATEGORIA,PRODUCTO,PRECIO"
  const parts = line.split(',')
  if (parts.length < 3) continue
  const csvCat = parts[0].trim()
  // Product name may contain commas (unlikely) but price is last field
  const price = parsePrice(parts[parts.length - 1])
  const name = parts.slice(1, parts.length - 1).join(',').trim()
  if (!name || !csvCat) continue

  const categorySlug = getSiteSlug(csvCat, name)
  const categoryName = SITE_CATEGORY_NAMES[categorySlug] || 'Accesorios'
  const image = findImage(name)
  const puffs = categorySlug === 'desechables' ? extractPuffs(name) : undefined
  const features = getFeatures(categorySlug, name, price)
  const brand = getBrand(name, categorySlug)
  const badge = getBadge(name, categorySlug, price)

  let baseSlug = slugify(name)
  let slug = baseSlug
  if (seenSlugs.has(baseSlug)) {
    const count = seenSlugs.get(baseSlug) + 1
    seenSlugs.set(baseSlug, count)
    slug = `${baseSlug}-${count}`
  } else {
    seenSlugs.set(baseSlug, 1)
  }

  const sku = `${categorySlug.slice(0, 3).toUpperCase()}-${id.toString().padStart(3, '0')}`

  products.push({
    id: String(id++),
    name,
    slug,
    category: categoryName,
    categorySlug,
    price,
    description: `${name} - ${categoryName} de alta calidad disponible en Vpee Smoke Shop Zipaquira.`,
    features,
    brand,
    image: image || undefined,
    badge: badge || undefined,
    puffs: puffs || undefined,
    inStock: true,
    sku,
  })
}

// ─── 7. Build categories with representative images ───────────────────────────
const CAT_DESCRIPTIONS = {
  desechables: 'Vapes desechables listos para usar. Sin mantenimiento, maxima comodidad. Mas de 30 modelos disponibles.',
  vaporizadores: 'Dispositivos recargables de alta calidad. Kits completos, baterias y equipos profesionales.',
  bongs: 'Bongs de vidrio y silicona premium. Artesanales y resistentes para una experiencia superior.',
  grinders: 'Grinders metalicos y de acrilico de alta precision. Dientes diamante y cierre magnetico.',
  accesorios: 'Papers, blones, pipas, filtros y todo lo que necesitas para tu experiencia.',
  bebidas: 'Bebidas frias y refrescantes. Cervezas, energizantes, aguas y mas.',
  resistencias: 'Resistencias originales para todos los modelos. Maxima compatibilidad y duracion.',
  pods: 'Pods, cartuchos y liquidos premium. Nicotina en sal y bases para todos los dispositivos.',
}

const catImages = {}
for (const p of products) {
  if (p.image && !catImages[p.categorySlug]) {
    catImages[p.categorySlug] = p.image
  }
}

const categorySlugs = Object.keys(CAT_DESCRIPTIONS)
const categories = categorySlugs.map(slug => {
  const count = products.filter(p => p.categorySlug === slug).length
  return {
    name: SITE_CATEGORY_NAMES[slug],
    slug,
    description: CAT_DESCRIPTIONS[slug],
    productCount: count,
    image: catImages[slug] || undefined,
  }
})

// ─── 8. Write products.ts ─────────────────────────────────────────────────────
function ts(v) {
  if (v === undefined || v === null) return 'undefined'
  if (typeof v === 'string') return `'${v.replace(/'/g, "\\'")}'`
  if (typeof v === 'number') return String(v)
  if (typeof v === 'boolean') return String(v)
  if (Array.isArray(v)) return `[${v.map(ts).join(', ')}]`
  return JSON.stringify(v)
}

function productToTs(p) {
  return `  {
    id: ${ts(p.id)},
    name: ${ts(p.name)},
    slug: ${ts(p.slug)},
    category: ${ts(p.category)},
    categorySlug: ${ts(p.categorySlug)},
    price: ${p.price},${p.originalPrice ? `\n    originalPrice: ${p.originalPrice},` : ''}
    description: ${ts(p.description)},
    features: ${ts(p.features)},
    brand: ${ts(p.brand)},${p.image ? `\n    image: ${ts(p.image)},` : ''}${p.badge ? `\n    badge: ${ts(p.badge)},` : ''}${p.puffs ? `\n    puffs: ${ts(p.puffs)},` : ''}
    inStock: ${p.inStock},
    sku: ${ts(p.sku)},
  }`
}

function categoryToTs(c) {
  return `  {
    name: ${ts(c.name)},
    slug: ${ts(c.slug)},
    description: ${ts(c.description)},
    productCount: ${c.productCount},${c.image ? `\n    image: ${ts(c.image)},` : ''}
  }`
}

const output = `// AUTO-GENERATED by scripts/generate-products.mjs — do not edit manually
export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  price: number
  originalPrice?: number
  description: string
  features: string[]
  brand: string
  image?: string
  badge?: 'Nuevo' | 'Oferta' | 'Mas Vendido' | 'Premium' | 'Top'
  puffs?: string
  inStock: boolean
  sku: string
}

export interface Category {
  name: string
  slug: string
  description: string
  productCount: number
  image?: string
}

export const products: Product[] = [
${products.map(productToTs).join(',\n')}
]

export const categories: Category[] = [
${categories.map(categoryToTs).join(',\n')}
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter(p => p.categorySlug === slug)
}
`

const outPath = path.join(ROOT, 'lib', 'products.ts')
fs.writeFileSync(outPath, output, 'utf8')
console.log(`\n✓ Generated ${products.length} products across ${categories.length} categories`)
console.log(`  → lib/products.ts`)
console.log('\nCategories:')
categories.forEach(c => console.log(`  ${c.slug}: ${c.productCount} products`))
