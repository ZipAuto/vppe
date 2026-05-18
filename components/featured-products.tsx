'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, ArrowRight, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'
import { products, formatPrice, Product } from '@/lib/products'

// Featured: todos los productos con badge, hasta 12
const featuredProducts = products.filter(p => p.badge).slice(0, 12)
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function generateWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hola Vpee! Quiero comprar:\nProducto: ${product.name}\nSKU: ${product.sku}\nValor: ${formatPrice(product.price)}`
  )
  return `https://wa.me/573016522125?text=${message}`
}

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
                'group relative rounded-xl overflow-hidden flex flex-col',
                'bg-[#111111] border border-[#222222]',
                'hover:border-[#F3FF00]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(243,255,0,0.08)]'
              )}
            >
              {/* Image */}
              <div className="relative aspect-square bg-white overflow-hidden">
                {product.image ? (
                  <Image
                    src={`${bp}${product.image}`}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#F3FF00]/5 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#F3FF00]/40">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Badge */}
                {product.badge && (
                  <Badge
                    className={cn(
                      'absolute top-3 left-3 font-semibold text-xs',
                      product.badge === 'Oferta' && 'bg-red-500 text-white hover:bg-red-500',
                      product.badge === 'Nuevo' && 'bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#F3FF00]',
                      product.badge === 'Mas Vendido' && 'bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#F3FF00]',
                      product.badge === 'Premium' && 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black hover:from-amber-500',
                      product.badge === 'Top' && 'bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#F3FF00]'
                    )}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Puffs */}
                {product.puffs && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-bold bg-[#0D0D0D]/90 text-[#F3FF00] rounded-full border border-[#F3FF00]/20">
                    {product.puffs} puffs
                  </span>
                )}

                {/* Hover overlay: dos botones */}
                <div className="absolute inset-0 bg-[#0D0D0D]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                  <a
                    href={generateWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-lg hover:bg-[#D8FF3E] transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Zap className="h-4 w-4" />
                    Comprar ahora
                  </a>
                  <button
                    onClick={() => addItem(product)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#1A1A1A] border border-[#F3FF00]/40 text-[#F3FF00] font-semibold rounded-lg hover:bg-[#F3FF00]/10 transition-colors text-sm"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Agregar al carrito
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-medium text-[#F3FF00]/70 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-[#F7F8FC] font-semibold mt-1 mb-3 group-hover:text-[#F3FF00] transition-colors line-clamp-2 text-sm flex-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#1E1E1E]">
                  <div>
                    <span className="text-base font-bold text-[#F3FF00]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="block text-xs text-[#555] line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => addItem(product)}
                    className="h-8 w-8 text-[#8A8A8A] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10"
                    aria-label={`Agregar ${product.name} al carrito`}
                  >
                    <ShoppingCart className="h-4 w-4" />
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
