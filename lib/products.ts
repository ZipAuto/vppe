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
}

// Sample product data - In production, this would come from a database
export const products: Product[] = [
  // Desechables
  {
    id: '1',
    name: 'Lost Mary BM5000',
    slug: 'lost-mary-bm5000',
    category: 'Desechables',
    categorySlug: 'desechables',
    price: 45000,
    originalPrice: 55000,
    description: 'El Lost Mary BM5000 es un dispositivo desechable premium con 5000 puffs y sabores intensos. Bateria recargable por USB-C.',
    features: ['5000 puffs', 'Bateria recargable', 'USB-C', '14ml e-liquid', 'Mesh coil'],
    brand: 'Lost Mary',
    badge: 'Mas Vendido',
    puffs: '5000',
    inStock: true,
    sku: 'LM-BM5000',
  },
  {
    id: '2',
    name: 'Elf Bar BC5000',
    slug: 'elf-bar-bc5000',
    category: 'Desechables',
    categorySlug: 'desechables',
    price: 42000,
    originalPrice: 50000,
    description: 'El Elf Bar BC5000 ofrece hasta 5000 caladas con una amplia variedad de sabores. Diseno compacto y portatil.',
    features: ['5000 puffs', 'Bateria 650mAh', 'USB-C', '13ml e-liquid', 'Dual mesh coil'],
    brand: 'Elf Bar',
    badge: 'Oferta',
    puffs: '5000',
    inStock: true,
    sku: 'EB-BC5000',
  },
  {
    id: '3',
    name: 'Geek Bar Pulse 15000',
    slug: 'geek-bar-pulse-15000',
    category: 'Desechables',
    categorySlug: 'desechables',
    price: 65000,
    description: 'El Geek Bar Pulse ofrece hasta 15000 puffs con pantalla LED y modo de potencia ajustable.',
    features: ['15000 puffs', 'Pantalla LED', 'Dual mode', '25ml e-liquid', 'Type-C'],
    brand: 'Geek Bar',
    badge: 'Nuevo',
    puffs: '15000',
    inStock: true,
    sku: 'GB-PULSE15K',
  },
  {
    id: '4',
    name: 'SWFT Mod 5000',
    slug: 'swft-mod-5000',
    category: 'Desechables',
    categorySlug: 'desechables',
    price: 38000,
    description: 'SWFT Mod ofrece 5000 puffs en un diseno elegante y portatil.',
    features: ['5000 puffs', 'Bateria 400mAh', '15ml e-liquid', 'Mesh coil'],
    brand: 'SWFT',
    puffs: '5000',
    inStock: true,
    sku: 'SW-MOD5000',
  },
  
  // Vaporizadores
  {
    id: '5',
    name: 'Vaporesso XROS 3',
    slug: 'vaporesso-xros-3',
    category: 'Vaporizadores',
    categorySlug: 'vaporizadores',
    price: 120000,
    description: 'El Vaporesso XROS 3 es un pod system premium con sistema de carga rapida y pods reutilizables. Perfecto para MTL.',
    features: ['1000mAh bateria', 'Pods 2ml', 'Ajuste airflow', 'Carga rapida', 'Anti-leak'],
    brand: 'Vaporesso',
    badge: 'Nuevo',
    inStock: true,
    sku: 'VP-XROS3',
  },
  {
    id: '6',
    name: 'SMOK Nord 5',
    slug: 'smok-nord-5',
    category: 'Vaporizadores',
    categorySlug: 'vaporizadores',
    price: 150000,
    originalPrice: 180000,
    description: 'El SMOK Nord 5 combina potencia y portabilidad con wataje ajustable y pantalla OLED.',
    features: ['2000mAh bateria', 'Pantalla OLED', '80W max', 'RPM pods', 'Carga USB-C'],
    brand: 'SMOK',
    badge: 'Oferta',
    inStock: true,
    sku: 'SM-NORD5',
  },
  {
    id: '7',
    name: 'Voopoo Drag X2',
    slug: 'voopoo-drag-x2',
    category: 'Vaporizadores',
    categorySlug: 'vaporizadores',
    price: 220000,
    originalPrice: 260000,
    description: 'El Voopoo Drag X2 es un mod potente con chip GENE.TT y compatibilidad con pods PnP.',
    features: ['Bateria externa 18650', '80W max', 'GENE.TT chip', 'Pods PnP', 'Airflow ajustable'],
    brand: 'Voopoo',
    badge: 'Top',
    inStock: true,
    sku: 'VP-DRAGX2',
  },
  {
    id: '8',
    name: 'GeekVape Aegis Legend 2',
    slug: 'geekvape-aegis-legend-2',
    category: 'Vaporizadores',
    categorySlug: 'vaporizadores',
    price: 280000,
    description: 'El Aegis Legend 2 es el mod mas resistente del mercado. IP68 a prueba de agua, polvo y golpes.',
    features: ['Dual 18650', '200W max', 'IP68 rating', 'Pantalla color', 'Z tank compatible'],
    brand: 'GeekVape',
    badge: 'Premium',
    inStock: true,
    sku: 'GV-LEGEND2',
  },
  
  // Bongs
  {
    id: '9',
    name: 'Bong Cristal Premium 30cm',
    slug: 'bong-cristal-premium-30cm',
    category: 'Bongs',
    categorySlug: 'bongs',
    price: 85000,
    description: 'Bong de cristal borosilicato de alta calidad con percolador de arbol para suavidad maxima.',
    features: ['Cristal borosilicato', '30cm altura', 'Percolador arbol', 'Base gruesa', 'Ice catcher'],
    brand: 'Vpee Select',
    inStock: true,
    sku: 'BG-PREM30',
  },
  {
    id: '10',
    name: 'Bong Acrilico Colores 25cm',
    slug: 'bong-acrilico-colores-25cm',
    category: 'Bongs',
    categorySlug: 'bongs',
    price: 45000,
    description: 'Bong de acrilico resistente, ideal para principiantes. Disponible en varios colores.',
    features: ['Acrilico resistente', '25cm altura', 'Varios colores', 'Facil limpieza', 'Portatil'],
    brand: 'Vpee Basic',
    inStock: true,
    sku: 'BG-ACR25',
  },
  {
    id: '11',
    name: 'Bong Beaker Glass 35cm',
    slug: 'bong-beaker-glass-35cm',
    category: 'Bongs',
    categorySlug: 'bongs',
    price: 120000,
    description: 'Clasico bong estilo beaker de cristal grueso con downstem difusor.',
    features: ['Cristal 5mm', '35cm altura', 'Estilo beaker', 'Downstem difusor', 'Bowl 14mm'],
    brand: 'Vpee Select',
    badge: 'Top',
    inStock: true,
    sku: 'BG-BEAK35',
  },
  
  // CBD
  {
    id: '12',
    name: 'Aceite CBD Full Spectrum 1000mg',
    slug: 'aceite-cbd-full-spectrum-1000mg',
    category: 'CBD',
    categorySlug: 'cbd',
    price: 95000,
    description: 'Aceite CBD de espectro completo con 1000mg de cannabidiol. Extraido con CO2 supercritico.',
    features: ['1000mg CBD', 'Full spectrum', 'Extraccion CO2', '30ml', 'Gotero precision'],
    brand: 'Hemp Care',
    badge: 'Premium',
    inStock: true,
    sku: 'CBD-FS1000',
  },
  {
    id: '13',
    name: 'Gomitas CBD 25mg x 30',
    slug: 'gomitas-cbd-25mg-30',
    category: 'CBD',
    categorySlug: 'cbd',
    price: 75000,
    description: 'Deliciosas gomitas con 25mg de CBD por unidad. Sabores naturales de frutas.',
    features: ['25mg por gomita', '30 unidades', 'Sabores frutas', 'Sin THC', 'Veganas'],
    brand: 'Hemp Care',
    badge: 'Nuevo',
    inStock: true,
    sku: 'CBD-GUM30',
  },
  
  // E-Liquids
  {
    id: '14',
    name: 'Salt Nic Naked 100 35mg 30ml',
    slug: 'salt-nic-naked-100-35mg',
    category: 'E-Liquids',
    categorySlug: 'e-liquids',
    price: 55000,
    description: 'Sales de nicotina Naked 100 en multiples sabores. Perfecto para pod systems.',
    features: ['35mg nicotina', '30ml', 'Salt nic', 'Varios sabores', 'MTL optimizado'],
    brand: 'Naked 100',
    badge: 'Mas Vendido',
    inStock: true,
    sku: 'EL-NK35',
  },
  {
    id: '15',
    name: 'Freebase Dinner Lady 3mg 60ml',
    slug: 'freebase-dinner-lady-3mg',
    category: 'E-Liquids',
    categorySlug: 'e-liquids',
    price: 65000,
    description: 'E-liquid freebase premium de Dinner Lady. Ideal para sub-ohm.',
    features: ['3mg nicotina', '60ml', 'Freebase', '70/30 VG/PG', 'Sub-ohm'],
    brand: 'Dinner Lady',
    inStock: true,
    sku: 'EL-DL3',
  },
  
  // Accesorios
  {
    id: '16',
    name: 'Resistencias SMOK RPM 0.4ohm x5',
    slug: 'resistencias-smok-rpm-04ohm',
    category: 'Accesorios',
    categorySlug: 'accesorios',
    price: 35000,
    description: 'Pack de 5 resistencias SMOK RPM mesh 0.4ohm para pods compatibles.',
    features: ['0.4ohm', 'Mesh coil', '5 unidades', 'RPM compatible', '25W recomendado'],
    brand: 'SMOK',
    inStock: true,
    sku: 'AC-RPM04',
  },
  {
    id: '17',
    name: 'Cargador 18650 Dual Nitecore',
    slug: 'cargador-18650-dual-nitecore',
    category: 'Accesorios',
    categorySlug: 'accesorios',
    price: 75000,
    description: 'Cargador inteligente Nitecore para baterias 18650, 20700 y 21700.',
    features: ['Dual slot', 'LCD display', 'Carga rapida', 'Multi-bateria', 'Proteccion'],
    brand: 'Nitecore',
    badge: 'Top',
    inStock: true,
    sku: 'AC-NC2',
  },
  {
    id: '18',
    name: 'Bateria 18650 Samsung 25R',
    slug: 'bateria-18650-samsung-25r',
    category: 'Accesorios',
    categorySlug: 'accesorios',
    price: 28000,
    description: 'Bateria Samsung 25R 18650 de alta descarga. Ideal para mods.',
    features: ['2500mAh', '20A max', '18650', 'Original Samsung', 'Alta descarga'],
    brand: 'Samsung',
    inStock: true,
    sku: 'AC-SAM25R',
  },
]

