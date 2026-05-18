'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Product, formatPrice } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { ProductModal } from '@/components/product-modal'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface ProductCardProps {
  product: Product
}

function generateWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hola Vpee! Quiero comprar:\n` +
    `Producto: ${product.name}\n` +
    `SKU: ${product.sku}\n` +
    `Valor: ${formatPrice(product.price)}`
  )
  return `https://wa.me/573016522125?text=${message}`
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ProductModal product={product} open={modalOpen} onClose={() => setModalOpen(false)} />
      <article
        className={cn(
          'group relative rounded-xl overflow-hidden flex flex-col',
          'bg-[#111111] border border-[#222222]',
          'hover:border-[#F3FF00]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(243,255,0,0.08)]'
        )}
      >
      {/* Image Container — white background for product clarity */}
      <div
        className="relative aspect-square bg-white overflow-hidden cursor-zoom-in"
        onClick={() => setModalOpen(true)}
      >
        {product.image ? (
          <Image
            src={`${bp}${product.image}`}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#F3FF00]/5 flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-[#F3FF00]/30" />
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

        {/* Out of stock */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-[#0D0D0D]/80 flex items-center justify-center">
            <span className="text-[#F7F8FC] font-semibold bg-red-500/80 px-4 py-2 rounded-lg">
              Agotado
            </span>
          </div>
        )}

        {/* Hover overlay: Comprar ahora */}
        {product.inStock && (
          <div className="absolute inset-0 bg-[#0D0D0D]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={generateWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-lg hover:bg-[#D8FF3E] transition-colors text-sm shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Zap className="h-4 w-4" />
              Comprar ahora
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-[#F3FF00]/70 uppercase tracking-wider">
            {product.category}
          </span>
          <span className="text-xs text-[#666] truncate max-w-[80px]">
            {product.brand}
          </span>
        </div>

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

          {product.inStock && (
            <Button
              size="sm"
              onClick={() => addItem(product)}
              className="h-8 w-8 p-0 bg-[#1A1A1A] border border-[#333] text-[#F3FF00] hover:bg-[#F3FF00] hover:text-[#0D0D0D] hover:border-[#F3FF00] transition-all"
              aria-label={`Agregar ${product.name} al carrito`}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      </article>
    </>
  )
}
