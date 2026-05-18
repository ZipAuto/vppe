'use client'

import Link from 'next/link'
import { Cloud, Droplets, Leaf, Sparkles, Package, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  {
    name: 'Vape Recargable',
    description: 'Equipos y baterias recargables de alta calidad',
    href: '/categoria/vape-recargable',
    icon: Zap,
    count: '24',
    featured: true,
  },
  {
    name: 'Vape Desechable',
    description: 'Vapes listos para usar, sin mantenimiento',
    href: '/categoria/desechables',
    icon: Cloud,
    count: '22',
    featured: true,
  },
  {
    name: 'Vape Alternativos',
    description: 'Herbal, destilado y extracciones',
    href: '/categoria/vape-alternativos',
    icon: Leaf,
    count: '5',
    featured: false,
  },
  {
    name: 'Pods & Liquidos',
    description: 'Pods, sales de nicotina y bases',
    href: '/categoria/pods',
    icon: Droplets,
    count: '16',
    featured: false,
  },
  {
    name: 'Repuestos',
    description: 'Resistencias, tanques y pilas',
    href: '/categoria/repuestos',
    icon: Package,
    count: '22',
    featured: false,
  },
  {
    name: 'Accesorios 4:20',
    description: 'Pipas, bongs, papers, grinders y mas',
    href: '/categoria/accesorios',
    icon: Sparkles,
    count: '84',
    featured: false,
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-[#050B22]" id="categorias">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Explora Nuestras <span className="text-[#F3FF00]">Categorias</span>
          </h2>
          <p className="text-[#D9DDE8] max-w-2xl mx-auto leading-relaxed">
            El catalogo mas completo de Zipaquira. Encuentra vaporizadores de ultima 
            generacion, desechables, bongs artesanales y mucho mas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={category.href}
                className={cn(
                  "group relative p-6 rounded-xl transition-all duration-300",
                  "bg-[#0B1D5A]/50 border border-[#F3FF00]/10",
                  "hover:bg-[#0B1D5A] hover:border-[#F3FF00]/30 hover:scale-[1.02]",
                  "hover:shadow-lg hover:shadow-[#F3FF00]/5",
                  category.featured && "lg:col-span-1 row-span-1"
                )}
              >
                {/* Featured Badge */}
                {category.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold bg-[#F3FF00] text-[#0B1D5A] rounded-full">
                    Popular
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#F3FF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#F3FF00]/20 transition-colors">
                  <Icon className="h-7 w-7 text-[#F3FF00]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#F7F8FC] mb-2 group-hover:text-[#F3FF00] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[#D9DDE8] text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[#F3FF00] font-semibold">
                    {category.count} productos
                  </span>
                  <span className="text-[#D9DDE8] group-hover:text-[#F3FF00] group-hover:translate-x-1 transition-all">
                    Ver mas &rarr;
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