export const categories: Category[] = [
  {
    name: 'Vaporizadores',
    slug: 'vaporizadores',
    description: 'Dispositivos recargables de alta calidad para vapeo MTL y DTL.',
    productCount: products.filter(p => p.categorySlug === 'vaporizadores').length,
  },
  {
    name: 'Desechables',
    slug: 'desechables',
    description: 'Vapes desechables listos para usar. Sin mantenimiento, maxima comodidad.',
    productCount: products.filter(p => p.categorySlug === 'desechables').length,
  },
  {
    name: 'Bongs',
    slug: 'bongs',
    description: 'Bongs de cristal y acrilico premium para una experiencia superior.',
    productCount: products.filter(p => p.categorySlug === 'bongs').length,
  },
  {
    name: 'CBD',
    slug: 'cbd',
    description: 'Aceites, gomitas y productos de cannabidiol de alta calidad.',
    productCount: products.filter(p => p.categorySlug === 'cbd').length,
  },
  {
    name: 'E-Liquids',
    slug: 'e-liquids',
    description: 'Sales de nicotina y e-liquids freebase en multiples sabores.',
    productCount: products.filter(p => p.categorySlug === 'e-liquids').length,
  },
  {
    name: 'Accesorios',
    slug: 'accesorios',
    description: 'Resistencias, baterias, cargadores y mas para tus dispositivos.',
    productCount: products.filter(p => p.categorySlug === 'accesorios').length,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  )
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'COP',
      availability: product.inStock 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Vpee',
      },
    },
  }
}
