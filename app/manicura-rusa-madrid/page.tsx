import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manicura rusa en Madrid: precisión y durabilidad | Prettify",
  description:
    "Manicura rusa en Madrid en el salón Prettify de C/ Ayala 152. Técnica e-file para un acabado impecable y más duradero. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/manicura-rusa-madrid/" },
};

const faq = [
  {
    q: "¿Dónde hacéis manicura rusa en Madrid?",
    a: "La manicura rusa está disponible en nuestro salón de Madrid en C/ Ayala 152. Puedes reservar online o llamar al 661 830 268.",
  },
  {
    q: "¿Cuánto dura más la manicura rusa respecto a la tradicional?",
    a: "La manicura rusa puede extender la duración del esmalte hasta 5 semanas, frente a las 2-3 semanas habituales de la manicura tradicional.",
  },
  {
    q: "¿La manicura rusa en Madrid tiene el mismo precio que en Barcelona?",
    a: "Los precios son orientativos y pueden variar según el salón. Consulta directamente con nuestro salón de Madrid.",
  },
  {
    q: "¿Es segura la manicura rusa?",
    a: "Sí, es completamente segura cuando la realiza una profesional certificada. En Prettify nuestro equipo está formado específicamente en esta técnica.",
  },
];

export default function ManicuraRusaMadridPage() {
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
        <Link href="/manicura-madrid/" className="hover:text-stone-700">Manicura Madrid</Link> / Manicura Rusa
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Manicura rusa en Madrid: precisión y durabilidad
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              La <strong>manicura rusa en Madrid</strong> ya está disponible en nuestro salón Prettify de
              C/ Ayala 152. La misma técnica profesional con fresa eléctrica (e-file manicure) que ha
              conquistado a nuestras clientas de Barcelona, ahora en Madrid.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              La manicura rusa trabaja en seco con una fresa que elimina con precisión el exceso de cutícula
              y la piel muerta alrededor de la uña. El resultado es un acabado impecable y una superficie
              perfectamente preparada para el esmaltado, que puede durar hasta 5 semanas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Si buscas la manicura más duradera y precisa en Madrid, visítanos en el barrio de Salamanca.
              Reserva online o contacta en el <strong>661 830 268</strong>.
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
              alt="Manicura rusa en Madrid — Prettify salón Ayala"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Salon info */}
        <div className="bg-stone-50 p-8 mb-12">
          <h2 className="text-xl font-medium text-stone-900 mb-4 tracking-wide uppercase">Salón Madrid — Información</h2>
          <div className="space-y-2 text-sm text-stone-500">
            <p>📍 C/ Ayala 152 · Madrid (Barrio de Salamanca)</p>
            <p>📞 661 830 268</p>
            <p>🕐 Lun – Vie: 10:00 – 19:30 · Sáb: 10:00 – 15:00</p>
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">
          Por qué la manicura rusa dura más
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          La clave está en la preparación de la uña. La manicura rusa elimina completamente la cutícula y los
          restos de piel alrededor de la uña en seco, creando una superficie limpia y deshidratada donde el
          esmalte adhiere de forma superior. Resultado: menos levantamiento, más brillo y mayor duración.
        </p>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">¿También te interesa?</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manicura-madrid/" className="text-sm text-stone-900 border-b border-stone-900">Manicura Madrid</Link>
            <Link href="/manicura-rusa-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Manicura rusa Barcelona</Link>
            <Link href="/salones/" className="text-sm text-stone-900 border-b border-stone-900">Todos los salones</Link>
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
