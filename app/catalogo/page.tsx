import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CatalogContent } from './catalog-content'

export const metadata: Metadata = {
  title: 'Catalogo | Vpee - Vaporizadores, Desechables, Bongs y Mas en Zipaquira',
  description: 'Explora nuestro catalogo completo de vaporizadores, desechables, bongs, CBD y accesorios. Envio gratis en Zipaquira. Solo +18.',
  openGraph: {
    title: 'Catalogo Vpee - El Smoke Shop mas completo de Zipaquira',
    description: 'Mas de 300 productos: vaporizadores, desechables, bongs, CBD y accesorios premium.',
  },
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <CatalogContent />
    </Suspense>
  )
}

function CatalogSkeleton() {
  return (
    <div className="min-h-screen bg-[#050B22] pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-10 w-64 bg-[#0B1D5A]/50 rounded-lg animate-pulse mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-[#0B1D5A]/50 overflow-hidden">
              <div className="aspect-square bg-[#0B1D5A] animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-20 bg-[#0B1D5A] rounded animate-pulse" />
                <div className="h-5 w-full bg-[#0B1D5A] rounded animate-pulse" />
                <div className="h-6 w-24 bg-[#0B1D5A] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
