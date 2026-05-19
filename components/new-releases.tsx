'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Rocket, Sparkles, Zap, Heart, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { products, formatPrice } from '@/lib/products'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { ProductModal } from '@/components/product-modal'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const FAVORITES_KEY = 'vpee_favorites'

const newReleases = [
  ...products.filter(p => p.badge === 'Nuevo'),
  ...products.filter(p => p.badge === 'Premium' && !products.find(x => x.badge === 'Nuevo' && x.id === p.id)),
].slice(0, 10)

function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY)
      if (stored) setFavorites(new Set(JSON.parse(stored)))
    } catch {}
  }, [])

  const toggle = useCallback((productId: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      if (next.has(productId)) {
        next.delete(productId)
      } else {
        next.add(productId)
      }
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]))
      } catch {}
      return next
    })
  }, [])

  return { favorites, toggle }
}

export function NewReleases() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { favorites, toggle } = useFavorites()
  const [modalProduct, setModalProduct] = useState<(typeof products)[0] | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      })
    }
  }

  const favCount = favorites.size

  return (
    <>
      {/* Product Modal — same feature as catalog */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          open={!!modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#F3FF00 1px, transparent 1px), linear-gradient(90deg, #F3FF00 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
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
                Estrenos <span className="text-[#F3FF00] neon-text">2026</span>
              </h2>
              <p className="text-[#8A8A8A] max-w-lg">
                Los productos mas recientes y exclusivos. Se el primero en probar lo ultimo en tecnologia de vapeo.
              </p>
              {favCount > 0 && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30">
                  <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" />
                  <span className="text-xs font-semibold text-rose-400">
                    {favCount} {favCount === 1 ? 'favorito guardado' : 'favoritos guardados'}
                  </span>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => scroll('left')}
                className="border-[#F3FF00]/30 text-[#F3FF00] hover:bg-[#F3FF00] hover:text-[#0D0D0D] hover:border-[#F3FF00]">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll('right')}
                className="border-[#F3FF00]/30 text-[#F3FF00] hover:bg-[#F3FF00] hover:text-[#0D0D0D] hover:border-[#F3FF00]">
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
            {newReleases.map((product, index) => {
              const isFav = favorites.has(product.id)
              return (
                <div key={product.id} className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start group">
                  <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#252525] overflow-hidden hover:border-[#F3FF00]/60 transition-all duration-500 futuristic-card h-full flex flex-col">

                    {/* ── GLOW OVERLAY — pointer-events-none para no bloquear clicks ── */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F3FF00]/10 via-transparent to-transparent" />
                    </div>

                    {/* Badges */}
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

                    {/* Favorite button */}
                    <button
                      onClick={() => toggle(product.id)}
                      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                      className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isFav
                          ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                          : 'bg-[#1A1A1A]/80 text-[#666] hover:text-rose-400 hover:bg-rose-500/10 border border-[#333] hover:border-rose-500/40'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>

                    {/* Image — click abre el modal igual que en el catálogo */}
                    <div
                      className="relative h-52 bg-white overflow-hidden cursor-zoom-in flex-shrink-0"
                      onClick={() => setModalProduct(product)}
                    >
                      {product.image ? (
                        <Image
                          src={`${bp}${product.image}`}
                          alt={product.name}
                          fill
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 340px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#F3FF00]/20 to-[#D8FF3E]/10 border border-[#F3FF00]/30 flex items-center justify-center">
                            <span className="text-4xl font-black text-[#F3FF00] neon-text">
                              {product.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      )}
                      {/* Zoom hint */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="flex items-center gap-1 text-[10px] text-[#0D0D0D] bg-[#F3FF00]/90 rounded px-1.5 py-0.5 font-semibold">
                          <ZoomIn className="h-2.5 w-2.5" />
                          Ver detalle
                        </span>
                      </div>
                    </div>

                    {/* Content — z-10 para estar encima del glow overlay */}
                    <div className="relative z-10 p-5 pt-3 flex flex-col flex-1">
                      <p className="text-xs font-medium text-[#F3FF00] tracking-wider uppercase mb-1">{product.brand}</p>
                      <h3
                        className="text-lg font-bold text-[#F7F8FC] group-hover:text-[#F3FF00] transition-colors mb-2 line-clamp-1 cursor-pointer"
                        onClick={() => setModalProduct(product)}
                      >
                        {product.name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#252525] text-[#8A8A8A]">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#252525] mt-auto">
                        <div>
                          <p className="text-xl font-bold text-[#F3FF00]">{formatPrice(product.price)}</p>
                          {product.originalPrice && (
                            <p className="text-sm text-[#8A8A8A] line-through">{formatPrice(product.originalPrice)}</p>
                          )}
                        </div>
                        <AddToCartButton product={product} size="sm" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none z-0">
                      <div className="absolute -right-8 -top-8 w-16 h-16 bg-[#F3FF00]/5 rounded-full group-hover:bg-[#F3FF00]/10 transition-colors" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {favCount === 0 && (
            <p className="text-center text-xs text-[#555] mt-2">
              Toca el <Heart className="inline h-3 w-3" /> para guardar tus favoritos y recibir recomendaciones personalizadas
            </p>
          )}
        </div>
      </section>
    </>
  )
}
