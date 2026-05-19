import { formatPrice, type Product } from './products'

export function generateWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hola Vpee! Quiero comprar:\n` +
    `Producto: ${product.name}\n` +
    `SKU: ${product.sku}\n` +
    `Valor: ${formatPrice(product.price)}`
  )
  return `https://wa.me/573016522125?text=${message}`
}
