'use client'

import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MapSection() {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3FF00]/10 border border-[#F3FF00]/30 mb-4">
            <MapPin className="h-4 w-4 text-[#F3FF00]" />
            <span className="text-sm font-medium text-[#F3FF00]">Visitanos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Encuentranos en <span className="text-[#F3FF00]">Zipaquira</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Visita nuestra tienda fisica y descubre toda nuestra coleccion. 
            Te esperamos con la mejor atencion.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3FF00]/10 border border-[#F3FF00]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#F3FF00]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F7F8FC] mb-1">Direccion</h3>
                  <p className="text-sm text-[#8A8A8A]">
                    Zipaquira, Cundinamarca<br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3FF00]/10 border border-[#F3FF00]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#F3FF00]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F7F8FC] mb-1">Horario</h3>
                  <p className="text-sm text-[#8A8A8A]">
                    Lunes a Sabado<br />
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3FF00]/10 border border-[#F3FF00]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#F3FF00]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F7F8FC] mb-1">Contacto</h3>
                  <p className="text-sm text-[#8A8A8A]">
                    +57 301 652 2125<br />
                    contacto@vpee.co
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <Button
              asChild
              className="w-full bg-[#F3FF00] text-[#0D0D0D] font-semibold hover:bg-[#D8FF3E] neon-glow py-6"
            >
              <a
                href="https://www.google.com/maps/dir//Vpee+smokeshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Como llegar
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#252525] bg-[#1A1A1A] aspect-[16/10]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508737.56606076!2d-74.61057791093748!3d5.020327799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40710a29f4f561%3A0xc2453d94ca0f3df!2sVpee%20smokeshop!5e0!3m2!1ses-419!2sco!4v1775924031710!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                title="Ubicacion Vpee Smokeshop en Google Maps"
              />
              
              {/* Map overlay badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#F3FF00]/30">
                <p className="text-sm font-semibold text-[#F3FF00]">Vpee Smokeshop</p>
                <p className="text-xs text-[#8A8A8A]">Zipaquira, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
