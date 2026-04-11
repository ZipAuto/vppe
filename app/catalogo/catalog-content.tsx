'use client'

import { useState, useMemo } from 'react'
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
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name'

export function CatalogContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('categoria') || 'all'
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        // Keep original order (featured first)
        result.sort((a, b) => {
          if (a.badge && !b.badge) return -1
          if (!a.badge && b.badge) return 1
          return 0
        })
    }

    return result
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B22] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-2">
              Catalogo <span className="text-[#F3FF00]">Vpee</span>
            </h1>
            <p className="text-[#D9DDE8]">
              Explora nuestra coleccion de {products.length}+ productos premium
            </p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D9DDE8]" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#0B1D5A] border-[#F3FF00]/30 text-[#F7F8FC] placeholder:text-[#D9DDE8]/50 focus:border-[#F3FF00]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D9DDE8] hover:text-[#F7F8FC]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden border-[#F3FF00]/30 text-[#F7F8FC] hover:bg-[#F3FF00]/10"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros
            </Button>

            {/* Desktop Filters */}
            <div className={cn(
              "flex flex-col sm:flex-row gap-4",
              "lg:flex",
              showFilters ? "flex" : "hidden lg:flex"
            )}>
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px] bg-[#0B1D5A] border-[#F3FF00]/30 text-[#F7F8FC]">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1D5A] border-[#F3FF00]/30">
                  <SelectItem value="all" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20">
                    Todas las categorias
                  </SelectItem>
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat.slug}
                      value={cat.slug}
                      className="text-[#F7F8FC] focus:bg-[#F3FF00]/20"
                    >
                      {cat.name} ({cat.productCount})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-full sm:w-[180px] bg-[#0B1D5A] border-[#F3FF00]/30 text-[#F7F8FC]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1D5A] border-[#F3FF00]/30">
                  <SelectItem value="featured" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20">
                    Destacados
                  </SelectItem>
                  <SelectItem value="price-asc" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20">
                    Precio: menor a mayor
                  </SelectItem>
                  <SelectItem value="price-desc" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20">
                    Precio: mayor a menor
                  </SelectItem>
                  <SelectItem value="name" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20">
                    Nombre A-Z
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Pills (Desktop) */}
          <div className="hidden lg:flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedCategory === 'all'
                  ? "bg-[#F3FF00] text-[#0B1D5A]"
                  : "bg-[#0B1D5A] text-[#F7F8FC] hover:bg-[#F3FF00]/20"
              )}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  selectedCategory === cat.slug
                    ? "bg-[#F3FF00] text-[#0B1D5A]"
                    : "bg-[#0B1D5A] text-[#F7F8FC] hover:bg-[#F3FF00]/20"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-[#D9DDE8] mb-6">
            Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && (
              <span> en <span className="text-[#F3FF00]">{categories.find(c => c.slug === selectedCategory)?.name}</span></span>
            )}
            {searchQuery && (
              <span> para &quot;{searchQuery}&quot;</span>
            )}
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#0B1D5A] flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-[#F3FF00]/30" />
              </div>
              <h3 className="text-xl font-semibold text-[#F7F8FC] mb-2">
                No encontramos productos
              </h3>
              <p className="text-[#D9DDE8] mb-6">
                Intenta con otra busqueda o categoria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="bg-[#F3FF00] text-[#0B1D5A] hover:bg-[#D8FF3E]"
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
