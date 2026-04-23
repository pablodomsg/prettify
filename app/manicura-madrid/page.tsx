import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manicura en Madrid: salón Prettify en Ayala | Prettify",
  description:
    "Manicura en Madrid con Prettify. Salón en C/ Ayala 152. Manicura semipermanente, tradicional, acrílicas, gel y nail art. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/manicura-madrid/" },
};

const faq = [
  {
    q: "¿Dónde está el salón Prettify en Madrid?",
    a: "Nuestro salón de Madrid está en C/ Ayala 152. Horario: Lunes a Viernes de 10:00 a 19:30, Sábados de 10:00 a 15:00.",
  },
  {
    q: "¿Qué servicios de manicura ofrecéis en Madrid?",
    a: "En nuestro salón de Madrid ofrecemos manicura semipermanente, tradicional, exprés, uñas acrílicas, gel, nail art y decoraciones.",
  },
  {
    q: "¿Cómo puedo reservar manicura en Madrid?",
    a: "Puedes reservar online a través de nuestra plataforma Flowww o contactar directamente con el salón por teléfono.",
  },
  {
    q: "¿Cuánto cuesta la manicura en el salón de Madrid?",
    a: "La manicura exprés desde 14,9€ y la completa desde 24,9€. Los precios son orientativos y pueden variar.",
  },
];

export default function ManicuraMadridPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Prettify Madrid",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C/ Ayala 152",
              addressLocality: "Madrid",
              addressCountry: "ES",
            },
            telephone: "661830268",
            openingHours: ["Mo-Fr 10:00-19:30", "Sa 10:00-15:00"],
          }),
        }}
      />
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
        <Link href="/salones/" className="hover:text-stone-700">Salones</Link> / Madrid
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Manicura en Madrid: salón Prettify en Ayala
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              Prettify llega a Madrid con su salón de belleza en el barrio de Salamanca. Especializado en
              <strong> manicura en Madrid</strong>, pedicura, cejas y pestañas, nuestro equipo de profesionales
              te ofrece la misma calidad y estética que en nuestros salones de Barcelona.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              Ubicados en <strong>C/ Ayala 152</strong>, en pleno corazón del barrio de Salamanca, nuestro
              salón de Madrid es el espacio perfecto para cuidarte y darte un momento de relax. Desde manicura
              exprés hasta uñas acrílicas, tenemos todo lo que necesitas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Reserva online o contacta con nosotros por teléfono en el <strong>661 830 268</strong>. Estamos
              aquí para mimarte.
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
              alt="Manicura en Madrid — Prettify salón Ayala"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Salon info */}
        <div className="bg-stone-50 p-8 mb-12">
          <h2 className="text-xl font-medium text-stone-900 mb-4 tracking-wide uppercase">Salón Madrid — Ayala</h2>
          <div className="space-y-2 text-sm text-stone-500">
            <p>📍 C/ Ayala 152 · Madrid</p>
            <p>📞 661 830 268</p>
            <p>🕐 Lun – Vie: 10:00 – 19:30 · Sáb: 10:00 – 15:00</p>
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Servicios disponibles en Madrid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Manicura semipermanente", desc: "Esmalte que dura 2-4 semanas sin astillas. Completa desde 25,9€." },
            { title: "Manicura tradicional", desc: "Esmaltado clásico con cuidado completo de cutículas. Desde 24,9€." },
            { title: "Uñas acrílicas", desc: "Construcción de uñas largas y resistentes. Nueva puesta desde 45€." },
            { title: "Uñas de gel", desc: "Alternativa más flexible al acrílico. Nueva puesta desde 45€." },
            { title: "Nail art", desc: "Decoraciones y diseños personalizados para cualquier ocasión." },
            { title: "Brow Bar", desc: "Diseño de cejas y tratamientos de pestañas en el mismo salón." },
          ].map((s) => (
            <div key={s.title} className="border border-stone-100 p-6">
              <h3 className="font-medium text-stone-900 mb-2">{s.title}</h3>
              <p className="text-sm text-stone-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 p-6 mb-12">
          <p className="text-sm text-stone-600 mb-3">¿También te interesa?</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manicura-rusa-madrid/" className="text-sm text-stone-900 border-b border-stone-900">Manicura rusa Madrid</Link>
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
