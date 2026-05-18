'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartDrawer } from '@/components/cart-drawer'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Vape Recargable', href: '/categoria/vape-recargable' },
  { name: 'Desechables', href: '/categoria/desechables' },
  { name: 'Alternativos', href: '/categoria/vape-alternativos' },
  { name: 'Pods', href: '/categoria/pods' },
  { name: 'Líquidos', href: '/categoria/liquidos' },
  { name: 'Repuestos', href: '/categoria/repuestos' },
  { name: 'Accesorios 4:20', href: '/categoria/accesorios' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
  }, [searchOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    setSearchOpen(false)
    setMobileMenuOpen(false)
    router.push(`/catalogo?q=${encodeURIComponent(searchQuery.trim())}`)
    setSearchQuery('')
  }

  const toggleSearch = () => {
    setSearchOpen(s => !s)
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  const toggleMenu = () => {
    setMobileMenuOpen(s => !s)
    if (searchOpen) setSearchOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/96 backdrop-blur-md border-b border-[#F3FF00]/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegacion principal">
          <div className="flex h-16 sm:h-[72px] items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" onClick={closeMenu} className="flex-shrink-0 flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEFV9991.PNG-y1e9m6BMvT59OVBfZoTtx7HnvIT0mn.png"
                alt="Vpee Smoke Shop Zipaquira"
                width={130}
                height={56}
                className="h-11 sm:h-12 w-auto invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-3 xl:gap-5 flex-1 justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-xs xl:text-sm font-medium text-[#F7F8FC]/80 hover:text-[#F3FF00] transition-colors whitespace-nowrap',
                    'relative after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0',
                    'after:bg-[#F3FF00] after:transition-all after:duration-200 hover:after:w-full'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                className="text-[#F7F8FC] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10 h-9 w-9"
                aria-label={searchOpen ? 'Cerrar buscador' : 'Abrir buscador'}
                aria-expanded={searchOpen}
              >
                {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              {/* Cart */}
              <CartDrawer />

              {/* Hamburger — mobile/tablet only */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-[#F7F8FC] hover:text-[#F3FF00] hover:bg-[#F3FF00]/10 h-9 w-9"
                onClick={toggleMenu}
                aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{mobileMenuOpen ? 'Cerrar' : 'Menu'}</span>
                <Menu
                  className={cn(
                    'h-5 w-5 absolute transition-all duration-200',
                    mobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                  )}
                />
                <X
                  className={cn(
                    'h-5 w-5 absolute transition-all duration-200',
                    mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                  )}
                />
              </Button>
            </div>
          </div>

          {/* Search bar — slides down */}
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              searchOpen ? 'max-h-20 pb-3 pt-1' : 'max-h-0'
            )}
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A8A8A] pointer-events-none" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar vaporizadores, bongs, grinders..."
                className="w-full h-10 pl-10 pr-24 bg-[#1A1A1A] border border-[#333] rounded-xl text-sm text-[#F7F8FC] placeholder:text-[#555] focus:outline-none focus:border-[#F3FF00] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#F3FF00] text-[#0D0D0D] text-xs font-bold rounded-lg hover:bg-[#D8FF3E] transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 z-40 transition-all duration-300',
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={closeMenu}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            'absolute top-[72px] left-0 right-0 bottom-0 bg-[#0D0D0D] border-t border-[#F3FF00]/10',
            'overflow-y-auto transition-transform duration-300 ease-in-out',
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-4 opacity-0'
          )}
        >
          <nav className="px-4 pt-3 pb-8 space-y-1">
            {navigation.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  'flex items-center gap-3 py-3.5 px-4 rounded-xl text-base font-medium transition-all duration-150',
                  'text-[#D0D0D0] hover:text-[#F3FF00] hover:bg-[#F3FF00]/8 active:bg-[#F3FF00]/12',
                  'border border-transparent hover:border-[#F3FF00]/10'
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${i * 30}ms` : '0ms' }}
              >
                <span className="text-[#F3FF00]/40 text-xs font-mono w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="pt-4 mt-2 border-t border-[#222]">
              <a
                href="https://wa.me/573016522125?text=Hola%20Vpee!%20Quiero%20mas%20informacion"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-xl hover:bg-[#D8FF3E] active:bg-[#c8ee00] transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Habla con un experto
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
