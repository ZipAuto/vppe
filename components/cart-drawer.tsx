'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { ShoppingBag, Minus, Plus, Trash2, MessageCircle, X } from 'lucide-react'
import { formatPrice } from '@/lib/products'
import { useState } from 'react'

export function CartDrawer() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount, clearCart, sendToWhatsApp } = useCart()
  const [open, setOpen] = useState(false)
  const itemCount = getItemCount()

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
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-[#252525] hover:border-[#F3FF00]/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-[#252525] rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#F3FF00]">
                      {item.product.name.charAt(0)}
                    </span>
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
