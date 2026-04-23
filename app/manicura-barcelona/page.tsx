import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manicura en Barcelona: cuida tus manos, resalta tu estilo | Prettify",
  description:
    "Manicura en Barcelona: tratamientos exprés, completos, semipermanente, uñas acrílicas y de gel. Nail art y decoraciones. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/manicura-barcelona/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manicura en Barcelona",
  provider: {
    "@type": "BeautySalon",
    name: "Prettify",
    url: "https://prettify.es",
  },
  areaServed: "Barcelona",
  description:
    "Tratamientos de manicura en Barcelona: exprés, semipermanente, acrílicas, gel y nail art.",
};

const faq = [
  {
    q: "¿Cuánto dura una manicura semipermanente en Prettify?",
    a: "El esmalte semipermanente dura entre 2 y 4 semanas según el cuidado posterior. Ofrecemos retirada incluida o sin retirada para quienes prefieren hacerla en casa.",
  },
  {
    q: "¿Qué diferencia hay entre manicura exprés y completa?",
    a: "La manicura exprés incluye limado, cutículas y esmaltado. La completa añade hidratación profunda y masaje de manos para un cuidado integral.",
  },
  {
    q: "¿Hacéis manicura rusa en Barcelona?",
    a: "Sí, ofrecemos manicura rusa (e-file manicure) en nuestros salones de Barcelona. Es una técnica profesional que permite un resultado más duradero.",
  },
  {
    q: "¿Cuánto cuesta una manicura en Prettify?",
    a: "La manicura exprés desde 14,9€ y la completa desde 24,9€. Los precios son orientativos y pueden variar por salón.",
  },
];

export default function ManicuraBarcelonaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        /{" "}
        <Link href="/servicios/" className="hover:text-stone-700">
          Servicios
        </Link>{" "}
        / Manicura Barcelona
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Manicura en Barcelona: cuida tus manos, resalta tu estilo
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              En nuestros salones de belleza en Barcelona, entendemos que unas
              manos bien cuidadas no solo son una carta de presentación, sino
              también una manera de expresar tu estilo personal. Hemos diseñado
              una gama de <strong>tratamientos de manicura</strong> que se
              adaptan a cada necesidad, estilo de vida y ocasión.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              Si tienes un día lleno de compromisos y necesitas un retoque
              rápido, nuestro <strong>servicio exprés de manicura</strong> es
              ideal: uñas impecables en poco tiempo, sin perder calidad ni
              detalle.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Para quienes desean lucir unas uñas más largas y sofisticadas,
              contamos con diferentes opciones de{" "}
              <strong>acrílico y gel</strong>. Escoge entre una variedad de
              formas, largos y estilos, desde diseños clásicos hasta las últimas
              tendencias en decoración y nail art.
            </p>
            <Link
              href="/salones/"
              className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors mb-8"
            >
              RESERVA ONLINE
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="/images/banner-inicio-f1bb27f0.jpg"
              alt="Manicura en Barcelona — Prettify salones de belleza"
              width={600}
              height={450}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
          Manicura exprés
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Ideal para el día a día: lima, cutículas, esmaltado y acabado
          impecable. Desde <strong>14,9€</strong>. Disponible en semipermanente
          y tradicional.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
          Manicura rusa
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Técnica profesional con fresa eléctrica para un acabado más preciso y
          duradero. Elimina el exceso de cutícula sin agua. Resultado limpio y
          perfecto.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
          Manicura semipermanente
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          El esmaltado semipermanente dura entre 2 y 4 semanas sin astillas.
          Completa con retirada desde <strong>25,9€</strong>, exprés desde{" "}
          <strong>14,9€</strong>.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
          Uñas acrílicas
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Nueva puesta desde <strong>45€</strong>. Opción XXL desde{" "}
          <strong>53€</strong>. Resistentes y de aspecto natural o artístico
          según tus preferencias.
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
          Uñas de gel
        </h2>
        <p className="text-stone-500 leading-relaxed mb-8">
          Nueva puesta desde <strong>45€</strong>. Relleno desde{" "}
          <strong>34€</strong>. Más flexibles que el acrílico, perfectas para
          uñas naturales que necesitan refuerzo.
        </p>

        {/* Related */}
        <div className="bg-stone-50 p-8 mb-12">
          <p className="text-sm text-stone-600 mb-4">
            Otros tratamientos relacionados:
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pedicura-barcelona/"
              className="text-sm text-stone-900 border-b border-stone-900"
            >
              Pedicura
            </Link>
            <Link
              href="/diseno-cejas-barcelona/"
              className="text-sm text-stone-900 border-b border-stone-900"
            >
              Cejas
            </Link>
            <Link
              href="/pestanas-barcelona/"
              className="text-sm text-stone-900 border-b border-stone-900"
            >
              Pestañas
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
          Preguntas frecuentes
        </h2>
        <div className="space-y-6">
          {faq.map((f) => (
            <div key={f.q} className="border-b border-stone-100 pb-6">
              <h3 className="text-base font-medium text-stone-900 mb-2">
                {f.q}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
