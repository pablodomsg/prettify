import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Prettify",
  description: "Términos y condiciones de uso de prettify.es y de los servicios de Prettify Franchising, S.L.",
  alternates: { canonical: "https://prettify.es/terminos-y-condiciones/" },
};

export default function TerminosYCondicionesPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> / Términos y Condiciones
      </nav>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-light tracking-tight text-stone-900 mb-10">Términos y condiciones</h1>
        <div className="text-stone-600 text-sm leading-relaxed space-y-6">
          <p>
            El acceso y uso de este sitio web implica la aceptación de los presentes términos y condiciones de
            uso. PRETTIFY FRANCHISING, S.L se reserva el derecho a modificar estos términos en cualquier momento.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Uso del sitio web</h2>
          <p>
            El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral, el orden
            público y los presentes términos. Queda prohibido utilizar el sitio web con fines ilícitos o que
            perjudiquen los derechos de terceros.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Servicios</h2>
          <p>
            Los precios indicados en la web son orientativos y pueden variar según el salón. La reserva online
            está sujeta a disponibilidad. PRETTIFY FRANCHISING, S.L se reserva el derecho a modificar los
            servicios y precios sin previo aviso.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Bonos regalo</h2>
          <p>
            Los bonos regalo son válidos por el período indicado en el momento de la compra. No son canjeables
            por dinero en efectivo. Consulta las condiciones específicas en el momento de la compra.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Propiedad intelectual</h2>
          <p>
            Todos los contenidos de este sitio web (textos, imágenes, marcas, logos y diseños) son propiedad
            de PRETTIFY FRANCHISING, S.L o de sus licenciantes. Queda prohibida su reproducción sin
            autorización expresa.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Legislación aplicable</h2>
          <p>
            Estos términos se rigen por la legislación española. Para la resolución de conflictos, las partes
            se someten a los juzgados y tribunales de Madrid.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Contacto</h2>
          <p>
            Para cualquier consulta:{" "}
            <a href="mailto:info@prettify.es" className="underline">info@prettify.es</a>
          </p>
        </div>
      </section>
    </>
  );
}
