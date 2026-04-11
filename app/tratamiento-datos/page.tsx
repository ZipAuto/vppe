import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Tratamiento de Datos Personales | Vpee',
  description: 'Politica de tratamiento de datos personales de Vpee conforme a la Ley 1581 de 2012.',
}

export default function TratamientoDatosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B22] pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-8">
              Politica de Tratamiento de <span className="text-[#F3FF00]">Datos Personales</span>
            </h1>
            
            <p className="text-[#D9DDE8] leading-relaxed mb-8">
              De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013
            </p>

            <div className="space-y-8 text-[#D9DDE8]">
              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">1. Identificacion del Responsable</h2>
                <div className="bg-[#0B1D5A]/50 p-6 rounded-xl border border-[#F3FF00]/10">
                  <p className="leading-relaxed mb-2"><strong className="text-[#F3FF00]">Razon Social:</strong> Vpee</p>
                  <p className="leading-relaxed mb-2"><strong className="text-[#F3FF00]">Domicilio:</strong> Zipaquira, Cundinamarca, Colombia</p>
                  <p className="leading-relaxed mb-2"><strong className="text-[#F3FF00]">Telefono:</strong> +57 301 652 2125</p>
                  <p className="leading-relaxed"><strong className="text-[#F3FF00]">Correo:</strong> contacto@vpee.co</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">2. Marco Legal</h2>
                <p className="leading-relaxed">
                  Esta politica se desarrolla en cumplimiento de:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Constitucion Politica de Colombia, Articulo 15</li>
                  <li>Ley 1581 de 2012 - Regimen General de Proteccion de Datos Personales</li>
                  <li>Decreto 1377 de 2013 - Reglamentacion Ley 1581</li>
                  <li>Decreto 1074 de 2015 - Decreto Unico Reglamentario del Sector Comercio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">3. Definiciones</h2>
                <div className="space-y-4">
                  <p><strong className="text-[#F3FF00]">Dato Personal:</strong> Cualquier informacion vinculada a una persona natural.</p>
                  <p><strong className="text-[#F3FF00]">Titular:</strong> Persona natural cuyos datos personales sean objeto de tratamiento.</p>
                  <p><strong className="text-[#F3FF00]">Tratamiento:</strong> Cualquier operacion sobre datos personales (recoleccion, almacenamiento, uso, etc.).</p>
                  <p><strong className="text-[#F3FF00]">Responsable:</strong> Persona que decide sobre la base de datos y/o el tratamiento.</p>
                  <p><strong className="text-[#F3FF00]">Encargado:</strong> Persona que realiza el tratamiento por cuenta del responsable.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">4. Principios Aplicables</h2>
                <div className="grid gap-4">
                  {[
                    { title: 'Legalidad', desc: 'El tratamiento es una actividad reglada sujeta a la ley.' },
                    { title: 'Finalidad', desc: 'El tratamiento obedece a una finalidad legitima.' },
                    { title: 'Libertad', desc: 'El tratamiento requiere consentimiento previo.' },
                    { title: 'Veracidad', desc: 'La informacion debe ser veraz, completa y actualizada.' },
                    { title: 'Transparencia', desc: 'El titular puede conocer la existencia del tratamiento.' },
                    { title: 'Seguridad', desc: 'Se deben adoptar medidas de proteccion.' },
                    { title: 'Confidencialidad', desc: 'Obligacion de reserva sobre los datos.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#0B1D5A]/30 p-4 rounded-lg border border-[#F3FF00]/5">
                      <strong className="text-[#F3FF00]">{item.title}:</strong> {item.desc}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">5. Autorizacion</h2>
                <p className="leading-relaxed">
                  La recoleccion de datos personales requiere autorizacion previa, expresa e informada 
                  del titular, la cual puede otorgarse de forma escrita, verbal o mediante conductas 
                  inequivocas. Al proporcionar su informacion a traves de nuestro sitio web o WhatsApp, 
                  el titular autoriza el tratamiento de sus datos para las finalidades establecidas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">6. Derechos de los Titulares</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conocer, actualizar y rectificar sus datos personales</li>
                  <li>Solicitar prueba de la autorizacion otorgada</li>
                  <li>Ser informado sobre el uso dado a sus datos</li>
                  <li>Revocar la autorizacion y/o solicitar supresion</li>
                  <li>Acceder gratuitamente a sus datos personales</li>
                  <li>Presentar quejas ante la SIC por infracciones</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">7. Procedimiento para Ejercer Derechos</h2>
                <p className="leading-relaxed mb-4">
                  Para ejercer sus derechos, el titular debera presentar solicitud a traves de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Correo electronico: contacto@vpee.co</li>
                  <li>WhatsApp: +57 301 652 2125</li>
                  <li>Presencialmente en nuestra tienda de Zipaquira</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  La solicitud debe incluir: identificacion del titular, descripcion de los hechos, 
                  direccion de respuesta y documentos de soporte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">8. Medidas de Seguridad</h2>
                <p className="leading-relaxed">
                  Vpee implementa medidas tecnicas, humanas y administrativas para garantizar la 
                  seguridad de los datos personales, incluyendo: encriptacion de datos, control de 
                  acceso, firewalls, copias de seguridad y capacitacion del personal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#F7F8FC] mb-4">9. Vigencia</h2>
                <p className="leading-relaxed">
                  Esta politica entra en vigencia a partir de su publicacion y permanecera vigente 
                  mientras Vpee desarrolle sus actividades comerciales, salvo modificaciones que 
                  seran comunicadas oportunamente a los titulares.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
