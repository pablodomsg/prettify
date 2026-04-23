import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestros salones en España y Andorra | Prettify",
  description:
    "Conoce los salones Prettify: manicura, pedicura, cejas y pestañas en Barcelona (5 salones), Terrassa, Mataró, Lleida, Sitges, Donostia, Madrid y Andorra.",
  alternates: { canonical: "https://prettify.es/salones/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "BeautySalon",
      name: "Prettify Muntaner",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Muntaner, 168",
        addressLocality: "Barcelona",
        postalCode: "08036",
        addressCountry: "ES",
      },
      telephone: "932007791",
    },
    {
      "@type": "BeautySalon",
      name: "Prettify Gran de Gràcia",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carrer del Cigne, 2",
        addressLocality: "Barcelona",
        postalCode: "08012",
        addressCountry: "ES",
      },
      telephone: "933485549",
    },
  ],
};

type Salon = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  bookingUrl: string;
  waUrl?: string;
  img?: { src: string; alt: string };
};

const salones: Salon[] = [
  {
    name: "Muntaner",
    address: "Calle Muntaner, 168 · 08036 Barcelona",
    phone: "932 00 77 91",
    hours: "Lun – Vie: 10:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/2/details",
    waUrl:
      "https://wa.me/34650827112?text=Hola%20Prettify%20Muntaner!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
    img: {
      src: "/images/muntaner-prettify-1000x800-8f664cdc.jpg",
      alt: "Salón Prettify Muntaner — Barcelona",
    },
  },
  {
    name: "Gran de Gràcia",
    address: "Carrer del Cigne, 2 · 08012 Barcelona",
    phone: "933 485 549",
    hours: "Lun – Vie: 09:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/3/details",
    waUrl:
      "https://wa.me/34608201101?text=Hola%20Prettify%20Gracia!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
    img: {
      src: "/images/salon-gran-de-gracia-1000x1000-15da5014.jpg",
      alt: "Salón Prettify Gran de Gràcia — Barcelona",
    },
  },
  {
    name: "Joan Güell",
    address: "Carrer Joan Güell, 76 · 08028 Barcelona",
    phone: "932 431 818",
    hours: "Lun – Vie: 09:00 – 20:30 · Sáb: 09:00 – 16:00",
    bookingUrl: "https://fwa1.flowww.net/677252/4/details",
    waUrl:
      "https://wa.me/34618251454?text=Hola%20Prettify%20Joan%20Guell!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
    img: {
      src: "/images/joan-guell-1000x1000-1390399f.jpg",
      alt: "Salón Prettify Joan Güell — Barcelona",
    },
  },
  {
    name: "Passeig Sant Joan",
    address: "Passeig Sant Joan, 180 · 08037 Barcelona",
    phone: "644 85 14 47",
    hours: "Lun – Vie: 10:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/8/details",
    waUrl:
      "https://wa.me/34644457318?text=Hola%20Prettify%20Sant%20Joan!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
    img: {
      src: "/images/passeig-sant-joan-1000x1000-2cbb869a.jpg",
      alt: "Salón Prettify Passeig Sant Joan — Barcelona",
    },
  },
  {
    name: "Sagrada Família",
    address: "Calle Lepanto, 306 · 08025 Barcelona",
    phone: "932 506 646",
    hours: "Lun – Vie: 10:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/9/details",
    waUrl:
      "https://wa.me/34636368806?text=Hola%20Prettify%20Sagrada%20Familia!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
    img: {
      src: "/images/sagrada-familia-852x1000-f86323bd.jpeg",
      alt: "Salón Prettify Sagrada Família — Barcelona",
    },
  },
  {
    name: "Sitges",
    address: "Carrer d'Espalter, 45 · 08870 Sitges",
    phone: "614 24 65 73",
    hours: "Lun – Vie: 09:30 – 20:30 · Sáb: 09:30 – 19:00",
    bookingUrl: "https://fwa1.flowww.net/677252/10/details",
    waUrl:
      "https://wa.me/34614246573?text=Hola%20Prettify%20Sitges!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
  },
  {
    name: "Lleida",
    address: "Avinguda de Blondel, 50 · 25002 Lleida",
    phone: "604 88 35 74",
    hours: "Lun – Vie: 09:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/11/details",
    waUrl:
      "https://wa.me/34604883574?text=Hola%20Prettify%20Lleida!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
    img: {
      src: "/images/prettiffy-lleida-scaled-1000x1000-b006feac.jpg",
      alt: "Salón Prettify Lleida",
    },
  },
  {
    name: "Terrassa",
    address: "Calle Font Vella, 89 · 08221 Terrassa",
    phone: "614 147 262",
    hours: "Lun – Vie: 09:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/13/details",
    waUrl:
      "https://wa.me/34642719073?text=Hola%20Prettify%20Terrassa!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
  },
  {
    name: "Mataró",
    address: "Carrer Nou, 25 · Mataró",
    phone: "689 595 419",
    hours: "Lun – Vie: 09:00 – 20:30 · Sáb: 09:00 – 18:00",
    bookingUrl: "https://fwa1.flowww.net/677252/16/details",
    waUrl:
      "https://wa.me/34689595419?text=Hola%20Prettify%20Matar%C3%B3!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
  },
  {
    name: "Donostia – San Sebastián",
    address: "Easo Kalea, 18 · 20006 Donostia, Gipuzkoa",
    phone: "685 015 959",
    hours: "Lun – Vie: 10:00 – 19:30 · Sáb: 10:00 – 15:00",
    bookingUrl: "https://prettify.es/salones/",
    img: {
      src: "/images/san-sebastian-1-1000x1000-0c51bda0.jpg",
      alt: "Salón Prettify Donostia San Sebastián",
    },
  },
  {
    name: "Madrid",
    address: "C/ Ayala 152 · Madrid",
    phone: "661 830 268",
    hours: "Lun – Vie: 10:00 – 19:30 · Sáb: 10:00 – 15:00",
    bookingUrl: "https://prettify.es/salones/",
  },
];

