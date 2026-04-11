import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Vpee | El Smoke Shop Lider en Zipaquira - Vaporizadores y Mas',
  description: 'Vpee es el smoke shop especializado en Zipaquira. Encuentra vaporizadores, desechables, bongs, CBD y parafernalia premium. Envio gratis en Zipaquira. Solo +18.',
  keywords: ['vape', 'vaporizadores', 'smoke shop', 'Zipaquira', 'vaper desechable', 'bongs', 'CBD', 'parafernalia', 'Colombia'],
  authors: [{ name: 'Vpee' }],
  creator: 'Vpee',
  publisher: 'Vpee',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://vpee.co',
    siteName: 'Vpee',
    title: 'Vpee | El Smoke Shop Lider en Zipaquira',
    description: 'El smoke shop mas grande de Zipaquira. Vaporizadores, desechables, bongs, CBD y mas. Solo +18.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png',
        width: 1200,
        height: 630,
        alt: 'Vpee Smoke Shop Zipaquira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vpee | El Smoke Shop Lider en Zipaquira',
    description: 'El smoke shop mas grande de Zipaquira. Vaporizadores, desechables, bongs, CBD y mas.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png'],
  },
  alternates: {
    canonical: 'https://vpee.co',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
