import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pedicura en Barcelona: el cuidado que tus pies merecen | Prettify",
  description:
    "Pedicura en Barcelona: SPA para pies, semipermanente, tradicional y exprés. Hidratación, exfoliación y masaje. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/pedicura-barcelona/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pedicura en Barcelona",
  provider: { "@type": "BeautySalon", name: "Prettify", url: "https://prettify.es" },
  areaServed: "Barcelona",
};

const faq = [
  {
    q: "¿Qué incluye la pedicura completa en Prettify?",
    a: "La pedicura completa incluye exfoliación, hidratación profunda y masaje de pies y piernas. Puedes elegir esmaltado tradicional o semipermanente.",
  },
  {
    q: "¿Cuánto dura la pedicura semipermanente?",
    a: "El esmalte semipermanente en pies dura entre 4 y 6 semanas con un buen cuidado posterior, más que en manos por el menor desgaste.",
  },
  {
    q: "¿Tenéis zona de pedicura en mojado?",
    a: "Sí, contamos con zona de pedicura SPA en mojado en nuestros salones. Es un tratamiento mucho más completo que la pedicura seca.",
  },
  {
    q: "¿Cuánto cuesta una pedicura en Barcelona en Prettify?",
    a: "La pedicura exprés desde 18,9€ y la completa desde 32,9€. Los precios pueden variar según el salón.",
  },
];

export default function PedicuraBarcelonaPage() {
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
        <Link href="/servicios/" className="hover:text-stone-700">Servicios</Link> / Pedicura Barcelona
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Pedicura en Barcelona: el cuidado que tus pies merecen
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              En nuestros salones de belleza en Barcelona, hemos diseñado una experiencia única para el cuidado de
              tus pies. Contamos con una exclusiva zona de <strong>pedicura en mojado</strong>, creando un auténtico
              SPA para tus pies.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Nuestra <strong>pedicura completa</strong> es mucho más que un simple tratamiento: exfoliación,
              hidratación profunda y masaje relajante para aliviar tensiones y revitalizar tus piernas y pies.
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
              src="/images/pedicuras-prettify-d29c5f00.jpg"
              alt="Pedicura en Barcelona — Prettify salones de belleza"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Pedicura SPA</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Tratamiento en mojado con zona de inmersión. Incluye exfoliación, hidratación y masaje. La experiencia más
          completa para el cuidado de tus pies. Desde <strong>32,9€</strong>.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Pedicura semipermanente</h2>
        <p className="text-stone-500 leading-relaxed mb-4">
          Completa con retirada: <strong>36,9€</strong> · Exprés con retirada: <strong>19,9€</strong>
        </p>
        <p className="text-stone-500 leading-relaxed mb-8">
          El esmalte semipermanente en pies dura entre 4 y 6 semanas. Ideal para el verano y para quienes quieren
          estar siempre perfectas.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Pedicura tradicional</h2>
        <p className="text-stone-500 leading-relaxed mb-4">
          Completa con retirada: <strong>33,9€</strong> · Exprés desde <strong>18,9€</strong>
        </p>
        <p className="text-stone-500 leading-relaxed mb-8">
          Esmaltado clásico de alta duración. La opción perfecta para quienes prefieren el esmalte convencional
          con toda la comodidad de nuestro servicio.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Pedicura exprés</h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Para cuando el tiempo apremia: lima, cutículas y esmaltado en un servicio rápido y de calidad.
          Desde <strong>16,9€</strong>.
        </p>

        <div className="bg-stone-50 p-8 mb-12">
          <p className="text-sm text-stone-600 mb-4">Otros tratamientos relacionados:</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura</Link>
            <Link href="/diseno-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Cejas</Link>
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
