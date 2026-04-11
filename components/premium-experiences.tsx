'use client'

import { Headphones, Truck, Clock, Gift, BadgeCheck, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const experiences = [
  {
    icon: Headphones,
    title: 'Asesoria Experta',
    description: 'Nuestro equipo te guia para encontrar el producto perfecto segun tu experiencia y preferencias.',
    highlight: 'Chat en vivo',
  },
  {
    icon: Truck,
    title: 'Envio Express',
    description: 'Entrega el mismo dia en Zipaquira. Envios nacionales con tracking en tiempo real.',
    highlight: 'Gratis local',
  },
  {
    icon: Clock,
    title: 'Atencion 7 Dias',
    description: 'Estamos disponibles toda la semana para resolver tus dudas y tomar tu pedido.',
    highlight: '10am - 8pm',
  },
  {
    icon: Gift,
    title: 'Programa VIP',
    description: 'Acumula puntos en cada compra y accede a descuentos exclusivos y lanzamientos anticipados.',
    highlight: 'Beneficios',
  },
  {
    icon: BadgeCheck,
    title: 'Garantia Total',
    description: 'Todos nuestros productos cuentan con garantia. Si algo falla, lo solucionamos.',
    highlight: '30 dias',
  },
  {
    icon: MessageCircle,
    title: 'Comunidad Vpee',
    description: 'Unete a nuestra comunidad en redes sociales. Tips, reviews y promociones exclusivas.',
    highlight: 'Instagram',
  },
]

export function PremiumExperiences() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
      
      {/* Animated accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F3FF00]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F3FF00]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F3FF00]/30 bg-[#F3FF00]/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F3FF00] animate-pulse" />
            <span className="text-sm font-medium text-[#F3FF00]">Experiencia Premium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Mas que una Tienda, una <span className="text-[#F3FF00] neon-text">Experiencia</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            En Vpee no solo vendemos productos, creamos experiencias memorables. 
            Descubre por que somos la eleccion preferida en Zipaquira.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-[#0D0D0D]/50 border border-[#252525] backdrop-blur-sm hover:border-[#F3FF00]/40 transition-all duration-500"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F3FF00]/0 to-[#D8FF3E]/0 group-hover:from-[#F3FF00]/5 group-hover:to-[#D8FF3E]/5 transition-all duration-500" />
                
                <div className="relative">
                  {/* Icon & Highlight */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F3FF00]/10 border border-[#F3FF00]/20 flex items-center justify-center group-hover:bg-[#F3FF00] transition-colors duration-300">
                      <Icon className="h-6 w-6 text-[#F3FF00] group-hover:text-[#0D0D0D] transition-colors duration-300" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3FF00]/10 text-[#F3FF00] border border-[#F3FF00]/20">
                      {exp.highlight}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#F7F8FC] mb-2 group-hover:text-[#F3FF00] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#F3FF00]/10 to-[#D8FF3E]/10 border border-[#F3FF00]/30">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-[#F7F8FC]">
                Listo para vivir la experiencia Vpee?
              </p>
              <p className="text-sm text-[#8A8A8A]">
                Contactanos ahora y recibe asesoria personalizada
              </p>
            </div>
            <Button
              asChild
              className="bg-[#F3FF00] text-[#0D0D0D] font-semibold hover:bg-[#D8FF3E] neon-glow px-8"
            >
              <a
                href="https://wa.me/573016522125?text=Hola%20Vpee!%20Quiero%20conocer%20mas%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Hablar con un experto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
