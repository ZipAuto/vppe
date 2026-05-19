'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const galleryImages = [
  {
    src: '/images/new_products/vape-premium-1.webp',
    alt: 'Box mod vaporizador de alta potencia con iluminacion LED neon amarilla',
    title: 'Mods de Alta Gama',
    category: 'Vape Recargable',
    benefits: [
      'Control total de potencia y temperatura en un solo dispositivo',
      'Nube de vapor densa y sabor intenso desde el primer uso',
      'Batería de larga duración para sesiones sin interrupciones',
      'LED integrado que eleva la experiencia visual y nocturna',
      'Compatible con múltiples tanques y resistencias del mercado',
    ],
    description:
      'Los box mods de alta gama redefinen el vapeo avanzado. Control total, construcción en metal premium y tecnología de punta en un equipo que dura años.',
  },
  {
    src: '/images/new_products/vape-premium-2.webp',
    alt: 'Pod system premium con espectacular nube de humo azul y rosa',
    title: 'Pod Systems Premium',
    category: 'Pods',
    benefits: [
      'Formato ultracompacto: cabe en cualquier bolsillo o bolso',
      'Sabor limpio e intenso gracias al coil de malla premium',
      'Compatible con sales de nicotina para satisfacción inmediata',
      'Pod transparente para monitorear el nivel de líquido en tiempo real',
      'Carga rápida USB-C — de 0 a 100% en menos de 40 minutos',
    ],
    description:
      'El pod system definitivo para quienes buscan discreción sin sacrificar potencia. Diseño ergonómico con la mejor tecnología de activación automática del mercado.',
  },
  {
    src: '/images/new_products/vape-premium-3.webp',
    alt: 'Bong de vidrio borosilicato con percolador y LED verde integrado',
    title: 'Cristalería Artesanal',
    category: 'Accesorios 4:20',
    benefits: [
      'Vidrio borosilicato resistente al calor — irrompible en uso normal',
      'Percolador interno con múltiples brazos para filtración máxima',
      'Humo fresco, suave y limpio en cada calada gracias al agua',
      'LED RGB integrado que transforma cada sesión en experiencia única',
      'Base tipo beaker para máxima estabilidad en cualquier superficie',
    ],
    description:
      'Cristalería artesanal de nivel museístico. Cada bong es una pieza de ingeniería y arte: filtración superior, humo puro y un diseño LED que impresiona a todos.',
  },
  {
    src: '/images/new_products/vape-premium-4.webp',
    alt: 'Coleccion de liquidos premium en botellas blancas y amarillo neon',
    title: 'Líquidos Premium',
    category: 'Líquidos',
    benefits: [
      'Nicotina en sal de alta pureza para satisfacción instantánea y duradera',
      'Sabores exclusivos formulados con aromas de grado alimenticio',
      'Base VG/PG balanceada para vapor denso y sabor limpio en equilibrio',
      'Compatibles con pods, tanques y cualquier dispositivo del mercado',
      'Sin diacetilo ni colorantes artificiales — pureza certificada',
    ],
    description:
      'Nuestra selección curada de líquidos premium representa lo mejor en química de vapeo. Cada botella contiene una experiencia de sabor diseñada para exigentes.',
  },
  {
    src: '/images/new_products/vape-premium-5.webp',
    alt: 'Box mod avanzado con sub-tanque sobre superficie de marmol azul con iluminacion',
    title: 'Vaporizadores Elite',
    category: 'Vape Recargable',
    benefits: [
      'Pantalla OLED de alta definición con toda la información en tiempo real',
      'Potencia regulable hasta 200W para nubes de vapor masivas',
      'Control de temperatura por material de bobina (Ni, Ti, SS, TCR)',
      'Sub-tanque de alta capacidad con relleno top-fill sin derrames',
      'Construcción en aleación de zinc con acabado metálico brushed premium',
    ],
    description:
      'Para el vapero avanzado que no acepta límites. Un box mod de categoría profesional con tecnología de chipset de última generación y construcción robusta de largo plazo.',
  },
  {
    src: '/images/new_products/vape-premium-6.webp',
    alt: 'CBD tinctura con cuentagotas y gummies sobre fondo oscuro con hojas verdes',
    title: 'CBD Wellness',
    category: 'Pods & Líquidos',
    benefits: [
      'Tintura de CBD de espectro completo con absorción sublingual rápida',
      'Gummies de CBD para dosificación precisa y conveniente todo el día',
      'Propiedades relajantes, antiinflamatorias y para mejorar el sueño',
      'Sin THC psicoactivo — bienestar natural sin efectos no deseados',
      'Formulación 100% natural con aceite de cáñamo y terpenos preservados',
    ],
    description:
      'El camino hacia el bienestar natural. Nuestra línea CBD premium combina ciencia y naturaleza para ofrecer alivio real: relajación, descanso y equilibrio diario.',
  },
]

