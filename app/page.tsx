import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prettify | Salones de belleza en España y Andorra",
  description:
    "Prettify, tu salón de belleza especializado en manicura, pedicura, cejas y pestañas en Barcelona, Lleida, Sitges, San Sebastián, Madrid y Andorra. Reserva online.",
  alternates: {
    canonical: "https://prettify.es/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Prettify",
  url: "https://prettify.es",
  email: "info@prettify.es",
  sameAs: ["https://www.instagram.com/prettify.es"],
  areaServed: [
    "Barcelona",
    "Madrid",
    "Terrassa",
    "Mataró",
    "Lleida",
    "Sitges",
    "Donostia",
    "Andorra",
  ],
};

const services = [
  {
    title: "Manicura",
    desc: "Desde servicio exprés hasta tratamientos completos. Uñas acrílicas, de gel, nail art y decoraciones.",
    href: "/manicura-barcelona/",
    img: "/images/foto-manicura-800x600-30e9d56c.jpg",
    alt: "Manicura en Barcelona — Prettify",
  },
  {
    title: "Pedicura",
    desc: "Zona de pedicura en mojado, un auténtico SPA para pies. Incluye hidratación, exfoliación y masaje.",
    href: "/pedicura-barcelona/",
    img: "/images/pedicuras-prettify-d29c5f00.jpg",
    alt: "Pedicura en Barcelona — Prettify",
  },
  {
    title: "Cejas",
    desc: "En nuestra zona de Brow Bar ofrecemos distintos tratamientos para que luzcas tus cejas perfectas.",
    href: "/diseno-cejas-barcelona/",
    img: "/images/foto-cejas-scaled-800x600-3325fae5.jpg",
    alt: "Diseño de cejas en Barcelona — Prettify",
  },
  {
    title: "Pestañas",
    desc: "Desde lifting de pestañas para un resultado natural hasta extensiones para una mirada espectacular.",
    href: "/pestanas-barcelona/",
    img: "/images/foto-pestanas-scaled-800x600-22de7e27.jpeg",
    alt: "Tratamiento de pestañas en Barcelona — Prettify",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm tracking-[0.4em] text-rose-400 uppercase mb-4">
              it&apos;s time for nails and flowers
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-900 mb-6 leading-tight">
              Salones de belleza en España y Andorra
            </h1>
            <p className="text-lg text-stone-500 mb-8 max-w-xl leading-relaxed">
              Manicura, pedicura, cejas y pestañas. Más de 12 salones en
              Barcelona, Lleida, Sitges, Terrassa, Mataró, Donostia, Madrid y
              Andorra.
            </p>
            <Link
              href="/salones/"
              className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
            >
              RESERVA ONLINE
            </Link>
          </div>
          <div className="flex-1 w-full max-w-lg md:max-w-none">
            <Image
              src="/images/inicio2025-1000x1000-bdca0956.jpeg"
              alt="Salones de belleza Prettify en España y Andorra"
              width={600}
              height={600}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-3">
            Nuestros servicios
          </h2>
          <p className="text-stone-500">
            Expertos en belleza con las últimas técnicas y productos de alta
            calidad
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group block">
              <div className="overflow-hidden mb-4">
                <Image
                  src={s.img}
                  alt={s.alt}
                  width={400}
                  height={300}
                  className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-medium text-stone-900 mb-2 uppercase tracking-wider">
                {s.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-3 text-xs tracking-widest text-stone-900 border-b border-stone-900 pb-0.5">
                RESERVA ONLINE
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/images/foto-quien-somos-961a19cb.jpg"
              alt="Sobre Prettify — nuestros salones"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs tracking-[0.4em] text-rose-400 uppercase mb-4">
              I&apos;m not perfect but my nails are
            </p>
            <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-6">
              Sobre Prettify
            </h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              Prettify inauguró en 2020 su primer salón en Barcelona. Hoy
              contamos con más de 12 salones en España y Andorra, con un equipo
              comprometido con el bienestar y la belleza de cada clienta.
            </p>
            <p className="text-stone-400 italic mb-8">
              &ldquo;La belleza comienza en el momento que decides ser tu
              misma.&rdquo;
            </p>
            <Link
              href="/sobre-prettify/"
              className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
            >
              DESCUBRE MÁS
            </Link>
          </div>
        </div>
      </section>

      {/* Salones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-3">
            Nuestros salones
          </h2>
          <p className="text-stone-500">
            12 salones en España y Andorra para estar siempre cerca de ti
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            "Muntaner",
            "Gran de Gràcia",
            "Joan Güell",
            "Passeig Sant Joan",
            "Sagrada Família",
            "Terrassa",
            "Mataró",
            "Lleida",
            "Sitges",
            "Donostia",
            "Madrid",
            "Andorra",
          ].map((salon) => (
            <div
              key={salon}
              className="text-center py-4 px-2 border border-stone-100"
            >
              <span className="text-sm text-stone-600 tracking-wide">
                {salon}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/salones/"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
          >
            VER TODOS LOS SALONES
          </Link>
        </div>
      </section>

      {/* Franquicias CTA */}
      <section className="relative bg-stone-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/franquicias-prettify-2024-d4ce7c64.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] text-rose-300 uppercase mb-4">
            Franquicias
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            ¿Quieres abrir tu Prettify en tu ciudad?
          </h2>
          <p className="text-stone-300 mb-8 max-w-xl mx-auto">
            Únete a una franquicia sólida con el respaldo de un equipo
            experimentado que te acompañará en cada paso.
          </p>
          <Link
            href="/franquicias/"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-stone-900 bg-white hover:bg-stone-100 transition-colors"
          >
            MÁS INFORMACIÓN
          </Link>
        </div>
      </section>
    </>
  );
}
