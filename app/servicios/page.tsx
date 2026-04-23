import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestros servicios de belleza | Prettify",
  description:
    "Conoce todos los servicios de Prettify: manicura, pedicura, diseño de cejas y pestañas en Barcelona, Lleida, Sitges, San Sebastián. Precios orientativos.",
  alternates: { canonical: "https://prettify.es/servicios/" },
};

const serviceGroups = [
  {
    title: "Manicura Semipermanente",
    items: [
      { name: "Manicura Semi Completa con Retirada", price: "25,9€" },
      { name: "Manicura Semi Completa sin Retirada", price: "25,9€" },
      { name: "Manicura Semi Exprés con Retirada", price: "14,9€" },
      { name: "Manicura Semi Exprés sin Retirada", price: "14,9€" },
      { name: "Retirada Semipermanente", price: "10€" },
    ],
  },
  {
    title: "Manicura Tradicional",
    items: [
      { name: "Manicura Tradicional Completa con Retirada", price: "25,9€" },
      { name: "Manicura Tradicional Completa sin Retirada", price: "24,9€" },
      { name: "Manicura Tradicional Exprés con Retirada", price: "16,9€" },
      { name: "Manicura Tradicional Exprés sin Retirada", price: "14,9€" },
      { name: "Manicura Básica sin Esmaltar", price: "11,90€" },
    ],
  },
  {
    title: "Pedicura Semipermanente",
    items: [
      { name: "Pedicura Semi Completa con Retirada", price: "36,9€" },
      { name: "Pedicura Semi Completa sin Retirada", price: "36,9€" },
      { name: "Pedicura Semi Exprés con Retirada", price: "19,9€" },
      { name: "Pedicura Semi Exprés sin Retirada", price: "19,9€" },
      { name: "Pedicura Básica sin Esmaltar", price: "17,90€" },
      { name: "Retirada Semipermanente", price: "10€" },
    ],
  },
  {
    title: "Pedicura Tradicional",
    items: [
      { name: "Pedicura Tradicional Completa con Retirada", price: "33,9€" },
      { name: "Pedicura Tradicional Completa sin Retirada", price: "32,9€" },
      { name: "Pedicura Tradicional Exprés con Retirada", price: "20,9€" },
      { name: "Pedicura Tradicional Exprés sin Retirada", price: "18,9€" },
    ],
  },
  {
    title: "Acrílico",
    items: [
      { name: "Nueva Puesta Acrílico", price: "45€" },
      { name: "Nueva Puesta XXL Acrílico", price: "53€" },
      { name: "Relleno Acrílico", price: "34€" },
      { name: "Relleno Acri + 1 uña nueva", price: "39€" },
      { name: "Relleno Acri + 2 uñas nuevas", price: "44€" },
      { name: "Relleno Acri (más de 2 uñas nuevas)", price: "45€" },
      { name: "Retirada Acrílico", price: "18€" },
      { name: "Retirada Acri + Nueva Puesta XXL", price: "61€" },
    ],
  },
  {
    title: "Gel",
    items: [
      { name: "Nueva Puesta Gel", price: "45€" },
      { name: "Nueva Puesta XXL Gel", price: "53€" },
      { name: "Relleno Gel", price: "34€" },
      { name: "Relleno Gel + 1 uña nueva", price: "39€" },
      { name: "Relleno Gel + 2 uñas nuevas", price: "44€" },
      { name: "Relleno Gel (más de 2 uñas nuevas)", price: "45€" },
      { name: "Retirada Gel", price: "18€" },
      { name: "Retirada Gel + Nueva Puesta XXL", price: "61€" },
      { name: "Retirada y Nueva Puesta Gel", price: "53€" },
    ],
  },
  {
    title: "Brow Bar — Cejas y Pestañas",
    items: [
      { name: "Diseño Cejas con Hilo", price: "15€" },
      { name: "Diseño de Cejas + Labio", price: "20€" },
      { name: "Diseño de Cejas + Tinte", price: "20€" },
      { name: "Diseño de Cejas + Tinte + Labio", price: "25€" },
      { name: "Laminado + Diseño Cejas", price: "45€" },
      { name: "Laminado + Diseño + Tinte Cejas", price: "50€" },
      { name: "Tinte Cejas", price: "15€" },
      { name: "Depilación Labio Superior", price: "10€" },
      { name: "Lifting + Tinte Pestañas", price: "40€" },
      { name: "Extensión de Pestañas Pelo a Pelo", price: "65€" },
      { name: "Relleno de Pestañas", price: "45€" },
      { name: "Tinte Pestañas", price: "20€" },
    ],
  },
  {
    title: "Manicuras y Pedicuras para Hombre",
    items: [
      {
        name: "Pack Man + Ped Semi con Retirada",
        price: "58,9€",
      },
      { name: "Pack Man + Ped Semi sin Retirada", price: "57,9€" },
      {
        name: "Pack Man + Ped Tradicional con Retirada",
        price: "53,9€",
      },
      {
        name: "Pack Man + Ped Tradicional sin Retirada",
        price: "52,9€",
      },
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        / Servicios
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-4 text-center">
          Nuestros servicios de belleza
        </h1>
        <p className="text-center text-stone-400 text-sm mb-12">
          * Precios orientativos, pueden variar dependiendo del salón.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-lg font-medium text-stone-900 tracking-wider uppercase mb-4 border-b border-stone-100 pb-3">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between text-sm text-stone-600 py-1 border-b border-stone-50"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-stone-900 ml-4 whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/salones/"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
          >
            RESERVA ONLINE
          </Link>
        </div>
      </section>
    </>
  );
}
