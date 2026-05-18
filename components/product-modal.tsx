'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ShoppingCart, Zap, Star, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Product, formatPrice } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function generateWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hola Vpee! Quiero comprar:\n` +
    `Producto: ${product.name}\n` +
    `SKU: ${product.sku}\n` +
    `Valor: ${formatPrice(product.price)}`
  )
  return `https://wa.me/573016522125?text=${message}`
}

interface ProductModalProps {
  product: Product
  open: boolean
  onClose: () => void
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const { addItem } = useCart()

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal — bottom sheet on mobile, centered dialog on sm+ */}
      <div
        className={cn(
          'relative z-10 w-full sm:max-w-3xl',
          'bg-[#111111] border-t sm:border border-[#2A2A2A]',
          'rounded-t-3xl sm:rounded-2xl shadow-2xl',
          'max-h-[92vh] sm:max-h-[88vh] overflow-y-auto',
          'animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#333]" />
        </div>

        {/* Close button — sticky to top */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 rounded-full bg-[#1A1A1A] border border-[#333] text-[#8A8A8A] hover:text-[#F7F8FC] hover:border-[#F3FF00]/50 transition-all"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Layout: stacked on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image panel */}
          <div className="relative bg-white rounded-t-2xl sm:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none overflow-hidden aspect-square md:aspect-auto md:min-h-[380px]">
            {product.image ? (
              <Image
                src={`${bp}${product.image}`}
                alt={product.name}
                fill
                className="object-contain p-6 sm:p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
                <ShoppingCart className="w-16 h-16 text-[#F3FF00]/20" />
              </div>
            )}

            {/* Badge */}
            {product.badge && (
              <Badge
                className={cn(
                  'absolute top-3 left-3 font-semibold text-xs shadow-lg',
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

            {product.puffs && (
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#0D0D0D]/90 text-[#F3FF00] text-xs font-bold rounded-full border border-[#F3FF00]/30">
                {product.puffs} puffs
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="p-5 sm:p-6 flex flex-col gap-3">
            {/* Category + Brand */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#F3FF00]/70 uppercase tracking-widest">
                {product.category}
              </span>
              <span className="text-xs text-[#555] bg-[#1A1A1A] px-2 py-0.5 rounded-full border border-[#2A2A2A]">
                {product.brand}
              </span>
            </div>

            {/* Name */}
            <h2 className="text-lg sm:text-xl font-bold text-[#F7F8FC] leading-snug pr-6">
              {product.name}
            </h2>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-[#F3FF00] text-[#F3FF00]" />
              ))}
              <span className="text-xs text-[#555] ml-1.5">Producto verificado</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-black text-[#F3FF00]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#555] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <ul className="space-y-1.5">
                {product.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#B0B0B0]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F3FF00]/60 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {/* SKU + Stock */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-[#3A3A3A]">SKU: {product.sku}</span>
              <div className={cn(
                'inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full',
                product.inStock
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              )}>
                <span className={cn('w-1.5 h-1.5 rounded-full', product.inStock ? 'bg-green-400' : 'bg-red-400')} />
                {product.inStock ? 'Disponible' : 'Agotado'}
              </div>
            </div>

            {/* Actions */}
            {product.inStock && (
              <div className="flex flex-col gap-2.5 mt-auto pt-2">
                <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-xl hover:bg-[#D8FF3E] active:bg-[#c8ee00] transition-colors text-sm shadow-lg shadow-[#F3FF00]/10"
                >
                  <Zap className="h-4 w-4" />
                  Comprar por WhatsApp
                </a>
                <Button
                  onClick={() => { addItem(product); onClose() }}
                  variant="outline"
                  className="w-full border-[#2A2A2A] bg-[#1A1A1A] text-[#C0C0C0] hover:bg-[#222] hover:border-[#F3FF00]/30 hover:text-[#F3FF00] transition-all text-sm h-11"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
