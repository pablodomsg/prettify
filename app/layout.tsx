import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prettify | Salones de belleza en España y Andorra",
    template: "%s | Prettify",
  },
  description:
    "Prettify, tu salón de belleza especializado en manicura, pedicura, cejas y pestañas en Barcelona, Lleida, Sitges, San Sebastián, Madrid y Andorra.",
  metadataBase: new URL("https://prettify.es"),
  openGraph: {
    siteName: "Prettify",
    locale: "es_ES",
    type: "website",
  },
};

function Header() {
  return (
    <header className="bg-white border-b border-stone-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span
              className="text-2xl font-bold tracking-[0.3em] text-stone-900"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              PRETTIFY
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/servicios/"
              className="text-sm text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/salones/"
              className="text-sm text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
            >
              Salones
            </Link>
            <Link
              href="/sobre-prettify/"
              className="text-sm text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
            >
              Sobre Prettify
            </Link>
            <Link
              href="/franquicias/"
              className="text-sm text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
            >
              Franquicias
            </Link>
            <Link
              href="/contacto/"
              className="text-sm text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <Link
            href="/salones/"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm tracking-wider text-white bg-stone-900 hover:bg-stone-700 transition-colors rounded-none"
          >
            PIDE CITA
          </Link>

          {/* Mobile menu button */}
          <details className="md:hidden group">
            <summary className="list-none cursor-pointer p-2">
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-stone-900"></span>
                <span className="block w-6 h-0.5 bg-stone-900"></span>
                <span className="block w-6 h-0.5 bg-stone-900"></span>
              </div>
            </summary>
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-stone-100 shadow-lg">
              <nav className="flex flex-col px-4 py-4 gap-4">
                <Link href="/servicios/" className="text-stone-700 py-1">
                  Servicios
                </Link>
                <Link href="/salones/" className="text-stone-700 py-1">
                  Salones
                </Link>
                <Link href="/sobre-prettify/" className="text-stone-700 py-1">
                  Sobre Prettify
                </Link>
                <Link href="/franquicias/" className="text-stone-700 py-1">
                  Franquicias
                </Link>
                <Link href="/contacto/" className="text-stone-700 py-1">
                  Contacto
                </Link>
                <Link
                  href="/salones/"
                  className="inline-flex items-center justify-center px-5 py-2 text-sm tracking-wider text-white bg-stone-900 mt-2"
                >
                  PIDE CITA
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold tracking-[0.3em] block mb-4">
              PRETTIFY
            </span>
            <p className="text-stone-400 text-sm leading-relaxed">
              Salones de belleza especializados en manicura, pedicura, cejas y
              pestañas en España y Andorra.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-stone-300">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link
                  href="/manicura-barcelona/"
                  className="hover:text-white transition-colors"
                >
                  Manicura
                </Link>
              </li>
              <li>
                <Link
                  href="/pedicura-barcelona/"
                  className="hover:text-white transition-colors"
                >
                  Pedicura
                </Link>
              </li>
              <li>
                <Link
                  href="/diseno-cejas-barcelona/"
                  className="hover:text-white transition-colors"
                >
                  Diseño de cejas
                </Link>
              </li>
              <li>
                <Link
                  href="/pestanas-barcelona/"
                  className="hover:text-white transition-colors"
                >
                  Pestañas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-stone-300">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link
                  href="/sobre-prettify/"
                  className="hover:text-white transition-colors"
                >
                  Sobre Prettify
                </Link>
              </li>
              <li>
                <Link
                  href="/salones/"
                  className="hover:text-white transition-colors"
                >
                  Nuestros salones
                </Link>
              </li>
              <li>
                <Link
                  href="/franquicias/"
                  className="hover:text-white transition-colors"
                >
                  Franquicias
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto/"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-stone-300">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a
                  href="mailto:info@prettify.es"
                  className="hover:text-white transition-colors"
                >
                  info@prettify.es
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/prettify.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Prettify Franchising, S.L. Todos los
            derechos reservados.
          </p>
          <ul className="flex gap-4 text-xs text-stone-400">
            <li>
              <Link
                href="/aviso-legal/"
                className="hover:text-white transition-colors"
              >
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link
                href="/politica-privacidad/"
                className="hover:text-white transition-colors"
              >
                Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-cookies/"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                href="/terminos-y-condiciones/"
                className="hover:text-white transition-colors"
              >
                Términos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34650827112?text=Hola%20Prettify!%20Quiero%20pedir%20una%20cita%20😊"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full`}>
      <head>
        {/* GTM placeholder */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `/* GTM_ID placeholder */`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
