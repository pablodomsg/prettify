import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diseño de cejas cerca de mí, en Barcelona | Prettify",
  description:
    "Diseño de cejas cerca de ti en Barcelona. Brow Bar en Eixample, Gràcia, Sagrada Família y más. Laminado, tinte y depilación con hilo. Reserva online. | Prettify",
  alternates: {
    canonical: "https://prettify.es/diseno-cejas-cerca-de-mi-barcelona/",
  },
};

const barrios = [
  { name: "Eixample", salon: "Muntaner o Passeig Sant Joan" },
  { name: "Gràcia", salon: "Gran de Gràcia" },
  { name: "Sagrada Família", salon: "Sagrada Família" },
  { name: "Les Corts", salon: "Joan Güell" },
  { name: "Sant Martí", salon: "Passeig Sant Joan" },
  { name: "Sarrià-Sant Gervasi", salon: "Muntaner" },
];

export default function DisenoCejasCercaDeMiBarcelonaPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        / Diseño cejas cerca de mí Barcelona
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Diseño de cejas cerca de mí, en Barcelona
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              Si buscas &quot;
              <strong>diseño de cejas cerca de mí</strong>&quot; en Barcelona,
              en nuestros salones de belleza te ofrecemos el servicio perfecto
              para conseguir unas cejas definidas y en armonía con tu rostro.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              En nuestra exclusiva zona de{" "}
              <strong>Brow Bar en Barcelona</strong>, contamos con expertos en
              diseño de cejas que te ayudarán a resaltar tu belleza natural con
              tratamientos personalizados.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Ya sea que prefieras un diseño estructurado y preciso o un look
              más suave y natural, nuestro equipo se adapta a tus preferencias
              para lograr el resultado ideal.
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
              src="/images/prettify2-4b9b0afd.jpeg"
              alt="Diseño de cejas cerca de mí en Barcelona — Prettify Brow Bar"
              width={500}
              height={500}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
          Brow Bar por barrios en Barcelona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {barrios.map((b) => (
            <div key={b.name} className="border border-stone-100 p-6">
              <h3 className="text-base font-medium text-stone-900 mb-2">
                {b.name}
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                Salón más cercano: <strong>{b.salon}</strong>
              </p>
              <Link
                href="/salones/"
                className="text-xs tracking-widest text-stone-900 border-b border-stone-900"
              >
                VER SALÓN
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 p-8 mb-12">
          <h2 className="text-xl font-light text-stone-900 mb-4">
            Tratamientos de cejas disponibles
          </h2>
          <ul className="space-y-3 text-sm text-stone-500">
            <li>✓ Diseño de cejas con hilo desde 15€</li>
            <li>✓ Laminado de cejas + diseño desde 45€</li>
            <li>✓ Laminado + diseño + tinte desde 50€</li>
            <li>✓ Tinte de cejas desde 15€</li>
            <li>✓ Cejas perfectas para tu tipo de rostro</li>
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
