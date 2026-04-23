import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manicura cerca de mí, en Barcelona | Prettify",
  description:
    "Busca manicura cerca de ti en Barcelona. Salones Prettify en Eixample, Gràcia, Sagrada Família, Les Corts y más. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/manicura-cerca-de-mi/" },
};

const barrios = [
  { name: "Eixample", salon: "Muntaner o Passeig Sant Joan", href: "/salones/" },
  { name: "Gràcia", salon: "Gran de Gràcia", href: "/salones/" },
  { name: "Sagrada Família", salon: "Sagrada Família", href: "/salones/" },
  { name: "Les Corts", salon: "Joan Güell", href: "/salones/" },
  { name: "Sant Martí / Poblenou", salon: "Passeig Sant Joan", href: "/salones/" },
  { name: "Gràcia Alta / Vila de Gràcia", salon: "Gran de Gràcia", href: "/salones/" },
];

export default function ManicuraCercaDeMiPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> / Manicura cerca de mí
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Manicura cerca de mí, en Barcelona
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              Si estás buscando &quot;<strong>manicura cerca de mí</strong>&quot;, en nuestros salones de belleza en
              Barcelona te ofrecemos una experiencia única para que tus manos luzcan siempre perfectas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              Contamos con una amplia gama de tratamientos adaptados a tus necesidades, desde un servicio exprés
              ideal para quienes tienen poco tiempo, hasta un tratamiento más completo que mima tus manos y uñas
              en cada detalle.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Nos ubicamos en diferentes zonas de Barcelona, con espacios diseñados para tu comodidad. Si buscas
              un acabado natural o quieres atreverte con las últimas tendencias, tenemos todo lo que necesitas para
              unas uñas impecables y duraderas.
            </p>
            <Link
              href="/salones/"
              className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
            >
              RESERVA ONLINE
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="/images/pretiffy-franquicia-unas9-e1728119390692-12ce145f.png"
              alt="Manicura cerca de mí en Barcelona — Prettify"
              width={500}
              height={500}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
          Salones de manicura por barrios en Barcelona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {barrios.map((b) => (
            <div key={b.name} className="border border-stone-100 p-6">
              <h3 className="text-base font-medium text-stone-900 mb-2">{b.name}</h3>
              <p className="text-sm text-stone-500 mb-4">
                Salón más cercano: <strong>{b.salon}</strong>
              </p>
              <Link href={b.href} className="text-xs tracking-widest text-stone-900 border-b border-stone-900">
                VER SALÓN
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 p-8 mb-12">
          <h2 className="text-xl font-light text-stone-900 mb-4">¿Por qué elegir Prettify?</h2>
          <ul className="space-y-3 text-sm text-stone-500">
            <li>✓ 5 salones en Barcelona para encontrar el más cercano a ti</li>
            <li>✓ Productos de alta calidad en todos nuestros servicios</li>
            <li>✓ Manicura semipermanente, tradicional, acrílico y gel</li>
            <li>✓ Reserva online disponible en cualquier momento</li>
            <li>✓ Profesionales con formación continua</li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/salones/"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
          >
            ENCUENTRA TU SALÓN MÁS CERCANO
          </Link>
        </div>
      </section>
    </>
  );
}
