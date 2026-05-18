'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { ShoppingBag, Minus, Plus, Trash2, MessageCircle, X, Sparkles } from 'lucide-react'
import { formatPrice, products, Product } from '@/lib/products'
import { useState, useMemo } from 'react'
import Image from 'next/image'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// Cross-category complementary map: what pairs well with each category
const complementaryMap: Record<string, string[]> = {
  'vape-recargable': ['repuestos', 'liquidos', 'pods'],
  'desechables':     ['liquidos', 'accesorios'],
  'vape-alternativos': ['repuestos', 'accesorios'],
  'pods':            ['liquidos', 'vape-recargable'],
  'liquidos':        ['pods', 'vape-recargable', 'repuestos'],
  'repuestos':       ['vape-recargable', 'liquidos'],
  'accesorios':      ['desechables', 'vape-recargable'],
}

function getRelated(cartItems: { product: Product }[], cartIds: Set<string>): Product | null {
  if (cartItems.length === 0) return null

  // Build a scored list of candidate categories based on cart contents
  const categoryScores: Record<string, number> = {}
  for (const item of cartItems) {
    const slug = item.product.categorySlug
    const complements = complementaryMap[slug] ?? []
    for (const c of complements) {
      categoryScores[c] = (categoryScores[c] ?? 0) + 1
    }
  }

  // Try to find a product from the highest-scored complementary category
  const sorted = Object.entries(categoryScores).sort((a, b) => b[1] - a[1])
  for (const [cat] of sorted) {
    const candidates = products.filter(
      p => p.categorySlug === cat && !cartIds.has(p.id) && p.inStock
    )
    // Prefer badged products for better recommendations
    const badged = candidates.filter(p => p.badge)
    const pool = badged.length > 0 ? badged : candidates
    if (pool.length > 0) {
      return pool[Math.floor(Math.random() * Math.min(pool.length, 5))]
    }
  }

  // Fallback: any in-stock badged product not in cart
  const fallback = products.filter(p => !cartIds.has(p.id) && p.inStock && p.badge)
  return fallback[0] ?? null
}

function getRelatedLabel(cartItems: { product: Product }[], related: Product): string {
  const cartSlugs = new Set(cartItems.map(i => i.product.categorySlug))
  const relatedSlug = related.categorySlug

  if (cartSlugs.has('vape-recargable') && relatedSlug === 'repuestos') return 'Repuesto para tu equipo'
  if (cartSlugs.has('vape-recargable') && relatedSlug === 'liquidos') return 'Liquido compatible'
  if (cartSlugs.has('desechables') && relatedSlug === 'liquidos') return 'Completa tu experiencia'
  if (cartSlugs.has('pods') && relatedSlug === 'liquidos') return 'Liquido para tu pod'
  if (cartSlugs.has('liquidos') && relatedSlug === 'repuestos') return 'Renueva tu resistencia'
  if (relatedSlug === 'accesorios') return 'Accesorio recomendado'
  return 'También te puede gustar'
}

export function CartDrawer() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount, clearCart, sendToWhatsApp, addItem } = useCart()
  const [open, setOpen] = useState(false)
  const itemCount = getItemCount()

  const cartIds = useMemo(() => new Set(items.map(i => i.product.id)), [items])
  const related = useMemo(() => getRelated(items, cartIds), [items, cartIds])
  const relatedLabel = useMemo(() => related ? getRelatedLabel(items, related) : '', [items, related])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#F7F8FC] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10 relative"
          aria-label="Carrito de compras"
        >
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#F3FF00] text-[#0D0D0D] text-xs font-bold flex items-center justify-center neon-glow-sm">
              {itemCount > 99 ? '99+' : itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-[#0D0D0D] border-l border-[#F3FF00]/20 flex flex-col">
        <SheetHeader className="border-b border-[#F3FF00]/10 pb-4">
          <SheetTitle className="text-[#F7F8FC] flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#F3FF00]" />
            Tu Carrito
            {itemCount > 0 && (
              <span className="text-sm font-normal text-[#8A8A8A]">
                ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4">
              <ShoppingBag className="h-10 w-10 text-[#333333]" />
            </div>
            <h3 className="text-lg font-semibold text-[#F7F8FC] mb-2">Tu carrito esta vacio</h3>
            <p className="text-sm text-[#8A8A8A] max-w-xs">
              Explora nuestro catalogo y agrega tus productos favoritos
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-[#252525] hover:border-[#F3FF00]/20 transition-colors"
                >
                  {/* Product image */}
                  <div className="flex-shrink-0 w-20 h-20 bg-[#0D0D0D] rounded-lg overflow-hidden flex items-center justify-center border border-[#252525]">
                    {item.product.image ? (
                      <Image
                        src={`${bp}${item.product.image}`}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="object-contain p-1 w-full h-full"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-[#F3FF00]">
                        {item.product.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[#F7F8FC] truncate">{item.product.name}</h4>
                    <p className="text-sm text-[#8A8A8A]">{item.product.brand}</p>
                    <p className="text-sm font-semibold text-[#F3FF00] mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-[#333333] text-[#F7F8FC] hover:border-[#F3FF00] hover:text-[#F3FF00]"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium text-[#F7F8FC]">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-[#333333] text-[#F7F8FC] hover:border-[#F3FF00] hover:text-[#F3FF00]"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-[#8A8A8A] hover:text-red-500 hover:bg-red-500/10"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Smart Cross-Category Recommendation */}
              {related && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <Sparkles className="h-3.5 w-3.5 text-[#F3FF00]" />
                    <span className="text-xs font-semibold text-[#F3FF00] tracking-wider uppercase">
                      {relatedLabel}
                    </span>
                  </div>

                  <div className="flex gap-3 p-4 bg-[#1A1A1A] rounded-xl border border-[#F3FF00]/15 hover:border-[#F3FF00]/35 transition-colors">
                    {/* Thumbnail */}
                    <div className="flex-shrink-0 w-16 h-16 bg-[#0D0D0D] rounded-lg overflow-hidden border border-[#252525] flex items-center justify-center">
                      {related.image ? (
                        <Image
                          src={`${bp}${related.image}`}
                          alt={related.name}
                          width={64}
                          height={64}
                          className="object-contain p-1 w-full h-full"
                        />
                      ) : (
                        <span className="text-xl font-bold text-[#F3FF00]">
                          {related.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#F3FF00]/60 uppercase tracking-wider font-medium truncate">
                        {related.category}
                      </p>
                      <h5 className="text-sm font-semibold text-[#F7F8FC] line-clamp-2 leading-snug mt-0.5">
                        {related.name}
                      </h5>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-bold text-[#F3FF00]">
                          {formatPrice(related.price)}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => addItem(related)}
                          className="h-7 px-3 text-xs bg-[#F3FF00] text-[#0D0D0D] font-bold hover:bg-[#D8FF3E] rounded-lg"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <SheetFooter className="border-t border-[#F3FF00]/10 pt-4 flex-col gap-4">
              <div className="w-full space-y-2">
                <div className="flex justify-between text-sm text-[#8A8A8A]">
                  <span>Subtotal</span>
                  <span>{formatPrice(getTotal())}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#F7F8FC]">
                  <span>Total</span>
                  <span className="text-[#F3FF00]">{formatPrice(getTotal())}</span>
                </div>
              </div>

              <Button
                onClick={() => {
                  sendToWhatsApp()
                  setOpen(false)
                }}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-6 text-base gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar pedido por WhatsApp
              </Button>

              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full border-[#333333] text-[#8A8A8A] hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/10"
              >
                <X className="h-4 w-4 mr-2" />
                Vaciar carrito
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
