'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const galleryImages = [
  {
    src: '/images/products/vape-premium-1.jpg',
    alt: 'Vaporizador premium con acabado negro mate y acentos neon',
    title: 'Vaporizadores Elite',
  },
  {
    src: '/images/products/vape-premium-2.jpg',
    alt: 'Vape desechable con acabado metalico premium',
    title: 'Desechables Premium',
  },
  {
    src: '/images/products/vape-premium-3.jpg',
    alt: 'Bong de cristal premium con percoladores',
    title: 'Cristaleria Artesanal',
  },
  {
    src: '/images/products/vape-premium-4.jpg',
    alt: 'E-liquids premium en botellas elegantes',
    title: 'E-Liquids Exclusivos',
  },
  {
    src: '/images/products/vape-premium-5.jpg',
    alt: 'Mod vape de alta gama con pantalla OLED',
    title: 'Mods de Alta Gama',
  },
  {
    src: '/images/products/vape-premium-6.jpg',
    alt: 'Productos CBD premium',
    title: 'CBD Wellness',
  },
]

export function PremiumGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length)
    }
  }

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3FF00]/10 border border-[#F3FF00]/30 mb-4">
            <Sparkles className="h-4 w-4 text-[#F3FF00]" />
            <span className="text-sm font-medium text-[#F3FF00]">Premium Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Galeria de <span className="text-[#F3FF00] neon-text">Productos Premium</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Descubre nuestra seleccion curada de productos de la mas alta calidad. 
            Cada articulo representa lo mejor en tecnologia y diseno.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/40 transition-all duration-500 futuristic-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-semibold text-[#F7F8FC] opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#F3FF00]/0 group-hover:border-[#F3FF00] rounded-tr-lg transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#F3FF00]/0 group-hover:border-[#F3FF00] rounded-bl-lg transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => closeModal()}>
          <DialogContent className="max-w-5xl w-[95vw] bg-[#0D0D0D]/95 border-[#252525] p-0 overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>
                {selectedIndex !== null ? galleryImages[selectedIndex].title : 'Imagen de galeria'}
              </DialogTitle>
            </VisuallyHidden>
            
            {selectedIndex !== null && (
              <div className="relative">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                    sizes="95vw"
                    priority
                  />
                </div>

                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0D0D0D]/80 text-[#F7F8FC] hover:bg-[#F3FF00] hover:text-[#0D0D0D]"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0D0D0D]/80 text-[#F7F8FC] hover:bg-[#F3FF00] hover:text-[#0D0D0D]"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0D0D0D] to-transparent">
                  <p className="text-lg font-semibold text-[#F7F8FC]">
                    {galleryImages[selectedIndex].title}
                  </p>
                  <p className="text-sm text-[#8A8A8A]">
                    {selectedIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
