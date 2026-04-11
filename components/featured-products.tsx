'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag, ArrowRight, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'
import { products, formatPrice } from '@/lib/products'

// Get featured products (those with badges)
const featuredProducts = products.filter(p => p.badge).slice(0, 8)

export function FeaturedProducts() {
  const { addItem } = useCart()

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-2">
              Productos <span className="text-[#F3FF00]">Destacados</span>
            </h2>
            <p className="text-[#8A8A8A] max-w-xl">
              Los favoritos de nuestros clientes. Calidad garantizada y envio rapido.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#F3FF00]/30 text-[#F3FF00] hover:bg-[#F3FF00]/10 hover:border-[#F3FF00]"
          >
            <Link href="/catalogo">
              Ver todo el catalogo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className={cn(
                "group relative rounded-xl overflow-hidden",
                "bg-[#1A1A1A]/50 border border-[#252525]",
                "hover:border-[#F3FF00]/30 transition-all duration-300 futuristic-card"
              )}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#F3FF00]/5 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#F3FF00]/40">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Badge */}
                {product.badge && (
                  <Badge
                    className={cn(
                      "absolute top-3 left-3 font-semibold",
                      product.badge === 'Oferta' && "bg-red-500 text-white hover:bg-red-500",
                      product.badge === 'Nuevo' && "bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#F3FF00]",
                      product.badge === 'Mas Vendido' && "bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#F3FF00]",
                      product.badge === 'Premium' && "bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-500",
                      product.badge === 'Top' && "bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#F3FF00]"
                    )}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Puffs indicator for disposables */}
                {product.puffs && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-[#0D0D0D]/80 text-[#F3FF00] rounded-full">
                    {product.puffs} puffs
                  </span>
                )}

                {/* Quick Buy Overlay */}
                <div className="absolute inset-0 bg-[#0D0D0D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button
                    onClick={() => addItem(product)}
                    className="bg-[#F3FF00] text-[#0D0D0D] font-semibold hover:bg-[#D8FF3E]"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-xs font-medium text-[#F3FF00]/70 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-[#F7F8FC] font-semibold mt-1 mb-2 group-hover:text-[#F3FF00] transition-colors line-clamp-2">
                  <Link href={`/categoria/${product.categorySlug}`}>
                    {product.name}
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#F3FF00]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-[#8A8A8A]/60 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => addItem(product)}
                    className="h-8 w-8 text-[#8A8A8A] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
