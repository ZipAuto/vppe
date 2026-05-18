import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import NosotrosContent from './nosotros-content'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Vpee Smoke Shop — La Historia del #1 en Zipaquira',
  description:
    'Conoce la historia de Vpee, el smoke shop de referencia en Zipaquira, Cundinamarca. Vaporizadores, desechables, accesorios 4:20 y mucho más. Calidad, variedad y atención personalizada para el público adulto.',
  keywords: [
    'vpee smoke shop zipaquira',
    'tienda vape zipaquira historia',
    'sobre nosotros vpee',
    'smoke shop cundinamarca',
    'vaporizadores zipaquira tienda',
    'accesorios 4:20 zipaquira',
  ],
  openGraph: {
    title: 'Sobre Nosotros | Vpee — Smoke Shop #1 en Zipaquira',
    description:
      'La historia detrás del smoke shop más completo de Zipaquira. Pasión por la calidad, variedad y la mejor atención al cliente.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png',
        width: 1200,
        height: 630,
        alt: 'Vpee Smoke Shop — Sobre Nosotros',
      },
    ],
  },
  alternates: {
    canonical: 'https://ZipAuto.github.io/vppe/nosotros',
  },
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <NosotrosContent />
      <Footer />
    </>
  )
}
