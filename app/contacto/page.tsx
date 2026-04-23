import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | Prettify",
  description:
    "Contacta con Prettify. Email: info@prettify.es. Salones en Barcelona, Lleida, Sitges, San Sebastián, Madrid y Andorra. Reserva online disponible.",
  alternates: { canonical: "https://prettify.es/contacto/" },
};

export default function ContactoPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        / Contacto
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-12 text-center">
          Contacto
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
              Información de contacto
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@prettify.es"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  info@prettify.es
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-2">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/prettify.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  @prettify.es
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-2">
                  Salones
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  12 salones en España y Andorra. Consulta el más cercano en
                  nuestra{" "}
                  <Link href="/salones/" className="underline">
                    página de salones
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-2">
                  Reservas
                </h3>
                <Link
                  href="/salones/"
                  className="inline-flex items-center px-6 py-2 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
                >
                  PIDE CITA ONLINE
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
              Envíanos un mensaje
            </h2>
            <form
              action="mailto:info@prettify.es"
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-stone-600 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-600 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-600 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="legal"
                  required
                  className="mt-1 flex-shrink-0"
                />
                <label htmlFor="legal" className="text-xs text-stone-500">
                  He leído y acepto el{" "}
                  <Link href="/aviso-legal/" className="underline">
                    Aviso Legal
                  </Link>{" "}
                  y la{" "}
                  <Link href="/politica-privacidad/" className="underline">
                    Política de Privacidad
                  </Link>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
