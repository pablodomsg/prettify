import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Prettify",
  description: "Política de privacidad de Prettify Franchising, S.L. Información sobre el tratamiento de tus datos personales.",
  alternates: { canonical: "https://prettify.es/politica-privacidad/" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> / Política de Privacidad
      </nav>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-light tracking-tight text-stone-900 mb-10">Política de privacidad</h1>
        <div className="text-stone-600 text-sm leading-relaxed space-y-6">
          <p>
            <strong>RESPONSABLE DE TRATAMIENTO DE DATOS PERSONALES</strong>
          </p>
          <p>
            PRETTIFY FRANCHISING, S.L, con B44948156, domicilio en C/DE CÁCERES PUERTA 2 Nº:49 28045 MADRID.
            Contacta con nosotros en{" "}
            <a href="mailto:info@prettify.es" className="underline">info@prettify.es</a>.
          </p>
          <p>
            De conformidad con el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre, en
            materia de protección de datos personales, PRETTIFY FRANCHISING, S.L te informa que los datos de
            carácter personal que nos facilitas serán añadidos a nuestro fichero de clientes.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Recopilación de datos personales</h2>
          <p>
            Registramos y almacenamos tus datos personales cuando contactas con nosotros a través de email,
            teléfono y formulario de contacto. Los datos recogidos son: nombre e email.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Tus derechos</h2>
          <p>Tienes derecho a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Acceso: conocer qué datos tenemos sobre ti.</li>
            <li>Rectificación: corregir datos inexactos.</li>
            <li>Cancelación: solicitar la supresión de tus datos.</li>
            <li>Oposición: oponerte al tratamiento de tus datos.</li>
            <li>Limitación: solicitar la limitación del tratamiento.</li>
            <li>Portabilidad: recibir tus datos en formato estructurado.</li>
          </ul>
          <p>
            Puedes ejercer estos derechos enviando un email a{" "}
            <a href="mailto:info@prettify.es" className="underline">info@prettify.es</a> indicando en el
            asunto &ldquo;PROTECCIÓN DE DATOS&rdquo;.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Conservación de datos</h2>
          <p>
            Solo almacenamos tu información personal en la medida en que la necesitamos a fin de poder
            utilizarla según la finalidad por la que fue recabada. Mantendremos tu información mientras exista
            una relación contractual o no ejerzas el derecho de supresión.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Legislación aplicable</h2>
          <p>
            Nuestra política de privacidad se ha diseñado de acuerdo con el RGPD (UE) 2016/679 y la Ley
            Orgánica 3/2018. Las controversias serán sometidas a los tribunales de Madrid.
          </p>
        </div>
      </section>
    </>
  );
}
