import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Politica de Privacidad | Vpee',
  description: 'Politica de privacidad y tratamiento de datos personales de Vpee, conforme a la Ley 1581 de 2012 de Colombia.',
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B22] pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-8">
              Politica de <span className="text-[#F3FF00]">Privacidad</span>
            </h1>
            
            <p className="text-[#D9DDE8] leading-relaxed">
              Ultima actualizacion: Abril 2026
            </p>

            <div className="space-y-8 text-[#D9DDE8]">
              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">1. Responsable del Tratamiento</h2>
                <p className="leading-relaxed">
                  <strong className="text-[#F3FF00]">Vpee</strong> con domicilio en Zipaquira, Cundinamarca, Colombia, 
                  es el responsable del tratamiento de los datos personales que recopilamos de nuestros usuarios 
                  y clientes, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">2. Datos que Recopilamos</h2>
                <p className="leading-relaxed mb-4">Recopilamos los siguientes tipos de datos personales:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos de identificacion (nombre, numero de documento de identidad)</li>
                  <li>Datos de contacto (telefono, correo electronico)</li>
                  <li>Datos de ubicacion (direccion de envio)</li>
                  <li>Datos de navegacion y cookies</li>
                  <li>Historial de compras y preferencias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">3. Finalidad del Tratamiento</h2>
                <p className="leading-relaxed mb-4">Sus datos personales seran utilizados para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verificar que usted es mayor de 18 anos</li>
                  <li>Procesar sus pedidos y realizar envios</li>
                  <li>Comunicarnos con usted sobre productos y promociones</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">4. Verificacion de Edad</h2>
                <p className="leading-relaxed">
                  De acuerdo con la Ley 2354 de 2024 y la Ley 1335 de 2009, la venta de productos de vapeo 
                  esta prohibida a menores de 18 anos. Recopilamos informacion de identificacion 
                  exclusivamente para verificar que nuestros clientes son mayores de edad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">5. Derechos del Titular</h2>
                <p className="leading-relaxed mb-4">
                  Como titular de datos personales, usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conocer, actualizar y rectificar sus datos personales</li>
                  <li>Solicitar prueba de la autorizacion otorgada</li>
                  <li>Ser informado sobre el uso de sus datos</li>
                  <li>Revocar la autorizacion y/o solicitar la supresion de datos</li>
                  <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">6. Seguridad de la Informacion</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad tecnicas, administrativas y fisicas para proteger 
                  sus datos personales contra acceso no autorizado, perdida o alteracion. Utilizamos 
                  encriptacion, firewalls y controles de acceso para salvaguardar su informacion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">7. Contacto</h2>
                <p className="leading-relaxed">
                  Para ejercer sus derechos o realizar consultas sobre el tratamiento de sus datos 
                  personales, puede contactarnos a traves de:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li><strong className="text-[#F3FF00]">WhatsApp:</strong> +57 301 652 2125</li>
                  <li><strong className="text-[#F3FF00]">Email:</strong> contacto@vpee.co</li>
                  <li><strong className="text-[#F3FF00]">Direccion:</strong> Zipaquira, Cundinamarca</li>
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
