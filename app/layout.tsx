import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vpee | Smoke Shop #1 en Zipaquira — Vaporizadores, Desechables, Bongs y CBD',
    template: '%s | Vpee Smoke Shop Zipaquira',
  },
  description: 'Vpee es el smoke shop lider en Zipaquira, Cundinamarca. Vaporizadores, vapes desechables, bongs de cristal, CBD, accesorios y mas. Envio gratis en Zipaquira despues de $50.000. Solo +18.',
  keywords: [
    'smoke shop zipaquira', 'vape zipaquira', 'vaporizadores zipaquira',
    'desechables zipaquira', 'bongs zipaquira', 'CBD zipaquira',
    'waka vape', 'lost mary', 'priv bar', 'geek vape', 'oxva',
    'tienda vape cundinamarca', 'smoke shop colombia', 'vpee',
  ],
  authors: [{ name: 'Vpee Smoke Shop' }],
  creator: 'Vpee',
  publisher: 'Vpee',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://ZipAuto.github.io/vppe',
    siteName: 'Vpee Smoke Shop',
    title: 'Vpee | Smoke Shop #1 en Zipaquira',
    description: 'Vaporizadores, desechables, bongs, CBD y accesorios premium. El smoke shop mas completo de Zipaquira. Solo +18.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png',
        width: 1200,
        height: 630,
        alt: 'Vpee Smoke Shop Zipaquira — Vaporizadores y Mas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vpee | Smoke Shop #1 en Zipaquira',
    description: 'Vaporizadores, desechables, bongs, CBD y accesorios premium. Solo +18.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png'],
    site: '@vpee_smokeshop',
    creator: '@vpee_smokeshop',
  },
  alternates: {
    canonical: 'https://ZipAuto.github.io/vppe',
  },
  icons: {
    icon: [
      { url: '/vppe/favicon.svg', type: 'image/svg+xml' },
      { url: '/vppe/favicon.svg', sizes: 'any' },
    ],
    shortcut: '/vppe/favicon.svg',
  },
  verification: {
    google: '',
  },
  category: 'shopping',
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vpee.co',
    name: 'Vpee',
    description: 'El smoke shop especializado en Zipaquira. Vaporizadores, desechables, bongs, CBD y parafernalia premium.',
    url: 'https://vpee.co',
    telephone: '+573016522125',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zipaquira',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.0221,
      longitude: -74.0043,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://instagram.com/vpee_smokeshop',
      'https://tiktok.com/@vpee_smokeshop',
    ],
    priceRange: '$$',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCYA2886.PNG-4ucFqHNgDBjULVDKeN5NHsmKDCSgRQ.png',
  }

  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
