'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Product, formatPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

function generateWhatsAppLink(product: Product): string {
  const userId = typeof window !== 'undefined' ? localStorage.getItem('vpee_user_id') || '' : ''
  const message = encodeURIComponent(
    `Hola Vpee! Quiero comprar:\n` +
    `Producto: ${product.name}\n` +
    `SKU: ${product.sku}\n` +
    `Valor: ${formatPrice(product.price)}\n` +
    `Mi ID de verificacion: ${userId}`
  )
  return `https://wa.me/573016522125?text=${message}`
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative rounded-xl overflow-hidden",
        "bg-[#0B1D5A]/50 border border-[#F3FF00]/10",
        "hover:border-[#F3FF00]/30 transition-all duration-300"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-[#0B1D5A] to-[#050B22] overflow-hidden">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#F3FF00]/5 flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-[#F3FF00]/30" />
          </div>
        </div>
        
        {/* Badge */}
        {product.badge && (
          <Badge
            className={cn(
              "absolute top-3 left-3 font-semibold",
              product.badge === 'Oferta' && "bg-red-500 text-white",
              product.badge === 'Nuevo' && "bg-[#F3FF00] text-[#0B1D5A]",
              product.badge === 'Mas Vendido' && "bg-[#F3FF00] text-[#0B1D5A]",
              product.badge === 'Premium' && "bg-gradient-to-r from-amber-500 to-yellow-500 text-black",
              product.badge === 'Top' && "bg-[#F3FF00] text-[#0B1D5A]"
            )}
          >
            {product.badge}
          </Badge>
        )}

        {/* Puffs indicator for disposables */}
        {product.puffs && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-[#050B22]/80 text-[#F3FF00] rounded-full">
            {product.puffs} puffs
          </span>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-[#050B22]/80 flex items-center justify-center">
            <span className="text-[#F7F8FC] font-semibold bg-red-500/80 px-4 py-2 rounded-lg">
              Agotado
            </span>
          </div>
        )}

        {/* Quick Buy Overlay */}
        {product.inStock && (
          <div className="absolute inset-0 bg-[#0B1D5A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              asChild
              className="bg-[#F3FF00] text-[#0B1D5A] font-semibold hover:bg-[#D8FF3E]"
            >
              <a
                href={generateWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Comprar ahora
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-[#F3FF00]/70 uppercase tracking-wider">
            {product.category}
          </span>
          <span className="text-xs text-[#D9DDE8]/60">
            {product.brand}
          </span>
        </div>
        <h3 className="text-[#F7F8FC] font-semibold mt-1 mb-2 group-hover:text-[#F3FF00] transition-colors line-clamp-2">
          <Link href={`/producto/${product.slug}`}>
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#F3FF00]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-[#D9DDE8]/60 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
