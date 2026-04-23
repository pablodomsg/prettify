import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pedicura cerca de mí, en Barcelona | Prettify",
  description:
    "Busca pedicura cerca de ti en Barcelona. Salones Prettify con SPA para pies en Eixample, Gràcia, Sagrada Família y más. Reserva online. | Prettify",
  alternates: { canonical: "https://prettify.es/pedicura-cerca-de-mi-barcelona/" },
};

const barrios = [
  { name: "Eixample", salon: "Muntaner o Passeig Sant Joan" },
  { name: "Gràcia", salon: "Gran de Gràcia" },
  { name: "Sagrada Família", salon: "Sagrada Família" },
  { name: "Les Corts", salon: "Joan Güell" },
  { name: "Nou Barris / Sant Andreu", salon: "Passeig Sant Joan" },
  { name: "Sarrià-Sant Gervasi", salon: "Muntaner" },
];

export default function PedicuraCercaDeMiBarcelonaPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">Inicio</Link> / Pedicura cerca de mí Barcelona
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
              Pedicura cerca de mí, en Barcelona
            </h1>
            <p className="text-stone-500 leading-relaxed mb-4">
              Si buscas &quot;<strong>pedicura cerca de mí</strong>&quot; en Barcelona, en nuestros salones de belleza
              te ofrecemos una experiencia única para el cuidado de tus pies. Contamos con una exclusiva zona de
              pedicura diseñada como un auténtico SPA para pies.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              Nuestro tratamiento de <strong>pedicura completa</strong> incluye exfoliación, hidratación profunda
              y un masaje relajante que alivia tensiones y revitaliza tus piernas.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Con 5 salones en Barcelona, siempre encontrarás uno cerca de ti. Reserva online en cualquier momento.
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
              src="/images/pretiffy-franquicia-unas17-d68e05e0.jpeg"
              alt="Pedicura cerca de mí en Barcelona — Prettify"
              width={500}
              height={500}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
          Pedicura por barrios en Barcelona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {barrios.map((b) => (
            <div key={b.name} className="border border-stone-100 p-6">
              <h3 className="text-base font-medium text-stone-900 mb-2">{b.name}</h3>
              <p className="text-sm text-stone-500 mb-4">
                Salón más cercano: <strong>{b.salon}</strong>
              </p>
              <Link href="/salones/" className="text-xs tracking-widest text-stone-900 border-b border-stone-900">
                VER SALÓN
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 p-8 mb-12">
          <h2 className="text-xl font-light text-stone-900 mb-4">Nuestros tratamientos de pedicura</h2>
          <ul className="space-y-3 text-sm text-stone-500">
            <li>✓ Pedicura SPA completa con exfoliación, hidratación y masaje</li>
            <li>✓ Pedicura semipermanente con duración de 4-6 semanas</li>
            <li>✓ Pedicura tradicional con todos los esmaltes disponibles</li>
            <li>✓ Pedicura exprés para cuando el tiempo apremia</li>
            <li>✓ Zona de pedicura en mojado en todos nuestros salones</li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/salones/"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
          >
            ENCUENTRA TU SALÓN MÁS CERCANO
          </Link>
        </div>
      </section>
    </>
  );
}
