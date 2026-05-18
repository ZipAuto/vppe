'use client'

const promoTexts = [
  'ENVIO GRATIS EN ZIPAQUIRA DESPUES DE $50.000',
  'PRODUCTOS 100% ORIGINALES',
  'SOLO MAYORES DE 18 ANOS',
  'ASESORIA PERSONALIZADA POR WHATSAPP',
  'NUEVOS LANZAMIENTOS CADA SEMANA',
  'PRECIOS DIRECTOS DE FABRICA',
  'GARANTIA EN TODOS NUESTROS PRODUCTOS',
  'MAS DE 500 CLIENTES SATISFECHOS',
]

export function PromoSlider() {
  // Duplicate texts for seamless loop
  const allTexts = [...promoTexts, ...promoTexts]

  return (
    <div className="bg-[#F3FF00] overflow-hidden py-2.5">
      <div className="animate-scroll-left flex whitespace-nowrap">
        {allTexts.map((text, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-sm font-semibold text-[#0D0D0D] tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D0D0D] mr-3" />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
