import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hazte franquiciado Prettify | Abre tu salón de belleza",
  description:
    "¿Quieres una franquicia Prettify? Abre tu salón de manicura y pedicura con el respaldo de un equipo experimentado. La franquicia de belleza más rentable.",
  alternates: { canonical: "https://prettify.es/franquicias/" },
};

const benefits = [
  {
    title: "Aplicación y Software",
    desc: "App personalizada, disponible en iOS y Android, para una gestión eficiente y un servicio al cliente óptimo.",
  },
  {
    title: "Calidad garantizada",
    desc: "Trabajamos con las mejores marcas, con personal formado y una estructura sólida. Fortalecemos diariamente el crecimiento de tu franquicia.",
  },
  {
    title: "Diseño y Marketing",
    desc: "Identidad y visibilidad de marca unificada, impulsada por diseños únicos y colaboraciones con influencers y campañas digitales.",
  },
  {
    title: "Apoyo y Formación",
    desc: "Formación continuada y apoyo diario de calidad tanto al empleado como al franquiciador para gestionar tu espacio de forma óptima.",
  },
  {
    title: "Soporte operativo",
    desc: "Manuales operativos y formación en áreas clave como marketing, operaciones y contabilidad.",
  },
  {
    title: "Eventos anuales",
    desc: "Realizamos eventos anuales con influencers reconocidas para reforzar la marca y generar visibilidad.",
  },
];

export default function FranquiciasPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        / Franquicias
      </nav>

      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/franquicias-prettify-2024-d4ce7c64.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] text-rose-300 uppercase mb-4">
            Franquicias
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Hazte franquiciado Prettify
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Abre tu salón de Prettify: Tu camino al éxito, la opción más
            rentable. Prettify te ofrece una franquicia sólida con el respaldo
            de un equipo experimentado que te acompañará en cada paso.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-12 text-center">
          ¿Qué te ofrece la franquicia Prettify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-stone-50 p-8">
              <h3 className="text-lg font-medium text-stone-900 mb-3 tracking-wide">
                {b.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {[1, 2, 3, 6, 7, 8].map((n) => (
            <div key={n} className="aspect-square overflow-hidden">
              <Image
                src={`/images/pretiffy-franquicia-unas${n}-1000x1000-${
                  n === 1
                    ? "1e19657d"
                    : n === 2
                      ? "60558a69"
                      : n === 3
                        ? "68439b38"
                        : n === 6
                          ? "45b166df"
                          : n === 7
                            ? "89b4931b"
                            : "694583e1"
                }`}
                alt={`Uñas Prettify — nail art`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-4 text-center">
            Rellena el formulario
          </h2>
          <p className="text-stone-500 text-center mb-8">
            Si quieres más información sin compromiso, conecta con nosotros.
            Estaremos encantados de informarte.
          </p>
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
              <label className="block text-sm text-stone-600 mb-1">Email</label>
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
                Ciudad donde quieres abrir
              </label>
              <input
                type="text"
                name="ciudad"
                className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900"
              />
            </div>
            <div>
              <label className="block text-sm text-stone-600 mb-1">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows={4}
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
                </Link>
                , la{" "}
                <Link href="/politica-privacidad/" className="underline">
                  Política de Privacidad
                </Link>{" "}
                y las{" "}
                <Link href="/terminos-y-condiciones/" className="underline">
                  Condiciones
                </Link>{" "}
                de esta web.
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
            >
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
