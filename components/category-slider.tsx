'use client'

import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/products'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function CategorySlider() {
  return (
    <section className="py-16 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F8FC] mb-2">
            Explora por <span className="text-[#F3FF00]">Categoria</span>
          </h2>
          <p className="text-[#8A8A8A]">Encuentra exactamente lo que buscas</p>
        </div>

        {/* Grid sin scrollbar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-[#111111]">
                {category.image && (
                  <Image
                    src={`${bp}${category.image}`}
                    alt={category.name}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-95 group-hover:scale-110 transition-all duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                )}
              </div>

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent group-hover:from-[#0D0D0D]/95 transition-all duration-300" />

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-[#222] group-hover:border-[#F3FF00]/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-[#F7F8FC] group-hover:text-[#F3FF00] transition-colors text-sm sm:text-base leading-tight">
                  {category.name}
                </h3>
                <p className="text-xs text-[#8A8A8A] mt-0.5">
                  {category.productCount} productos
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#F3FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  Ver todos
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Top accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#F3FF00]/0 group-hover:border-[#F3FF00]/70 rounded-tr-lg transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
