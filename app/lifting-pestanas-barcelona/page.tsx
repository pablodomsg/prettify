import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifting de pestañas en Barcelona: mirada abierta y natural | Prettify",
  description:
    "Lifting de pestañas en Barcelona. Eleva y curva tus pestañas naturales para un efecto abierto que dura 6-8 semanas. Con tinte incluido desde 40€. Reserva online.",
  alternates: { canonical: "https://prettify.es/lifting-pestanas-barcelona/" },
};

const faq = [
  {
    q: "¿Qué es el lifting de pestañas?",
    a: "El lifting de pestañas es un tratamiento que eleva y curva las pestañas naturales desde la raíz usando productos especiales, logrando un efecto de mayor longitud y apertura sin necesidad de extensiones.",
  },
  {
    q: "¿Cuánto dura el lifting de pestañas?",
    a: "El lifting de pestañas dura entre 6 y 8 semanas, siguiendo el ciclo natural de crecimiento de las pestañas. No requiere mantenimiento diario.",
  },
  {
    q: "¿Puedo ponerme rímel después del lifting?",
    a: "Las primeras 24 horas debes evitar mojar las pestañas. Después puedes usar rímel con normalidad, aunque muchas clientas descubren que ya no lo necesitan.",
  },
  {
    q: "¿Cuánto cuesta el lifting de pestañas en Prettify?",
    a: "Lifting + tinte de pestañas desde 40€. El tinte por separado desde 20€. Los precios pueden variar según el salón.",
  },
];

export default function LiftingPestanasBarcelonaPage() {
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
        <Link href="/pestanas-barcelona/" className="hover:text-stone-700">Pestañas Barcelona</Link> / Lifting
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Lifting de pestañas en Barcelona: mirada abierta y natural
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              El <strong>lifting de pestañas en Barcelona</strong> es el tratamiento más elegido por quienes
              buscan un resultado natural y duradero sin necesidad de extensiones. Consiste en elevar y curvar
              las pestañas naturales desde la raíz para conseguir un efecto de mayor longitud, volumen y
              apertura de la mirada.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              El tratamiento dura entre 6 y 8 semanas y puede combinarse con un tinte de pestañas para un
              resultado más intenso. Sin mantenimiento diario, sin adhesivos, sin extensiones: solo tus propias
              pestañas, elevadas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              En Prettify Barcelona lo realizamos con productos de alta calidad que respetan la salud de tus
              pestañas naturales. Nuestras especialistas te asesorarán sobre el resultado más adecuado para ti.
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
              alt="Lifting de pestañas en Barcelona — Prettify"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Beneficios del lifting de pestañas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Mirada abierta", desc: "La curvatura eleva visualmente los ojos para una mirada más abierta y expresiva." },
            { title: "Efecto natural", desc: "Son tus propias pestañas, simplemente elevadas. Sin artificios." },
            { title: "6-8 semanas", desc: "Larga duración sin mantenimiento diario ni aplicaciones frecuentes." },
            { title: "Sin dolor", desc: "Tratamiento totalmente cómodo y seguro, realizado por especialistas." },
          ].map((b) => (
            <div key={b.title} className="bg-stone-50 p-6">
              <h3 className="font-medium text-stone-900 mb-2">{b.title}</h3>
              <p className="text-sm text-stone-500">{b.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Precios lifting pestañas Barcelona</h2>
        <div className="bg-stone-50 p-8 mb-12">
          <ul className="space-y-2">
            {[
              { name: "Lifting + Tinte Pestañas", price: "40€" },
              { name: "Tinte Pestañas", price: "20€" },
              { name: "Extensiones Pelo a Pelo", price: "65€" },
              { name: "Relleno de Pestañas", price: "45€" },
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
            <Link href="/pestanas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Pestañas Barcelona</Link>
            <Link href="/laminado-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Laminado de cejas</Link>
            <Link href="/diseno-cejas-barcelona/" className="text-sm text-stone-900 border-b border-stone-900">Diseño de cejas</Link>
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
