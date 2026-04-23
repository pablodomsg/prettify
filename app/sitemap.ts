import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://prettify.es";

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/servicios/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/salones/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sobre-prettify/", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/franquicias/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contacto/", priority: 0.7, changeFrequency: "yearly" as const },
    // SEO localizadas
    { url: "/manicura-barcelona/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pedicura-barcelona/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/diseno-cejas-barcelona/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pestanas-barcelona/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/manicura-cerca-de-mi/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pedicura-cerca-de-mi-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/diseno-cejas-cerca-de-mi-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    // SEO nuevas
    { url: "/manicura-rusa-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/unas-acrilicas-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/microblading-cejas-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/laminado-cejas-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/lifting-pestanas-barcelona/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/manicura-madrid/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/manicura-rusa-madrid/", priority: 0.7, changeFrequency: "monthly" as const },
    // Legales
    { url: "/aviso-legal/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politica-privacidad/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politica-de-cookies/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terminos-y-condiciones/", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
