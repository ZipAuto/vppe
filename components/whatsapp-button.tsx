'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { X, MessageCircle } from 'lucide-react'

const quickMessages = [
  {
    label: 'Consultar producto',
    message: 'Hola Vpee! Quiero informacion sobre un producto.',
  },
  {
    label: 'Estado de mi pedido',
    message: 'Hola Vpee! Quiero consultar el estado de mi pedido.',
  },
  {
    label: 'Asesoria personalizada',
    message: 'Hola Vpee! Necesito asesoria para elegir un vaporizador.',
  },
]

function waLink(message: string) {
  return `https://wa.me/573016522125?text=${encodeURIComponent(message)}`
}

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Messages Panel */}
      <div
        className={cn(
          'absolute bottom-16 right-0 w-72 rounded-2xl overflow-hidden',
          'bg-[#1A1A1A] border border-[#333333] shadow-2xl',
          'transition-all duration-300 transform origin-bottom-right',
          isExpanded
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="bg-[#25D366] p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Vpee Smoke Shop</h3>
              <p className="text-xs text-white/80">Normalmente responde en minutos</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-sm text-[#8A8A8A] mb-4">
            Hola! Como podemos ayudarte hoy?
          </p>

          <div className="space-y-2">
            {quickMessages.map((item) => (
              <a
                key={item.label}
                href={waLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsExpanded(false)}
                className="block w-full text-left px-4 py-3 rounded-xl bg-[#0D0D0D] border border-[#2A2A2A] text-[#F7F8FC] text-sm hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={waLink('Hola Vpee!')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsExpanded(false)}
            className="mt-4 w-full py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#22c55e] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar conversacion
          </a>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'w-14 h-14 rounded-full shadow-lg flex items-center justify-center',
          'transition-all duration-300 hover:scale-110',
          isExpanded
            ? 'bg-[#1A1A1A] border border-[#333333]'
            : 'bg-[#25D366]'
        )}
        aria-label={isExpanded ? 'Cerrar chat' : 'Abrir WhatsApp'}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-[#F7F8FC]" />
        ) : (
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>

      {/* Pulse animation when closed */}
      {!isExpanded && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
      )}
    </div>
  )
}
