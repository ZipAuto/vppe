'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Zap,
  Heart,
  Award,
  Users,
  MessageCircle,
} from 'lucide-react'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const values = [
  {
    icon: ShieldCheck,
    title: 'Productos 100% Originales',
    description:
      'Trabajamos exclusivamente con marcas verificadas y distribuidores autorizados. Cada producto que vendemos tiene garantía de autenticidad.',
  },
  {
    icon: Zap,
    title: 'Experiencia de Compra Premium',
    description:
      'Asesoría personalizada para que encuentres exactamente lo que necesitas. No vendemos sin conocer tu perfil y preferencias.',
  },
  {
    icon: Heart,
    title: 'Comunidad Primero',
    description:
      'Somos más que una tienda: somos parte de la comunidad vape de Zipaquira. Nuestros clientes nos hacen crecer cada día.',
  },
  {
    icon: Award,
    title: 'Los Más Completos',
    description:
      'El catálogo más amplio de la región: vapes recargables, desechables, pods, líquidos, repuestos y accesorios 4:20 en un solo lugar.',
  },
]

const stats = [
  { value: '500+', label: 'Clientes satisfechos' },
  { value: '180+', label: 'Productos disponibles' },
  { value: '7', label: 'Categorías especializadas' },
  { value: '24h', label: 'Compras en línea' },
]

const storeImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCYA2886.PNG-4ucFqHNgDBjULVDKeN5NHsmKDCSgRQ.png',
    alt: 'Interior Vpee Smoke Shop Zipaquira',
    label: 'Nuestra tienda',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMXC4851.PNG-errkKFbkn06iPfYnygFYuoWLqDchGf.png',
    alt: 'Vpee Smoke Shop — Vitrina de productos',
    label: 'Vitrina premium',
  },
]

