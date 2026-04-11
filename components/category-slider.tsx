'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Zap, Cigarette, Wind, Droplets, FlaskConical, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { categories, getProductsByCategory, formatPrice } from '@/lib/products'

const categoryIcons: Record<string, typeof Zap> = {
  vaporizadores: Zap,
  desechables: Cigarette,
  bongs: Wind,
  cbd: Droplets,
  'e-liquids': FlaskConical,
  accesorios: Wrench,
}

export function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-16 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F8FC] mb-2">
              Explora por <span className="text-[#F3FF00]">Categoria</span>
            </h2>
            <p className="text-[#8A8A8A]">Encuentra exactamente lo que buscas</p>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="border-[#333333] text-[#F7F8FC] hover:border-[#F3FF00] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="border-[#333333] text-[#F7F8FC] hover:border-[#F3FF00] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 category-slider snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug] || Zap
            const categoryProducts = getProductsByCategory(category.slug).slice(0, 3)
            
            return (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                className="flex-shrink-0 w-[300px] snap-start group"
              >
                <div className="bg-[#1A1A1A] rounded-2xl border border-[#252525] overflow-hidden hover:border-[#F3FF00]/40 transition-all duration-300 futuristic-card">
                  {/* Category Header */}
                  <div className="p-5 border-b border-[#252525]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#F3FF00]/10 flex items-center justify-center group-hover:bg-[#F3FF00] transition-colors">
                        <Icon className="h-6 w-6 text-[#F3FF00] group-hover:text-[#0D0D0D] transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#F7F8FC] group-hover:text-[#F3FF00] transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-[#8A8A8A]">
                          {category.productCount} productos
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Product Preview */}
                  <div className="p-4 space-y-3">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 p-2 rounded-lg bg-[#252525]/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#333333] flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-[#F3FF00]">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#F7F8FC] truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-[#F3FF00]">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="p-4 pt-0">
                    <div className="w-full py-2.5 rounded-lg bg-[#252525] text-center text-sm font-medium text-[#8A8A8A] group-hover:bg-[#F3FF00] group-hover:text-[#0D0D0D] transition-colors">
                      Ver todos los productos
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
