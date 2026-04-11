'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Rocket, Sparkles, Zap, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/lib/cart-context'
import { products, formatPrice } from '@/lib/products'

// Get newest products (those with "Nuevo" badge or last 6 added)
const newReleases = products.filter(p => p.badge === 'Nuevo' || p.badge === 'Premium').slice(0, 6)

export function NewReleases() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#F3FF00 1px, transparent 1px), linear-gradient(90deg, #F3FF00 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F3FF00]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F3FF00]/20 to-[#D8FF3E]/20 border border-[#F3FF00]/40 mb-4">
              <Rocket className="h-4 w-4 text-[#F3FF00]" />
              <span className="text-sm font-semibold text-[#F3FF00] tracking-wide">NUEVOS LANZAMIENTOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F8FC] mb-3">
              Estrenos <span className="text-[#F3FF00] neon-text">2024</span>
            </h2>
            <p className="text-[#8A8A8A] max-w-lg">
              Los productos mas recientes y exclusivos. Se el primero en probar lo ultimo en tecnologia de vapeo.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="border-[#F3FF00]/30 text-[#F3FF00] hover:bg-[#F3FF00] hover:text-[#0D0D0D] hover:border-[#F3FF00]"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="border-[#F3FF00]/30 text-[#F3FF00] hover:bg-[#F3FF00] hover:text-[#0D0D0D] hover:border-[#F3FF00]"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Products Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory category-slider"
          style={{ scrollbarWidth: 'none' }}
        >
          {newReleases.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start group"
            >
              <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#252525] overflow-hidden hover:border-[#F3FF00]/60 transition-all duration-500 futuristic-card">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F3FF00]/10 via-transparent to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <Badge className="bg-[#F3FF00] text-[#0D0D0D] font-bold px-3 py-1 hover:bg-[#F3FF00]">
                    <Sparkles className="h-3 w-3 mr-1" />
                    NUEVO
                  </Badge>
                  {index < 3 && (
                    <Badge variant="outline" className="border-[#F3FF00]/50 text-[#F3FF00] bg-[#0D0D0D]/80">
                      <Zap className="h-3 w-3 mr-1" />
                      HOT
                    </Badge>
                  )}
                </div>

                {/* Product Visual */}
                <div className="relative h-56 flex items-center justify-center p-8">
                  {/* Futuristic circle background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border border-[#F3FF00]/10 group-hover:border-[#F3FF00]/30 transition-colors" />
                    <div className="absolute w-32 h-32 rounded-full border border-[#F3FF00]/5 group-hover:border-[#F3FF00]/20 transition-colors" />
                  </div>
                  
                  {/* Product Icon/Initial */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#F3FF00]/20 to-[#D8FF3E]/10 border border-[#F3FF00]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-4xl font-black text-[#F3FF00] neon-text">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  {/* Brand */}
                  <p className="text-xs font-medium text-[#F3FF00] tracking-wider uppercase mb-1">
                    {product.brand}
                  </p>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#F7F8FC] group-hover:text-[#F3FF00] transition-colors mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-[#252525] text-[#8A8A8A]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#252525]">
                    <div>
                      <p className="text-2xl font-bold text-[#F3FF00]">
                        {formatPrice(product.price)}
                      </p>
                      {product.originalPrice && (
                        <p className="text-sm text-[#8A8A8A] line-through">
                          {formatPrice(product.originalPrice)}
                        </p>
                      )}
                    </div>
                    <Button
                      onClick={() => addItem(product)}
                      className="bg-[#F3FF00] text-[#0D0D0D] font-semibold hover:bg-[#D8FF3E] neon-glow-sm"
                    >
                      <Star className="h-4 w-4 mr-1" />
                      Agregar
                    </Button>
                  </div>
                </div>

                {/* Futuristic corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-20 h-20 bg-[#F3FF00]/5 rounded-full group-hover:bg-[#F3FF00]/10 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
