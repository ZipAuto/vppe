'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, AlertTriangle } from 'lucide-react'

const navigation = {
  categories: [
    { name: 'Vape Recargable', href: '/categoria/vape-recargable' },
    { name: 'Vape Desechable', href: '/categoria/desechables' },
    { name: 'Vape Alternativos', href: '/categoria/vape-alternativos' },
    { name: 'Pods', href: '/categoria/pods' },
    { name: 'Líquidos', href: '/categoria/liquidos' },
    { name: 'Repuestos', href: '/categoria/repuestos' },
    { name: 'Accesorios 4:20', href: '/categoria/accesorios' },
  ],
  company: [
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Catalogo', href: '/catalogo' },
  ],
  legal: [
    { name: 'Politica de Privacidad', href: '/politica-privacidad' },
    { name: 'Terminos y Condiciones', href: '/terminos' },
    { name: 'Tratamiento de Datos', href: '/tratamiento-datos' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/vpee_smokeshop',
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@vpee_smokeshop',
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/573016522125',
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#F3FF00]/10">
      {/* Health Warning Banner */}
      <div className="bg-[#0D0D0D] border-b border-[#252525]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3 text-sm">
            <AlertTriangle className="h-5 w-5 text-[#F3FF00] flex-shrink-0 mt-0.5" />
            <p className="text-[#8A8A8A] leading-relaxed">
              <span className="font-semibold text-[#F3FF00]">Advertencia:</span> Este producto contiene 
              nicotina, una sustancia adictiva. Prohibida su venta a menores de 18 anos. 
              De acuerdo con la Ley 2354 de 2024 de Colombia, los cigarrillos electronicos 
              estan sujetos a las medidas de control del tabaco.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEFV9991.PNG-y1e9m6BMvT59OVBfZoTtx7HnvIT0mn.png"
                alt="Vpee Logo"
                width={100}
                height={50}
                className="h-10 w-auto invert"
              />
            </Link>
            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6 max-w-sm">
              El smoke shop de referencia en Zipaquira. Experiencia, variedad y 
              estilo para el publico adulto contemporaneo.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://wa.me/573016522125"
                className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#F3FF00] transition-colors"
              >
                <Phone className="h-4 w-4" />
                +57 301 652 2125
              </a>
              <a
                href="mailto:contacto@vpee.co"
                className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#F3FF00] transition-colors"
              >
                <Mail className="h-4 w-4" />
                contacto@vpee.co
              </a>
              <p className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                <MapPin className="h-4 w-4" />
                Zipaquira, Cundinamarca
              </p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#F7F8FC] mb-4">Categorias</h3>
            <ul className="space-y-2">
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A8A] hover:text-[#F3FF00] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[#F7F8FC] mb-4">Empresa</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A8A] hover:text-[#F3FF00] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#F7F8FC] mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8A8A8A] hover:text-[#F3FF00] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#252525]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#8A8A8A]">
              &copy; {new Date().getFullYear()} Vpee. Todos los derechos reservados.{' '}
              <span className="text-[#F3FF00]/60">By QueryOps</span>
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A8A8A] hover:text-[#F3FF00] transition-colors"
                    aria-label={item.name}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>

            {/* Age Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#F3FF00]/30">
              <span className="text-xs font-bold text-[#F3FF00]">+18</span>
              <span className="text-xs text-[#8A8A8A]">Solo adultos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
