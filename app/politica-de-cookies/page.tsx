import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Prettify",
  description: "Política de cookies de prettify.es. Información sobre el uso de cookies en nuestra web.",
  alternates: { canonical: "https://prettify.es/politica-de-cookies/" },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> / Política de Cookies
      </nav>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-light tracking-tight text-stone-900 mb-10">Política de cookies</h1>
        <div className="text-stone-600 text-sm leading-relaxed space-y-6">
          <p>
            En cumplimiento con la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI) y el Reglamento General de Protección de Datos (RGPD), PRETTIFY FRANCHISING, S.L
            te informa sobre el uso de cookies en esta web.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una
            página web. Nos permiten recordar tus preferencias y mejorar tu experiencia de navegación.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Tipos de cookies que utilizamos</h2>
          <table className="w-full border-collapse text-xs mt-4">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 font-medium text-stone-900">Tipo</th>
                <th className="text-left p-3 font-medium text-stone-900">Finalidad</th>
                <th className="text-left p-3 font-medium text-stone-900">Proveedor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="p-3">Técnicas</td>
                <td className="p-3">Funcionamiento básico de la web</td>
                <td className="p-3">Prettify</td>
              </tr>
              <tr>
                <td className="p-3">Analíticas</td>
                <td className="p-3">Medir el tráfico y comportamiento de usuarios</td>
                <td className="p-3">Google Analytics</td>
              </tr>
              <tr>
                <td className="p-3">Marketing</td>
                <td className="p-3">Mostrar anuncios personalizados</td>
                <td className="p-3">Meta Pixel / Google</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe
            una cookie. Consulta la ayuda de tu navegador para más información.
          </p>
          <p>
            También puedes optar por no participar en Google Analytics visitando{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline">
              Google Analytics Opt-out
            </a>.
          </p>
          <h2 className="text-lg font-medium text-stone-900 mt-8">Más información</h2>
          <p>
            Para cualquier consulta sobre nuestra política de cookies, puedes contactar con nosotros en{" "}
            <a href="mailto:info@prettify.es" className="underline">info@prettify.es</a>.
          </p>
        </div>
      </section>
    </>
  );
}
