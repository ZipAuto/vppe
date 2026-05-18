'use client'

import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/products'

interface AddToCartButtonProps {
  product: Product
  size?: 'sm' | 'default'
  className?: string
}

export function AddToCartButton({ product, size = 'default', className = '' }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  if (size === 'sm') {
    return (
      <button
        onClick={handleAdd}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-300 ${
          added
            ? 'bg-green-500 text-white'
            : 'bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#D8FF3E]'
        } ${className}`}
      >
        {added ? (
          <><Check className="h-3 w-3" />Agregado</>
        ) : (
          <><ShoppingCart className="h-3 w-3" />Agregar</>
        )}
      </button>
    )
  }

  return (
    <Button
      onClick={handleAdd}
      className={`font-semibold transition-all duration-300 ${
        added
          ? 'bg-green-500 text-white hover:bg-green-500'
          : 'bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#D8FF3E] neon-glow-sm'
      } ${className}`}
    >
      {added ? (
        <><Check className="h-4 w-4 mr-1.5" />Agregado</>
      ) : (
        <><ShoppingCart className="h-4 w-4 mr-1.5" />Agregar</>
      )}
    </Button>
  )
}
