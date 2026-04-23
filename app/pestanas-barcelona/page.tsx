import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifting y extensiones de pestañas en Barcelona | Prettify",
  description:
    "Pestañas en Barcelona: lifting, extensiones pelo a pelo, volumen ruso, tinte. Transforma tu mirada. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/pestanas-barcelona/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tratamiento de pestañas en Barcelona",
  provider: { "@type": "BeautySalon", name: "Prettify", url: "https://prettify.es" },
  areaServed: "Barcelona",
};

const faq = [
  {
    q: "¿Cuánto dura el lifting de pestañas?",
    a: "El lifting de pestañas dura entre 6 y 8 semanas, siguiendo el ciclo natural de las pestañas. No requiere mantenimiento diario.",
  },
  {
    q: "¿Cuál es la diferencia entre lifting y extensiones de pestañas?",
    a: "El lifting realza las pestañas naturales curvándolas y levantándolas para un efecto más abierto. Las extensiones añaden longitud y volumen con extensiones artificiales una a una.",
  },
  {
    q: "¿Cuánto cuestan las extensiones de pestañas en Barcelona?",
    a: "Las extensiones pelo a pelo desde 65€. El relleno desde 45€. El lifting con tinte desde 40€.",
  },
  {
    q: "¿Puedo maquillarme después del lifting de pestañas?",
    a: "Las primeras 24 horas no debes mojar las pestañas. Después puedes maquillarte con normalidad, aunque el lifting ya ofrece un efecto sin necesidad de rímel.",
  },
];

export default function PestanasBarcelonaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> /{" "}
        <Link href="/servicios/" className="hover:text-stone-700">Servicios</Link> / Pestañas Barcelona
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Lifting y extensiones de pestañas en Barcelona
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              Atrévete a transformar tu mirada con nuestros tratamientos exclusivos para pestañas. En nuestros
              salones de belleza en Barcelona, ofrecemos una amplia variedad de opciones para que encuentres el
              estilo que mejor se adapte a ti.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Desde resultados sutiles y naturales con el <strong>lifting de pestañas</strong>, hasta un look más
              intenso y llamativo con nuestras <strong>extensiones de pestañas pelo a pelo</strong>. Todos
              nuestros tratamientos son realizados por especialistas con productos de alta calidad.
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
              src="/images/foto-pestanas-scaled-8cf7ab9b.jpeg"
              alt="Tratamiento de pestañas en Barcelona — Prettify"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Lifting de pestañas</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          El lifting eleva, curva y define las pestañas naturales para un efecto de mayor longitud y volumen sin
          extensiones. Efecto natural y elegante que dura entre 6 y 8 semanas. <strong>Desde 40€</strong> con tinte
          incluido.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Extensiones pelo a pelo</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Añadimos extensiones una a una a cada pestaña natural para un resultado totalmente personalizado. Desde
          un look natural hasta un volumen espectacular. <strong>Desde 65€</strong>. Relleno desde{" "}
          <strong>45€</strong>.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Volumen ruso</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Técnica avanzada donde aplicamos varios vástagos ultrafinos en forma de abanico en cada pestaña
          natural. Máximo volumen con el menor peso posible. Resultado dramático y duradero.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Tinte de pestañas</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Define y oscurece las pestañas naturales con un tinte duradero. Ideal combinarlo con el lifting para
          un efecto abierto y sin necesidad de rímel. <strong>Desde 20€</strong>.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">Lifting vs extensiones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-stone-50 p-6">
            <h3 className="font-medium text-stone-900 mb-3">Lifting — elige si...</h3>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>• Prefieres un resultado natural</li>
              <li>• Tienes pestañas largas de base</li>
              <li>• No quieres mantenimiento semanal</li>
              <li>• Buscas el menor tiempo en el salón</li>
            </ul>
          </div>
          <div className="bg-stone-50 p-6">
            <h3 className="font-medium text-stone-900 mb-3">Extensiones — elige si...</h3>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>• Quieres máximo volumen y longitud</li>
              <li>• Buscas despertar ya maquillada</li>
              <li>• Te gusta un look más llamativo</li>
              <li>• No te importa el mantenimiento cada 3-4 sem.</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">Otros tratamientos relacionados:</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura</Link>
            <Link href="/pedicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Pedicura</Link>
            <Link href="/diseno-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Cejas</Link>
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {faq.map((f) => (
            <div key={f.q} className="border-b border-stone-100 pb-6">
              <h3 className="text-base font-medium text-stone-900 mb-2">{f.q}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
