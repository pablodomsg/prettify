import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microblading cejas en Barcelona: cejas perfectas semipermanentes | Prettify",
  description:
    "Microblading y diseño de cejas en Barcelona. Técnicas semipermanentes y tratamientos de Brow Bar para unas cejas perfectas. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/microblading-cejas-barcelona/" },
};

const faq = [
  {
    q: "¿Qué es el microblading de cejas?",
    a: "El microblading es una técnica de micropigmentación semipermanente que deposita pigmento en la piel trazo a trazo, imitando los pelos naturales de la ceja. El resultado dura entre 12 y 18 meses.",
  },
  {
    q: "¿Cuál es la diferencia entre microblading y laminado de cejas?",
    a: "El microblading es una técnica semipermanente que añade pigmento a la piel. El laminado es un tratamiento cosmético temporal que alisa y fija los pelos existentes. El laminado dura 6-8 semanas, el microblading hasta 18 meses.",
  },
  {
    q: "¿Hacéis diseño de cejas en todos los salones Prettify de Barcelona?",
    a: "Sí, el diseño de cejas con hilo y el laminado están disponibles en todos nuestros salones Prettify de Barcelona. Consulta la disponibilidad para técnicas semipermanentes.",
  },
  {
    q: "¿Cuánto dura el laminado de cejas en Prettify?",
    a: "El laminado de cejas dura entre 6 y 8 semanas. Incluye diseño y tinte opcional para un resultado completo desde 50€.",
  },
];

export default function MicrobladingCejasBarcelonaPage() {
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
        <Link href="/diseno-cejas-barcelona/" className="hover:text-stone-700">Cejas Barcelona</Link> / Microblading
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Microblading cejas en Barcelona: cejas perfectas semipermanentes
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              El <strong>microblading de cejas en Barcelona</strong> es una técnica de micropigmentación
              semipermanente que permite diseñar unas cejas perfectas que duran entre 12 y 18 meses. Ideal para
              personas con cejas poco pobladas, asimétricas o con zonas sin pelo.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              En nuestros salones Prettify de Barcelona también ofrecemos tratamientos de <strong>Brow Bar</strong>:
              laminado de cejas, diseño con hilo y tinte para resultados inmediatos y sin micropigmentación.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Si buscas cejas perfectas en Barcelona, nuestros especialistas te asesorarán sobre la mejor opción
              según tu tipo de ceja y el resultado que deseas conseguir.
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
              alt="Microblading y diseño de cejas en Barcelona — Prettify"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Tratamientos de cejas disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Laminado de cejas",
              duration: "Dura 6-8 semanas",
              price: "Desde 45€",
              desc: "Tratamiento cosmético que fija y alisa los pelos de la ceja en la dirección deseada. Efecto voluminoso y definido sin micropigmentación.",
            },
            {
              title: "Diseño con hilo",
              duration: "Dura 3-4 semanas",
              price: "Desde 15€",
              desc: "Depilación precisa que define la forma de la ceja. Técnica ancestral que ofrece un resultado limpio y duradero.",
            },
            {
              title: "Tinte de cejas",
              duration: "Dura 3-4 semanas",
              price: "Desde 15€",
              desc: "Define y oscurece las cejas para mayor densidad visual. Ideal combinarlo con el diseño o el laminado.",
            },
            {
              title: "Laminado + Diseño + Tinte",
              duration: "Dura 6-8 semanas",
              price: "Desde 50€",
              desc: "El tratamiento más completo: laminado para fijar, diseño para definir la forma y tinte para intensificar el color.",
            },
          ].map((t) => (
            <div key={t.title} className="bg-stone-50 p-6">
              <h3 className="font-medium text-stone-900 mb-1">{t.title}</h3>
              <p className="text-xs text-rose-400 mb-2">
                {t.duration} · {t.price}
              </p>
              <p className="text-sm text-stone-500">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">¿También te interesa?</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/laminado-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Laminado de cejas</Link>
            <Link href="/diseno-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Diseño de cejas Barcelona</Link>
            <Link href="/pestanas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Pestañas Barcelona</Link>
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
