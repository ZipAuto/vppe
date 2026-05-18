'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { products, categories } from '@/lib/products'
import { Search, SlidersHorizontal, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name'

export function CatalogContent() {
  const searchParams = useSearchParams()

  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('categoria') || 'all'
  )
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const pillsRef = useRef<HTMLDivElement>(null)

  // Sync filters with URL params reactively
  useEffect(() => {
    const cat = searchParams.get('categoria') || 'all'
    const q = searchParams.get('q') || ''
    setSelectedCategory(cat)
    if (q) setSearchQuery(q)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name, 'es'))
        break
      case 'featured':
      default:
        result.sort((a, b) => {
          const badgeOrder = { 'Mas Vendido': 0, 'Nuevo': 1, 'Premium': 2, 'Oferta': 3, 'Top': 4 }
          const aOrder = a.badge ? (badgeOrder[a.badge as keyof typeof badgeOrder] ?? 5) : 99
          const bOrder = b.badge ? (badgeOrder[b.badge as keyof typeof badgeOrder] ?? 5) : 99
          return aOrder - bOrder
        })
    }

    return result
  }, [selectedCategory, searchQuery, sortBy])

  const scrollPills = (dir: 'left' | 'right') => {
    pillsRef.current?.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' })
  }

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug)
    setSearchQuery('')
  }

  const activeCategory = categories.find(c => c.slug === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D0D0D] pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="pt-6 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8FC] mb-1">
              Catalogo <span className="text-[#F3FF00]">Vpee</span>
            </h1>
            <p className="text-[#8A8A8A] text-sm sm:text-base">
              {products.length} productos disponibles en tienda
            </p>
          </div>

          {/* Search bar — always full width */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A8A8A]" />
            <Input
              type="search"
              placeholder="Buscar por nombre, marca o categoria..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-11 bg-[#1A1A1A] border-[#333] text-[#F7F8FC] placeholder:text-[#555] focus:border-[#F3FF00] rounded-xl text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#F7F8FC] transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category pills — scrollable on all screens */}
          <div className="relative mb-4">
            {/* Scroll left button (desktop) */}
            <button
              onClick={() => scrollPills('left')}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-7 h-7 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#333] text-[#8A8A8A] hover:text-[#F3FF00] hover:border-[#F3FF00]/40 transition-all"
              aria-label="Scroll izquierda"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <div
              ref={pillsRef}
              className="flex gap-2 overflow-x-auto scrollbar-none pb-1 sm:px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button
                onClick={() => handleCategoryChange('all')}
                className={cn(
                  'flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200',
                  selectedCategory === 'all'
                    ? 'bg-[#F3FF00] text-[#0D0D0D] shadow-lg shadow-[#F3FF00]/20'
                    : 'bg-[#1A1A1A] text-[#C0C0C0] border border-[#2A2A2A] hover:border-[#F3FF00]/40 hover:text-[#F3FF00]'
                )}
              >
                Todos ({products.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={cn(
                    'flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200',
                    selectedCategory === cat.slug
                      ? 'bg-[#F3FF00] text-[#0D0D0D] shadow-lg shadow-[#F3FF00]/20'
                      : 'bg-[#1A1A1A] text-[#C0C0C0] border border-[#2A2A2A] hover:border-[#F3FF00]/40 hover:text-[#F3FF00]'
                  )}
                >
                  {cat.name} ({cat.productCount})
                </button>
              ))}
            </div>

            {/* Scroll right button (desktop) */}
            <button
              onClick={() => scrollPills('right')}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-7 h-7 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#333] text-[#8A8A8A] hover:text-[#F3FF00] hover:border-[#F3FF00]/40 transition-all"
              aria-label="Scroll derecha"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Sort row */}
          <div className="flex items-center justify-between mb-5 gap-3">
            {/* Results count */}
            <p className="text-[#8A8A8A] text-sm flex-1 min-w-0 truncate">
              <span className="text-[#F7F8FC] font-medium">{filteredProducts.length}</span>
              {' '}resultado{filteredProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && activeCategory && (
                <> en <span className="text-[#F3FF00]">{activeCategory.name}</span></>
              )}
              {searchQuery && (
                <> para <span className="text-[#F3FF00]">&ldquo;{searchQuery}&rdquo;</span></>
              )}
            </p>

            {/* Sort + mobile filter toggle */}
            <div className="flex items-center gap-2 flex-none">
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[140px] sm:w-[180px] h-9 bg-[#1A1A1A] border-[#333] text-[#C0C0C0] text-xs sm:text-sm">
                  <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5 text-[#666]" />
                  <SelectValue placeholder="Ordenar" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A1A] border-[#333] z-50">
                  <SelectItem value="featured" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 text-sm">
                    Destacados
                  </SelectItem>
                  <SelectItem value="price-asc" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 text-sm">
                    Precio: menor a mayor
                  </SelectItem>
                  <SelectItem value="price-desc" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 text-sm">
                    Precio: mayor a menor
                  </SelectItem>
                  <SelectItem value="name" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 text-sm">
                    Nombre A-Z
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-[#F3FF00]/30" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#F7F8FC] mb-2">
                No encontramos productos
              </h3>
              <p className="text-[#8A8A8A] text-sm mb-6 px-4">
                Intenta con otra busqueda o selecciona una categoria diferente
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="bg-[#F3FF00] text-[#0D0D0D] hover:bg-[#D8FF3E] font-semibold"
              >
                Ver todos los productos
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
