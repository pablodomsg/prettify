import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Prettify",
  description: "Aviso legal de Prettify Franchising, S.L. Información legal sobre el uso de la web prettify.es.",
  alternates: { canonical: "https://prettify.es/aviso-legal/" },
};

export default function AvisoLegalPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> / Aviso Legal
      </nav>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-light tracking-tight text-stone-900 mb-10">Aviso legal</h1>
        <div className="prose prose-stone max-w-none text-stone-600 text-sm leading-relaxed space-y-6">
          <p>
            <strong>RESPONSABLE DE TRATAMIENTO DE DATOS PERSONALES</strong>
          </p>
          <p>
            PRETTIFY FRANCHISING, S.L, con B44948156, domicilio en C/DE CÁCERES PUERTA 2 Nº:49 28045 MADRID
            y registrada en el Registro Mercantil de Madrid. Contacta con nosotros en el correo electrónico{" "}
            <a href="mailto:info@prettify.es" className="underline">info@prettify.es</a>.
          </p>
          <p>
            La información facilitada en este sitio tiene únicamente fines informativos. Es posible que
            modifiquemos la información contenida en este Aviso Legal cuando lo estimemos conveniente, por lo
            que deberás revisar esta información de forma habitual.
          </p>
          <p>
            Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la
            observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier
            otra disposición legal que fuera de aplicación.
          </p>
          <p>
            PRETTIFY FRANCHISING, S.L como titular de la web informa a los usuarios que cumple con las
            obligaciones dispuestas en la Ley 34/2002, de Servicios de la Sociedad de la Información y del
            Comercio Electrónico (LSSI-CE) entre otra normativa vigente.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Propiedad Intelectual</h2>
          <p>
            Esta Web es propiedad de PRETTIFY FRANCHISING, S.L. Los derechos de Propiedad Intelectual y
            derechos de explotación y reproducción de esta Web, de sus páginas, pantallas, la información que
            contienen, su apariencia y diseño, así como los vínculos que se establezcan desde ella a otras
            páginas web son propiedad exclusiva de éste salvo que se especifique otra cosa.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Responsabilidad</h2>
          <p>
            PRETTIFY FRANCHISING, S.L no reconocerá la responsabilidad derivada del intercambio de información
            entre usuarios a través de su página web ni del uso que los menores puedan hacer de la misma.
          </p>
          <p>
            Toda cuestión litigiosa relacionada con la utilización del presente Sitio Web estará sometida a la
            legislación española, siendo competentes los Juzgados y Tribunales de la ciudad de Madrid.
          </p>
        </div>
      </section>
    </>
  );
}
