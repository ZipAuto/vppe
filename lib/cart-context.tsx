'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
  generateWhatsAppMessage: () => string
  sendToWhatsApp: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'vpee_cart'
const WHATSAPP_NUMBER = '573016522125'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch {
        console.error('Error parsing cart from localStorage')
      }
    }
    setIsHydrated(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, isHydrated])

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id)
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotal = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  }

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0)
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return ''

    const verificationId = localStorage.getItem('vpee_verification_id') || 'No verificado'
    
    let message = `*PEDIDO VPEE SMOKESHOP*\n\n`
    message += `Hola! Quiero realizar el siguiente pedido:\n\n`
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`
      message += `   Marca: ${item.product.brand}\n`
      message += `   Cantidad: ${item.quantity}\n`
      message += `   Precio unitario: ${formatPrice(item.product.price)}\n`
      message += `   Subtotal: ${formatPrice(item.product.price * item.quantity)}\n\n`
    })

    message += `-------------------\n`
    message += `*TOTAL: ${formatPrice(getTotal())}*\n`
    message += `*Productos: ${getItemCount()}*\n`
    message += `-------------------\n\n`
    message += `ID Verificacion +18: ${verificationId}\n\n`
    message += `Por favor confirmar disponibilidad y metodo de pago.`

    return message
  }

  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage()
    if (!message) return
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
        generateWhatsAppMessage,
        sendToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