export function PremiumGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)

  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % galleryImages.length)
  }
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const selected = selectedIndex !== null ? galleryImages[selectedIndex] : null

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
            Cada articulo representa lo mejor en tecnologia y diseno. Haz clic para explorar sus beneficios.
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
                src={`${bp}${image.src}`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Category chip */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-bold text-[#0D0D0D] bg-[#F3FF00] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {image.category}
                </span>
              </div>

              {/* Title + hint */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-base font-bold text-[#F7F8FC] mb-1">{image.title}</p>
                <p className="text-xs text-[#F3FF00]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver beneficios →
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#F3FF00]/0 group-hover:border-[#F3FF00] rounded-tr-lg transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#F3FF00]/0 group-hover:border-[#F3FF00] rounded-bl-lg transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox Modal with benefits */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => closeModal()}>
          <DialogContent className="max-w-5xl w-[95vw] bg-[#0D0D0D]/98 border-[#252525] p-0 overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>
                {selected ? selected.title : 'Imagen de galeria'}
              </DialogTitle>
            </VisuallyHidden>

            {selected && (
              <div className="grid lg:grid-cols-2 min-h-[400px]">
                {/* Image side */}
                <div className="relative">
                  <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px]">
                    <Image
                      src={`${bp}${selected.src}`}
                      alt={selected.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 95vw, 50vw"
                      priority
                    />
                    {/* Counter */}
                    <div className="absolute bottom-3 right-3 bg-[#0D0D0D]/80 text-[#8A8A8A] text-xs px-3 py-1 rounded-full border border-[#252525]">
                      {selectedIndex! + 1} / {galleryImages.length}
                    </div>
                  </div>
                  {/* Prev / Next */}
                  <Button variant="ghost" size="icon" onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0D0D0D]/80 text-[#F7F8FC] hover:bg-[#F3FF00] hover:text-[#0D0D0D]">
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0D0D0D]/80 text-[#F7F8FC] hover:bg-[#F3FF00] hover:text-[#0D0D0D]">
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Benefits side */}
                <div className="flex flex-col justify-center p-8 bg-[#111111]">
                  {/* Category badge */}
                  <span className="inline-block text-xs font-bold text-[#0D0D0D] bg-[#F3FF00] px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit">
                    {selected.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F8FC] mb-3" style={{ textShadow: '0 0 20px rgba(243,255,0,0.2)' }}>
                    {selected.title}
                  </h3>

                  <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6">
                    {selected.description}
                  </p>

                  {/* Benefits list */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-[#F3FF00] uppercase tracking-widest mb-1">
                      Beneficios Premium
                    </p>
                    {selected.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F3FF00]/15 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-[#F3FF00]" />
                        </div>
                        <p className="text-sm text-[#D0D0D0] leading-snug">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/catalogo"
                    className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-xl hover:bg-[#D8FF3E] transition-colors text-sm"
                  >
                    <Sparkles className="h-4 w-4" />
                    Ver productos premium en catálogo
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
