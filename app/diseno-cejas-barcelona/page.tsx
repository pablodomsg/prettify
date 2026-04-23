import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diseño de cejas en Barcelona: cejas perfectas para ti | Prettify",
  description:
    "Diseño de cejas en Barcelona: laminado, microblading, depilación con hilo, tinte de cejas. Brow Bar profesional. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/diseno-cejas-barcelona/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño de cejas en Barcelona",
  provider: { "@type": "BeautySalon", name: "Prettify", url: "https://prettify.es" },
  areaServed: "Barcelona",
};

const faq = [
  {
    q: "¿Qué es el laminado de cejas?",
    a: "El laminado de cejas es un tratamiento que fija los pelos en la dirección deseada, logrando unas cejas voluminosas y bien definidas. El efecto dura entre 6 y 8 semanas.",
  },
  {
    q: "¿Hacéis microblading en Barcelona?",
    a: "En nuestro Brow Bar realizamos tratamientos de diseño de cejas con hilo, laminado y tinte. El microblading es una técnica de micropigmentación disponible en centros especializados.",
  },
  {
    q: "¿Cuánto cuesta el diseño de cejas en Prettify Barcelona?",
    a: "El diseño de cejas con hilo desde 15€. Laminado + diseño + tinte desde 50€. Los precios pueden variar por salón.",
  },
  {
    q: "¿Con qué frecuencia se recomienda hacer el diseño de cejas?",
    a: "Se recomienda cada 4-6 semanas para mantener la forma. El laminado dura entre 6 y 8 semanas.",
  },
];

const services = [
  { name: "Diseño cejas con hilo", price: "15€" },
  { name: "Diseño de cejas + labio", price: "20€" },
  { name: "Diseño de cejas + tinte", price: "20€" },
  { name: "Diseño de cejas + tinte + labio", price: "25€" },
  { name: "Laminado + diseño cejas", price: "45€" },
  { name: "Laminado + diseño + tinte cejas", price: "50€" },
  { name: "Tinte cejas", price: "15€" },
  { name: "Depilación labio superior", price: "10€" },
];

export default function DisenoCejasBarcelonaPage() {
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
        <Link href="/servicios/" className="hover:text-stone-700">Servicios</Link> / Diseño Cejas Barcelona
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Diseño de cejas en Barcelona: cejas perfectas para ti
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              En nuestra exclusiva zona de <strong>Brow Bar en Barcelona</strong>, transformamos tus cejas en el
              marco perfecto para tu mirada. Sabemos que cada rostro es único, y por eso ofrecemos tratamientos
              personalizados para resaltar tu belleza natural.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Desde un <strong>diseño de cejas</strong> que armonice con tus facciones hasta retoques más sutiles,
              nuestras especialistas te ayudarán a conseguir el look que deseas. Utilizamos productos de alta
              calidad y las últimas tendencias para resultados impecables y duraderos.
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
              src="/images/foto-cejas-scaled-800x600-3325fae5.jpg"
              alt="Diseño de cejas en Barcelona — Brow Bar Prettify"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">Diseño de cejas</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Definimos la forma de tus cejas adaptándonos a tu rostro y preferencias. Utilizamos depilación con hilo
          para un resultado preciso y duradero. Una técnica ancestral que da una definición perfecta.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">Laminado de cejas</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          El laminado fija los pelos en la dirección deseada, logrando unas cejas voluminosas y perfectamente
          peinadas. El efecto dura entre 6 y 8 semanas. Disponible con diseño desde <strong>45€</strong> y con
          tinte desde <strong>50€</strong>.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">Microblading</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Técnica semipermanente que deposita pigmento trazo a trazo imitando pelos naturales. Para unas cejas
          perfectas incluso sin maquillaje, con resultados naturales y duraderos.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">Depilación con hilo</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Técnica de depilación precisa que permite definir perfectamente el arco y la forma de las cejas.
          Desde <strong>15€</strong>. También incluimos labio superior desde <strong>10€</strong>.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">Tinte de cejas</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Define y rellena visualmente tus cejas con un tinte de larga duración. Ideal para pieles claras o cejas
          poco pobladas. Desde <strong>15€</strong>.
        </p>

        {/* Price list */}
        <div className="bg-stone-50 p-8 mb-12">
          <h2 className="text-xl font-medium text-stone-900 mb-4 tracking-wide uppercase">Brow Bar — Precios</h2>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.name} className="flex justify-between text-sm text-stone-600 py-1 border-b border-stone-100">
                <span>{s.name}</span>
                <span className="font-medium text-stone-900">{s.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-stone-400 mt-3">* Precios orientativos, pueden variar por salón.</p>
        </div>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">Otros tratamientos relacionados:</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura</Link>
            <Link href="/pedicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Pedicura</Link>
            <Link href="/pestanas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Pestañas</Link>
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
