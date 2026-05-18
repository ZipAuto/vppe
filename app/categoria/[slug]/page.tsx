import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { getCategoryBySlug, getProductsByCategory, categories } from '@/lib/products'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: 'Categoria no encontrada | Vpee',
    }
  }

  return {
    title: `${category.name} | Vpee - Smoke Shop Zipaquira`,
    description: `${category.description} Encuentra los mejores ${category.name.toLowerCase()} en Vpee, el smoke shop lider en Zipaquira. Solo +18.`,
    openGraph: {
      title: `${category.name} - Vpee Smoke Shop`,
      description: category.description,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  const products = getProductsByCategory(slug)

  if (!category) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D0D0D] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-[#D9DDE8] hover:text-[#F3FF00] transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-[#D9DDE8]/50" />
            <Link href="/catalogo" className="text-[#D9DDE8] hover:text-[#F3FF00] transition-colors">
              Catalogo
            </Link>
            <ChevronRight className="h-4 w-4 text-[#D9DDE8]/50" />
            <span className="text-[#F3FF00]">{category.name}</span>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F8FC] mb-4">
              {category.name} en <span className="text-[#F3FF00]">Zipaquira</span>
            </h1>
            <p className="text-[#D9DDE8] text-lg max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Products Count */}
          <p className="text-[#D9DDE8] mb-6">
            {products.length} producto{products.length !== 1 ? 's' : ''} disponible{products.length !== 1 ? 's' : ''}
          </p>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-[#F3FF00]/30">0</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F7F8FC] mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-[#D9DDE8] mb-6">
                Estamos trabajando para agregar mas productos a esta categoria
              </p>
              <Link
                href="/catalogo"
                className="inline-block px-6 py-3 bg-[#F3FF00] text-[#0B1D5A] font-semibold rounded-lg hover:bg-[#D8FF3E] transition-colors"
              >
                Ver todo el catalogo
              </Link>
            </div>
          )}

          {/* Other Categories */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-[#F7F8FC] mb-6">
              Otras <span className="text-[#F3FF00]">Categorias</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories
                .filter((c) => c.slug !== slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categoria/${cat.slug}`}
                    className="px-4 py-2 rounded-full bg-[#1A1A1A] text-[#F7F8FC] hover:bg-[#F3FF00]/20 hover:text-[#F3FF00] transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
