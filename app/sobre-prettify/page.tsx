import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Prettify | Salones de belleza",
  description:
    "Conoce Prettify, tu salón de belleza especializado en manicura, pedicura, cejas y pestañas en Barcelona, Lleida, Sitges, San Sebastián y Andorra.",
  alternates: { canonical: "https://prettify.es/sobre-prettify/" },
};

export default function SobrePrettifyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-700">
          Inicio
        </Link>{" "}
        / Sobre Prettify
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-12 text-center">
          Sobre Prettify
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <Image
              src="/images/foto-quien-somos-961a19cb.jpg"
              alt="Equipo Prettify — salones de belleza"
              width={600}
              height={500}
              priority
              className="w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
              Cómo nació Prettify
            </h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              Prettify inauguró en 2020 su primer salón en Barcelona con la idea
              de ofrecer servicios de manicura y pedicura a domicilio. El éxito
              fue tal que, en 2021, abrimos nuestro segundo salón de uñas en
              Barcelona, pensado para brindar un ambiente relajante y
              personalizado combinado con una decoración identificativa y
              original.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              A día de hoy Prettify cuenta con más de 12 salones y tiene
              presencia en varias ciudades: San Sebastián, Sitges, Lleida,
              Madrid, Andorra y siete en Barcelona.
            </p>
            <p className="text-stone-400 italic text-lg">
              &ldquo;La belleza comienza en el momento que decides ser tu
              misma.&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-stone-50 p-8">
            <h3 className="text-lg font-medium text-stone-900 mb-4 tracking-wide">
              Equipo comprometido
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              En Prettify, nos comprometemos con el bienestar de nuestras
              clientas y trabajadoras, creando un ambiente seguro, cómodo y
              motivador.
            </p>
          </div>
          <div className="bg-stone-50 p-8">
            <h3 className="text-lg font-medium text-stone-900 mb-4 tracking-wide">
              Servicio integral
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Ofrecemos un servicio integral, donde la belleza y el cuidado
              personal van de la mano. Manicura, pedicura, Browbar y más.
            </p>
          </div>
          <div className="bg-stone-50 p-8">
            <h3 className="text-lg font-medium text-stone-900 mb-4 tracking-wide">
              Para todos
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Nos especializamos en manicuras y pedicuras masculinas, asegurando
              que todos nuestros clientes se sientan valorados y atendidos.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-stone-500 mb-6">
            ¿Lista para vivir la experiencia Prettify?
          </p>
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