const andorra: Salon = {
  name: "Andorra",
  address:
    "Avinguda Doctor Mitjavila, 37 (local 1) · AD500 Andorra la Vella, Andorra",
  phone: "+376 695 295",
  hours: "Lun – Vie: 10:00 – 19:30 · Sáb: 10:00 – 15:00",
  bookingUrl: "https://prettify.es/salones/",
  waUrl:
    "https://wa.me/376695295?text=Hola%20Prettify%20Andorra!%20Quiero%20pedir%20una%20cita%20%F0%9F%98%8A",
};

function SalonCard({ salon }: { salon: Salon }) {
  return (
    <div className="border border-stone-100 overflow-hidden">
      {salon.img && (
        <Image
          src={salon.img.src}
          alt={salon.img.alt}
          width={500}
          height={400}
          className="w-full object-cover aspect-[5/4]"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-medium text-stone-900 tracking-wider uppercase mb-4">
          {salon.name}
        </h2>
        <div className="space-y-2 text-sm text-stone-500 mb-6">
          <p>📍 {salon.address}</p>
          <p>📞 {salon.phone}</p>
          <p>🕐 {salon.hours}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={salon.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-xs tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors"
          >
            RESERVA ONLINE
          </a>
          {salon.waUrl && (
            <a
              href={salon.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 text-xs tracking-wider text-stone-900 border border-stone-900 hover:bg-stone-50 transition-colors"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SalonesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        / Salones
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-4 text-center">
          Nuestros salones en España y Andorra
        </h1>
        <p className="text-center text-stone-500 mb-16">
          Reserva en tu salón más cercano
        </p>

        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
          España
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {salones.map((salon) => (
            <SalonCard key={salon.name} salon={salon} />
          ))}
        </div>

        <h2 className="text-2xl font-light text-stone-900 mb-8 tracking-wide">
          Andorra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SalonCard salon={andorra} />
        </div>
      </section>
    </>
  );
}
