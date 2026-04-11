'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Truck, Shield } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png"
          alt="Vpee Smoke Shop - Vaporizadores Premium en Zipaquira"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient Overlay - Onyx Black */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3FF00]/10 border border-[#F3FF00]/30 mb-6">
            <MapPin className="h-4 w-4 text-[#F3FF00]" />
            <span className="text-sm font-medium text-[#F3FF00]">
              Zipaquira, Cundinamarca
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F7F8FC] leading-tight mb-6">
            <span className="block">El Smoke Shop</span>
            <span className="block text-[#F3FF00] neon-text">Lider en Zipaquira</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#B5B5B5] leading-relaxed mb-8 max-w-xl">
            Mas estilo. Mas variedad. Encuentra tu dispositivo ideal entre nuestra 
            coleccion de vaporizadores, desechables, bongs, CBD y accesorios premium.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-[#F3FF00] text-[#0D0D0D] font-semibold hover:bg-[#D8FF3E] neon-glow text-base px-8"
            >
              <Link href="/catalogo">
                Ver Catalogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#F7F8FC]/30 text-[#F7F8FC] hover:bg-[#F7F8FC]/10 hover:border-[#F7F8FC]/50 text-base px-8"
            >
              <a
                href="https://wa.me/573016522125?text=Hola%20Vpee!%20Quiero%20asesoria%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Habla con un experto
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-[#B5B5B5]">
              <Truck className="h-5 w-5 text-[#F3FF00]" />
              <span className="text-sm">Envio gratis en Zipaquira</span>
            </div>
            <div className="flex items-center gap-2 text-[#B5B5B5]">
              <Shield className="h-5 w-5 text-[#F3FF00]" />
              <span className="text-sm">Productos originales</span>
            </div>
            <div className="flex items-center gap-2 text-[#B5B5B5]">
              <span className="h-5 w-5 flex items-center justify-center text-[#F3FF00] font-bold text-xs border border-[#F3FF00] rounded">
                +18
              </span>
              <span className="text-sm">Solo adultos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#F3FF00]/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[#F3FF00] animate-pulse" />
        </div>
      </div>
    </section>
  )
}
