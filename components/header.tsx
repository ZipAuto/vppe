'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartDrawer } from '@/components/cart-drawer'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Vaporizadores', href: '/categoria/vaporizadores' },
  { name: 'Desechables', href: '/categoria/desechables' },
  { name: 'Bongs', href: '/categoria/bongs' },
  { name: 'CBD', href: '/categoria/cbd' },
  { name: 'Accesorios', href: '/categoria/accesorios' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#F3FF00]/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegacion principal">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEFV9991.PNG-y1e9m6BMvT59OVBfZoTtx7HnvIT0mn.png"
                alt="Vpee - Smoke Shop Zipaquira"
                width={80}
                height={40}
                className="h-8 w-auto invert"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-[#F7F8FC]/80 hover:text-[#F3FF00] transition-colors",
                  "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
                  "after:bg-[#F3FF00] after:transition-all hover:after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#F7F8FC] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10"
              aria-label="Buscar productos"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <CartDrawer />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#F7F8FC] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            searchOpen ? "max-h-16 py-3" : "max-h-0"
          )}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A8A8A]" />
            <Input
              type="search"
              placeholder="Buscar vaporizadores, bongs, CBD..."
              className="w-full pl-10 bg-[#1A1A1A] border-[#333333] text-[#F7F8FC] placeholder:text-[#8A8A8A]/50 focus:border-[#F3FF00]"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 bg-[#0D0D0D]/98 backdrop-blur-md border-b border-[#F3FF00]/10",
          "transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-base font-medium text-[#F7F8FC] hover:text-[#F3FF00] hover:bg-[#F3FF00]/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* WhatsApp CTA in mobile menu */}
          <div className="pt-4 mt-4 border-t border-[#333333]">
            <a
              href="https://wa.me/573016522125?text=Hola%20Vpee!%20Quiero%20mas%20informacion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#F3FF00] text-[#0D0D0D] font-semibold rounded-lg hover:bg-[#D8FF3E] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Habla con un experto
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
