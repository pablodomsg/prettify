import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laminado de cejas en Barcelona: cejas voluminosas y definidas | Prettify",
  description:
    "Laminado de cejas en Barcelona. Fija y alisa tus cejas para un resultado voluminoso y definido que dura 6-8 semanas. Brow Bar Prettify. Reserva online.",
  alternates: { canonical: "https://prettify.es/laminado-cejas-barcelona/" },
};

const faq = [
  {
    q: "¿Qué es el laminado de cejas?",
    a: "El laminado de cejas es un tratamiento que utiliza productos químicos suaves para alisar y fijar los pelos de la ceja en la dirección deseada. El resultado es unas cejas más voluminosas, definidas y perfectamente peinadas.",
  },
  {
    q: "¿Cuánto dura el laminado de cejas?",
    a: "El laminado de cejas dura entre 6 y 8 semanas, dependiendo del cuidado posterior y el tipo de pelo.",
  },
  {
    q: "¿El laminado de cejas daña el pelo?",
    a: "Realizado correctamente por una profesional, el laminado no daña el pelo. Se recomienda aplicar un aceite nutritivo a diario para mantener la hidratación de los pelos.",
  },
  {
    q: "¿Cuánto cuesta el laminado de cejas en Prettify Barcelona?",
    a: "Laminado + diseño desde 45€. Laminado + diseño + tinte desde 50€. Los precios pueden variar según el salón.",
  },
];

export default function LaminadoCejasBarcelonaPage() {
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
        <Link href="/diseno-cejas-barcelona/" className="hover:text-stone-700">Cejas Barcelona</Link> / Laminado
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Laminado de cejas en Barcelona: cejas voluminosas y definidas
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              El <strong>laminado de cejas en Barcelona</strong> es el tratamiento más demandado en nuestro Brow
              Bar. Consiste en alisar y fijar los pelos de la ceja en la dirección deseada mediante productos
              de queratina, logrando unas cejas voluminosas y perfectamente definidas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              El resultado es inmediato y dura entre 6 y 8 semanas. Ideal para cejas gruesas con pelos
              revoltosos, para dar amplitud a cejas finas o simplemente para lograr el efecto &ldquo;cejas
              peinadas&rdquo; tan de moda.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              En Prettify Barcelona lo combinamos con diseño con hilo y tinte para un resultado completo y
              personalizado. Reserva tu cita en el salón más cercano a ti.
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
              src="/images/foto-cejas-scaled-c23ce1a6.jpg"
              alt="Laminado de cejas en Barcelona — Prettify Brow Bar"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">El proceso del laminado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { step: "1", title: "Limpieza", desc: "Limpiamos la zona de cejas para eliminar restos de maquillaje y aceites." },
            { step: "2", title: "Aplicación", desc: "Aplicamos el producto de laminado y peinamos los pelos en la dirección deseada." },
            { step: "3", title: "Fijación", desc: "El producto actúa durante unos minutos. Opcional: tinte y diseño final." },
          ].map((s) => (
            <div key={s.step} className="bg-stone-50 p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-3 text-sm font-medium">
                {s.step}
              </div>
              <h3 className="font-medium text-stone-900 mb-2">{s.title}</h3>
              <p className="text-sm text-stone-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Precios laminado cejas Barcelona</h2>
        <div className="bg-stone-50 p-8 mb-12">
          <ul className="space-y-2">
            {[
              { name: "Laminado + Diseño cejas", price: "45€" },
              { name: "Laminado + Diseño + Tinte cejas", price: "50€" },
              { name: "Tinte cejas (sin laminado)", price: "15€" },
              { name: "Diseño cejas con hilo", price: "15€" },
            ].map((item) => (
              <li key={item.name} className="flex justify-between text-sm text-stone-600 py-2 border-b border-stone-100">
                <span>{item.name}</span>
                <span className="font-medium text-stone-900">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">¿También te interesa?</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/microblading-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Microblading Barcelona</Link>
            <Link href="/diseno-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Diseño de cejas</Link>
            <Link href="/lifting-pestanas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Lifting de pestañas</Link>
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
