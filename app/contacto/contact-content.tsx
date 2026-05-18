'use client'

import { MapPin, Phone, Clock, Instagram, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+57 301 652 2125',
    href: 'https://wa.me/573016522125',
    color: 'text-[#25D366]',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@vpee_smokeshop',
    href: 'https://instagram.com/vpee_smokeshop',
    color: 'text-pink-500',
  },
  {
    icon: MessageCircle,
    label: 'TikTok',
    value: '@vpee_smokeshop',
    href: 'https://tiktok.com/@vpee_smokeshop',
    color: 'text-[#F7F8FC]',
  },
  {
    icon: MapPin,
    label: 'Ubicacion',
    value: 'Zipaquira, Cundinamarca',
    href: 'https://goo.gl/maps/zipaquira',
    color: 'text-[#F3FF00]',
  },
]

const schedule = [
  { day: 'Compras por la página', hours: '24 horas' },
  { day: 'Lunes a Sábado', hours: '10:30 AM - 7:30 PM' },
  { day: 'Domingos', hours: '10:30 AM - 5:00 PM' },
]

export function ContactContent() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const message = formData.get('message') as string
    
    const whatsappMessage = encodeURIComponent(
      `Hola Vpee! Soy ${name}.\n\n${message}`
    )
    
    window.open(
      `https://wa.me/573016522125?text=${whatsappMessage}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <main className="min-h-screen bg-[#050B22] pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F8FC] mb-4">
            Contacta con <span className="text-[#F3FF00]">Vpee</span>
          </h1>
          <p className="text-[#D9DDE8] max-w-2xl mx-auto leading-relaxed">
            Estamos aqui para ayudarte. Visitanos en Zipaquira o contactanos 
            por WhatsApp para asesoria personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1D5A]/50 border border-[#F3FF00]/10 hover:border-[#F3FF00]/30 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full bg-[#050B22] flex items-center justify-center ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#D9DDE8]">{item.label}</p>
                      <p className="font-semibold text-[#F7F8FC]">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Schedule */}
            <div className="p-6 rounded-xl bg-[#0B1D5A]/50 border border-[#F3FF00]/10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#F3FF00]" />
                <h2 className="text-xl font-semibold text-[#F7F8FC]">Horarios de Atencion</h2>
              </div>
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-[#D9DDE8]">{item.day}</span>
                    <span className={item.hours === 'Cerrado' ? 'text-red-400' : 'text-[#F3FF00]'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-[#F3FF00]/10">
              <div className="aspect-video bg-[#0B1D5A] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#F3FF00] mx-auto mb-2" />
                  <p className="text-[#D9DDE8]">Zipaquira, Cundinamarca</p>
                  <a
                    href="https://www.google.com/maps/search/smoke+shop+zipaquira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-[#F3FF00] text-[#0B1D5A] font-semibold rounded-lg hover:bg-[#D8FF3E] transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-[#0B1D5A]/50 border border-[#F3FF00]/10">
            <h2 className="text-2xl font-bold text-[#F7F8FC] mb-2">
              Envianos un mensaje
            </h2>
            <p className="text-[#D9DDE8] mb-6">
              Completa el formulario y te responderemos por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#F7F8FC] mb-2 block">
                  Tu nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Como te llamas?"
                  className="bg-[#050B22] border-[#F3FF00]/30 text-[#F7F8FC] placeholder:text-[#D9DDE8]/50 focus:border-[#F3FF00]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#F7F8FC] mb-2 block">
                  Correo electronico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com (opcional)"
                  className="bg-[#050B22] border-[#F3FF00]/30 text-[#F7F8FC] placeholder:text-[#D9DDE8]/50 focus:border-[#F3FF00]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[#F7F8FC] mb-2 block">
                  Tu mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="En que podemos ayudarte?"
                  className="bg-[#050B22] border-[#F3FF00]/30 text-[#F7F8FC] placeholder:text-[#D9DDE8]/50 focus:border-[#F3FF00] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#F3FF00] text-[#0B1D5A] font-semibold hover:bg-[#D8FF3E] neon-glow"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar por WhatsApp
              </Button>
            </form>

            <p className="mt-6 text-xs text-center text-[#D9DDE8]/60 leading-relaxed">
              Al enviar este formulario, seras redirigido a WhatsApp para completar 
              la conversacion. Aplica nuestra{' '}
              <a href="/politica-privacidad" className="text-[#F3FF00] hover:underline">
                Politica de Privacidad
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
