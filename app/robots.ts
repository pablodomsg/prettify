import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/acceder/",
          "/mi-cuenta/",
          "/favoritos/",
          "/finalizar-compra/",
          "/cursos-personal/",
          "/franquiciado/",
          "/landing/",
          "/pide-cita/",
          "/api/",
        ],
      },
    ],
    sitemap: "https://prettify.es/sitemap.xml",
  };
}
