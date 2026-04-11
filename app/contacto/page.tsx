import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactContent } from './contact-content'

export const metadata: Metadata = {
  title: 'Contacto | Vpee - Smoke Shop en Zipaquira',
  description: 'Contacta a Vpee, el smoke shop lider en Zipaquira. WhatsApp, Instagram, TikTok y ubicacion en Google Maps.',
  openGraph: {
    title: 'Contacto - Vpee Smoke Shop Zipaquira',
    description: 'Encuentra nuestra tienda fisica o contactanos por WhatsApp. Asesoria experta en vaporizadores.',
  },
}

export default function ContactoPage() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  )
}