export default function NosotrosContent() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24">
        {/* grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#F3FF00 1px, transparent 1px), linear-gradient(90deg, #F3FF00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F3FF00]/6 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3FF00]/10 border border-[#F3FF00]/30 mb-6">
            <Star className="h-4 w-4 text-[#F3FF00]" />
            <span className="text-sm font-semibold text-[#F3FF00] tracking-widest uppercase">
              Smoke Shop #1 en Zipaquira
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F7F8FC] mb-6 leading-tight">
            Somos{' '}
            <span
              className="text-[#F3FF00]"
              style={{ textShadow: '0 0 40px rgba(243,255,0,0.4)' }}
            >
              Vpee
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#8A8A8A] max-w-3xl mx-auto leading-relaxed mb-10">
            El smoke shop de referencia en Zipaquira, Cundinamarca. Nacimos de la pasión
            por ofrecer la mejor experiencia en vapeo, con productos 100% originales,
            asesoría experta y el catálogo más completo de la región.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-xl hover:bg-[#D8FF3E] transition-colors shadow-lg shadow-[#F3FF00]/20"
            >
              <Zap className="h-5 w-5" />
              Ver Catálogo
            </Link>
            <a
              href="https://wa.me/573016522125?text=Hola%20Vpee!%20Quiero%20saber%20más%20sobre%20la%20tienda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#F7F8FC] font-semibold rounded-xl border border-[#333] hover:border-[#F3FF00]/40 hover:text-[#F3FF00] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-[#1A1A1A] bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl sm:text-5xl font-black text-[#F3FF00] mb-2"
                  style={{ textShadow: '0 0 20px rgba(243,255,0,0.3)' }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-[#8A8A8A] font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nuestra historia ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold text-[#F3FF00] tracking-widest uppercase bg-[#F3FF00]/10 rounded-full mb-4">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-6 leading-snug">
                Más que una tienda,{' '}
                <span className="text-[#F3FF00]">una experiencia</span>
              </h2>
              <div className="space-y-4 text-[#8A8A8A] leading-relaxed">
                <p>
                  Vpee nació en Zipaquira con una visión clara: crear el espacio
                  definitivo para quienes buscan calidad, variedad y asesoría real en
                  el mundo del vapeo y los accesorios 4:20.
                </p>
                <p>
                  Desde nuestros inicios nos diferenciamos por trabajar únicamente con
                  marcas reconocidas — GeekVape, OXVA, Waka, Relx, King Palm, RAW —
                  garantizando que cada producto que sale de nuestra tienda es
                  100% original y cuenta con respaldo de garantía.
                </p>
                <p>
                  Hoy somos el punto de referencia para cientos de clientes en Zipaquirá
                  y la región. Seguimos creciendo, ampliando nuestro catálogo cada semana
                  y manteniéndonos a la vanguardia de las últimas tendencias del mercado.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-[#1A1A1A] border border-[#252525]">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F3FF00]/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#F3FF00]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F7F8FC]">Encuéntranos en Zipaquirá</p>
                  <p className="text-sm text-[#8A8A8A]">Cundinamarca, Colombia</p>
                </div>
              </div>
            </div>

            {/* Store images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {storeImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl border border-[#252525] group ${i === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className={`relative ${i === 0 ? 'aspect-video' : 'aspect-square'} bg-[#111]`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-sm font-semibold text-[#F7F8FC] bg-[#0D0D0D]/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#F3FF00]/20">
                        {img.label}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#F3FF00]/40 group-hover:border-[#F3FF00] rounded-tr transition-colors" />
                  </div>
                </div>
              ))}

              {/* Placeholder slot for more photos */}
              <div className="relative aspect-square rounded-2xl border border-dashed border-[#333] bg-[#111] flex flex-col items-center justify-center gap-2 text-center p-4">
                <Users className="h-8 w-8 text-[#333]" />
                <p className="text-xs text-[#555]">Más fotos próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#F3FF00] tracking-widest uppercase bg-[#F3FF00]/10 rounded-full mb-4">
              Lo que nos define
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC]">
              Nuestros <span className="text-[#F3FF00]">Valores</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#1E1E1E] hover:border-[#F3FF00]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F3FF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#F3FF00]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[#F3FF00]" />
                  </div>
                  <h3 className="font-bold text-[#F7F8FC] mb-2 group-hover:text-[#F3FF00] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Flyers & Promociones ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#F3FF00] tracking-widest uppercase bg-[#F3FF00]/10 rounded-full mb-4">
              Promociones
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-3">
              Ofertas y <span className="text-[#F3FF00]">Flyers</span>
            </h2>
            <p className="text-[#8A8A8A] max-w-xl mx-auto">
              Mantente al día con nuestras promociones exclusivas. Síguenos en Instagram
              para no perderte ninguna oferta.
            </p>
          </div>

          {/* Promo grid — placeholders for flyer images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] flex flex-col items-center justify-center gap-3 group hover:border-[#F3FF00]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#F3FF00]/10 flex items-center justify-center group-hover:bg-[#F3FF00]/20 transition-colors">
                  <Star className="h-6 w-6 text-[#F3FF00]/50 group-hover:text-[#F3FF00] transition-colors" />
                </div>
                <p className="text-xs text-[#555] text-center px-4">
                  Flyer de promoción
                </p>
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#F3FF00]/0 group-hover:border-[#F3FF00]/60 rounded-tr transition-colors" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/vpee_smokeshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg shadow-pink-600/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Ver todas las promociones en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Horarios & Ubicación ── */}
      <section className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-[#1E1E1E]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F3FF00]/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#F3FF00]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F7F8FC]">Horarios</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#1E1E1E]">
                  <span className="text-[#8A8A8A]">Compras por la página</span>
                  <span className="text-[#F3FF00] font-semibold">24 horas</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#1E1E1E]">
                  <span className="text-[#8A8A8A]">Lunes a Sábado</span>
                  <span className="text-[#F3FF00] font-semibold">10:30 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#8A8A8A]">Domingos</span>
                  <span className="text-[#F3FF00] font-semibold">10:30 AM – 5:00 PM</span>
                </div>
              </div>

              <a
                href="https://wa.me/573016522125?text=Hola%20Vpee!%20Quiero%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Location */}
            <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-[#1E1E1E]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F3FF00]/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#F3FF00]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F7F8FC]">Ubicación</h2>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden border border-[#252525] bg-[#111] mb-6 flex items-center justify-center">
                <div className="text-center px-6">
                  <MapPin className="h-10 w-10 text-[#F3FF00]/40 mx-auto mb-3" />
                  <p className="text-[#8A8A8A] text-sm">Zipaquirá, Cundinamarca</p>
                  <a
                    href="https://www.google.com/maps/search/smoke+shop+zipaquira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-5 py-2 bg-[#F3FF00] text-[#0D0D0D] font-semibold rounded-lg hover:bg-[#D8FF3E] transition-colors text-sm"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                Estamos ubicados en el corazón de Zipaquirá. Pregunta por la dirección
                exacta a través de nuestro WhatsApp o redes sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F3FF00]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="text-sm font-bold text-[#F3FF00] tracking-widest uppercase mb-4">
            ¿Listo para explorar?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F7F8FC] mb-6 leading-tight">
            Visítanos o compra{' '}
            <span className="text-[#F3FF00]" style={{ textShadow: '0 0 30px rgba(243,255,0,0.4)' }}>
              en línea
            </span>
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-10 max-w-xl mx-auto">
            Más de 180 productos disponibles. Envío gratis en Zipaquirá después de $50.000.
            Solo para mayores de 18 años.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F3FF00] text-[#0D0D0D] font-bold rounded-xl hover:bg-[#D8FF3E] transition-colors shadow-xl shadow-[#F3FF00]/20 text-lg"
            >
              <Zap className="h-5 w-5" />
              Ver Catálogo Completo
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#F7F8FC] font-semibold rounded-xl border border-[#333] hover:border-[#F3FF00]/50 hover:text-[#F3FF00] transition-colors text-lg"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
