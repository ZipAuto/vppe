import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terminos y Condiciones | Vpee',
  description: 'Terminos y condiciones de uso del sitio web y servicios de Vpee Smoke Shop en Zipaquira.',
}

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B22] pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-8">
              Terminos y <span className="text-[#F3FF00]">Condiciones</span>
            </h1>
            
            <p className="text-[#D9DDE8] leading-relaxed">
              Ultima actualizacion: Abril 2026
            </p>

            <div className="space-y-8 text-[#D9DDE8]">
              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">1. Aceptacion de Terminos</h2>
                <p className="leading-relaxed">
                  Al acceder y utilizar el sitio web de Vpee (vpee.co), usted acepta estos terminos y 
                  condiciones en su totalidad. Si no esta de acuerdo con alguna parte de estos terminos, 
                  no debera usar nuestro sitio web ni nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">2. Restriccion de Edad</h2>
                <p className="leading-relaxed">
                  <strong className="text-[#F3FF00]">IMPORTANTE:</strong> Nuestros productos estan destinados 
                  exclusivamente para personas mayores de 18 anos. Al utilizar este sitio web y realizar 
                  compras, usted declara y garantiza que tiene al menos 18 anos de edad. De conformidad 
                  con la Ley 2354 de 2024 y la Ley 1335 de 2009 de Colombia, la venta de productos de vapeo 
                  a menores de edad esta estrictamente prohibida.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">3. Productos y Precios</h2>
                <p className="leading-relaxed mb-4">
                  Nos esforzamos por proporcionar informacion precisa sobre nuestros productos y precios. 
                  Sin embargo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los precios estan sujetos a cambios sin previo aviso</li>
                  <li>Las imagenes son ilustrativas y pueden variar del producto real</li>
                  <li>La disponibilidad de productos esta sujeta a existencias</li>
                  <li>Nos reservamos el derecho de limitar cantidades de compra</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">4. Proceso de Compra</h2>
                <p className="leading-relaxed mb-4">
                  Las compras se realizan a traves de WhatsApp. Al solicitar un producto:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Se confirmara disponibilidad y precio final</li>
                  <li>Se verificara su identidad y mayoria de edad</li>
                  <li>Se acordaran metodos de pago y entrega</li>
                  <li>La compra se considera confirmada una vez realizado el pago</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">5. Envios</h2>
                <p className="leading-relaxed mb-4">Politica de envios:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-[#F3FF00]">Envio gratis:</strong> En Zipaquira para compras superiores a $50.000 COP</li>
                  <li><strong className="text-[#F3FF00]">Entrega el mismo dia:</strong> Disponible en Zipaquira</li>
                  <li><strong className="text-[#F3FF00]">Envios nacionales:</strong> Costo variable segun destino y transportadora</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">6. Advertencias de Salud</h2>
                <p className="leading-relaxed">
                  Los productos de vapeo contienen nicotina, una sustancia adictiva. El uso de estos 
                  productos puede tener efectos adversos para la salud. No se recomienda su uso a 
                  mujeres embarazadas, personas con enfermedades cardiacas, hipertension o diabetes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">7. Propiedad Intelectual</h2>
                <p className="leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo textos, graficos, logotipos, imagenes 
                  y software, es propiedad de Vpee o de sus respectivos propietarios y esta protegido 
                  por las leyes de propiedad intelectual de Colombia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">8. Limitacion de Responsabilidad</h2>
                <p className="leading-relaxed">
                  Vpee no sera responsable por danos indirectos, incidentales o consecuentes derivados 
                  del uso de nuestros productos. El uso de los productos es responsabilidad exclusiva 
                  del comprador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">9. Legislacion Aplicable</h2>
                <p className="leading-relaxed">
                  Estos terminos se rigen por las leyes de la Republica de Colombia, incluyendo pero 
                  no limitado a la Ley 2354 de 2024, Ley 1335 de 2009, Ley 1581 de 2012 y el Estatuto 
                  del Consumidor (Ley 1480 de 2011).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">10. Contacto</h2>
                <p className="leading-relaxed">
                  Para cualquier pregunta sobre estos terminos y condiciones:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li><strong className="text-[#F3FF00]">WhatsApp:</strong> +57 301 652 2125</li>
                  <li><strong className="text-[#F3FF00]">Email:</strong> contacto@vpee.co</li>
                  <li><strong className="text-[#F3FF00]">Direccion:</strong> Zipaquira, Cundinamarca, Colombia</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
