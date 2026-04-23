import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uñas acrílicas en Barcelona: largas y resistentes | Prettify",
  description:
    "Uñas acrílicas en Barcelona: nueva puesta, relleno y retirada. Diseños personalizados, nail art y decoraciones. Desde 45€. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/unas-acrilicas-barcelona/" },
};

const faq = [
  {
    q: "¿Cuánto duran las uñas acrílicas?",
    a: "Las uñas acrílicas duran entre 2 y 3 semanas antes de necesitar relleno. Con un buen cuidado pueden durar hasta 4 semanas. El relleno es imprescindible para mantenerlas en perfecto estado.",
  },
  {
    q: "¿Cuánto cuestan las uñas acrílicas en Barcelona en Prettify?",
    a: "La nueva puesta de acrílico desde 45€, XXL desde 53€. El relleno desde 34€. La retirada desde 18€.",
  },
  {
    q: "¿Las uñas acrílicas dañan la uña natural?",
    a: "Cuando se aplican y retiran correctamente por una profesional, el daño es mínimo. En Prettify garantizamos técnicas seguras y una retirada profesional que protege tu uña natural.",
  },
  {
    q: "¿Puedo elegir la forma y longitud de las uñas acrílicas?",
    a: "Sí, puedes elegir entre diferentes formas (almendra, stiletto, cuadrada, ovalada) y longitudes. Nuestras especialistas te asesorarán según tu tipo de dedo y preferencias.",
  },
];

export default function UnasAcrílicasBarcelonaPage() {
  return (
    <>
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
        <Link href="/manicura-barcelona/" className="hover:text-stone-700">Manicura Barcelona</Link> / Uñas Acrílicas
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Uñas acrílicas en Barcelona: largas y resistentes
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              Las <strong>uñas acrílicas en Barcelona</strong> son la solución perfecta para quienes desean uñas
              largas, resistentes y con un acabado espectacular. En nuestros salones Prettify, trabajamos con
              materiales de alta calidad para garantizar resultados impecables y duraderos.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              El acrílico es uno de los materiales más resistentes para la construcción de uñas. Permite crear
              formas y longitudes imposibles con la uña natural, y admite cualquier tipo de decoración, desde
              diseños simples hasta nail art elaborado.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Ofrecemos nueva puesta, relleno y retirada de acrílico, siempre garantizando la salud de tu uña
              natural. Nuestras especialistas te asesorarán sobre la mejor opción para ti.
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
              src="/images/pretiffy-franquicia-unas1-1000x1000-1e19657d.jpeg"
              alt="Uñas acrílicas en Barcelona — Prettify"
              width={600}
              height={600}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Precios uñas acrílicas Barcelona</h2>
        <div className="bg-stone-50 p-8 mb-12">
          <ul className="space-y-2">
            {[
              { name: "Nueva puesta acrílico", price: "45€" },
              { name: "Nueva puesta XXL acrílico", price: "53€" },
              { name: "Relleno acrílico", price: "34€" },
              { name: "Relleno + 1 uña nueva", price: "39€" },
              { name: "Relleno + 2 uñas nuevas", price: "44€" },
              { name: "Retirada acrílico", price: "18€" },
            ].map((item) => (
              <li key={item.name} className="flex justify-between text-sm text-stone-600 py-2 border-b border-stone-100">
                <span>{item.name}</span>
                <span className="font-medium text-stone-900">{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-stone-400 mt-3">* Precios orientativos, pueden variar según el salón.</p>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Acrílico vs. Gel</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          El acrílico es más resistente y más fácil de esculpir en longitudes extremas. El gel es más flexible y
          ligero. Nuestras especialistas te ayudarán a elegir el material ideal según tu estilo de vida y el
          resultado que buscas.
        </p>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">¿También te interesa?</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manicura-rusa-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura rusa</Link>
            <Link href="/manicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura Barcelona</Link>
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
