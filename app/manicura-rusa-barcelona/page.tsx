import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manicura rusa en Barcelona: precisión y durabilidad | Prettify",
  description:
    "Manicura rusa en Barcelona con e-file. Técnica seca que elimina cutículas con fresa eléctrica para un acabado impecable y más duradero. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/manicura-rusa-barcelona/" },
};

const faq = [
  {
    q: "¿Qué es la manicura rusa?",
    a: "La manicura rusa, también llamada e-file manicure, es una técnica de manicura en seco que utiliza una fresa eléctrica para eliminar el exceso de cutícula con máxima precisión. El resultado es más limpio y el esmalte dura más tiempo.",
  },
  {
    q: "¿La manicura rusa duele?",
    a: "Si se realiza correctamente por una especialista, no duele. La clave está en la velocidad de la fresa y el ángulo de trabajo. Nuestras profesionales están formadas para garantizar un tratamiento seguro y cómodo.",
  },
  {
    q: "¿Cuánto dura el esmalte con manicura rusa?",
    a: "El esmalte semipermanente aplicado tras una manicura rusa puede durar entre 3 y 5 semanas, ya que la superficie de la uña queda perfectamente preparada.",
  },
  {
    q: "¿Cuánto cuesta la manicura rusa en Prettify Barcelona?",
    a: "Consulta el precio directamente en el salón ya que puede variar. La manicura semipermanente completa está desde 25,9€.",
  },
];

export default function ManicuraRusaBarcelonaPage() {
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
        <Link href="/manicura-barcelona/" className="hover:text-stone-700">Manicura Barcelona</Link> / Manicura Rusa
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Manicura rusa en Barcelona: precisión y durabilidad
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              La <strong>manicura rusa en Barcelona</strong> (también conocida como e-file manicure) es la
              técnica profesional que mayor durabilidad ofrece. A diferencia de la manicura tradicional en húmedo,
              la manicura rusa trabaja en seco con una fresa eléctrica especializada.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              La fresa elimina con precisión el exceso de cutícula y la piel muerta alrededor de la uña, preparando
              una superficie perfecta para el esmaltado. El resultado es más limpio, más duradero y con un acabado
              impecable que puede durar entre 3 y 5 semanas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              En nuestros salones Prettify de Barcelona contamos con especialistas formadas en esta técnica. Si
              buscas la manicura más precisa y duradera de la ciudad, esta es tu opción.
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
              src="/images/foto-manicura-800x600-30e9d56c.jpg"
              alt="Manicura rusa en Barcelona — Prettify"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">
          Ventajas de la manicura rusa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Mayor duración", desc: "El esmalte dura hasta 5 semanas gracias a la preparación perfecta de la uña." },
            { title: "Acabado impecable", desc: "Sin restos de cutícula ni piel alrededor de la uña. Resultado limpio y profesional." },
            { title: "Menos levantemiento", desc: "Al preparar la uña en seco, el esmalte adhiere mejor y se levanta menos." },
          ].map((v) => (
            <div key={v.title} className="bg-stone-50 p-6">
              <h3 className="font-medium text-stone-900 mb-2">{v.title}</h3>
              <p className="text-sm text-stone-500">{v.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">
          Manicura rusa vs. manicura tradicional
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          La manicura tradicional utiliza agua y empujador para mover las cutículas. La manicura rusa trabaja con
          una fresa eléctrica que elimina el tejido muerto con precisión milimétrica. Esto resulta en un acabado más
          perfecto y una adherencia del esmalte superior.
        </p>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">¿También te interesa?</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/unas-acrilicas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Uñas acrílicas Barcelona</Link>
            <Link href="/manicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura Barcelona</Link>
            <Link href="/pedicura-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Pedicura Barcelona</Link>
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
