'use client'

import { Shield, Heart, Zap, Users, Award, Leaf } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Autenticidad',
    description: 'Solo comercializamos productos 100% originales de marcas reconocidas mundialmente. Sin imitaciones, sin falsificaciones.',
    color: '#F3FF00',
  },
  {
    icon: Heart,
    title: 'Pasion',
    description: 'Somos apasionados por el vapeo y la cultura smoke. Cada recomendacion viene del corazon y la experiencia.',
    color: '#FF6B6B',
  },
  {
    icon: Zap,
    title: 'Innovacion',
    description: 'Siempre a la vanguardia con los ultimos lanzamientos y tecnologias. Tu tienda de referencia para lo nuevo.',
    color: '#4ECDC4',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Mas que clientes, somos una comunidad. Construimos relaciones duraderas basadas en confianza mutua.',
    color: '#9B59B6',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Compromiso inquebrantable con la calidad del servicio. Tu satisfaccion es nuestra maxima prioridad.',
    color: '#F39C12',
  },
  {
    icon: Leaf,
    title: 'Responsabilidad',
    description: 'Promovemos el consumo responsable. Solo +18. Educamos sobre el uso adecuado de nuestros productos.',
    color: '#2ECC71',
  },
]

export function CorporateValues() {
  return (
    <section className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F3FF00]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F3FF00]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Nuestros <span className="text-[#F3FF00]">Valores</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Los principios que guian cada decision en Vpee Smokeshop. 
            Mas que una tienda, somos tu aliado en el mundo del vapeo.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/40 transition-all duration-300 futuristic-card"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ 
                    backgroundColor: `${value.color}15`,
                    border: `1px solid ${value.color}30`,
                  }}
                >
                  <Icon 
                    className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: value.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#F7F8FC] mb-2 group-hover:text-[#F3FF00] transition-colors">
                  {value.title}
                </h3>
                <p className="text-[#8A8A8A] leading-relaxed">
                  {value.description}
                </p>

                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${value.color}10`,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
