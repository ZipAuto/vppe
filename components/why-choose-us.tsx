'use client'

import { Truck, Shield, Clock, Award, Headphones, MapPin } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Envio Gratis',
    description: 'Envio sin costo en Zipaquira para compras mayores a $50.000 COP.',
  },
  {
    icon: Shield,
    title: 'Productos Originales',
    description: 'Garantizamos la autenticidad de todos nuestros productos.',
  },
  {
    icon: Clock,
    title: 'Entrega Rapida',
    description: 'Recibe tu pedido el mismo dia en Zipaquira.',
  },
  {
    icon: Award,
    title: 'Mayor Variedad',
    description: 'El catalogo mas amplio de la region con +300 productos.',
  },
  {
    icon: Headphones,
    title: 'Asesoria Experta',
    description: 'Te ayudamos a encontrar el producto perfecto para ti.',
  },
  {
    icon: MapPin,
    title: 'Tienda Fisica',
    description: 'Visitanos en Zipaquira y conoce todo el catalogo.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Por Que Elegir <span className="text-[#F3FF00]">Vpee</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed">
            Somos el smoke shop de referencia en Zipaquira. Experiencia, variedad 
            y servicio excepcional para el publico adulto contemporaneo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-[#0D0D0D]/50 border border-[#252525] hover:border-[#F3FF00]/30 transition-colors futuristic-card"
              >
                <div className="w-16 h-16 rounded-xl bg-[#F3FF00]/10 border border-[#F3FF00]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-[#F3FF00]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F7F8FC] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '300+', label: 'Productos' },
            { value: '5000+', label: 'Clientes Felices' },
            { value: '4.9', label: 'Calificacion' },
            { value: '24h', label: 'Entrega Local' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-[#F3FF00]/5 border border-[#F3FF00]/20"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#F3FF00] neon-text mb-1">
                {stat.value}
              </div>
              <div className="text-[#8A8A8A] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
