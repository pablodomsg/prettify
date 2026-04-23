# INSTRUCTIONS — Reconstrucción web Prettify

## Contexto

Estás en `C:\Users\Pablo\Desktop\Prettifyweb`. Esta carpeta contiene el contexto completo extraído de prettify.es con un scraper personalizado. Tu misión es construir una web Next.js 14 moderna, optimizada para SEO y rendimiento, que reemplace el WordPress actual.

## Estructura de archivos disponibles

```
Prettifyweb/
├── README.md                  → índice general
├── site-context.md            → info del negocio (leer primero)
├── sitemap.md                 → árbol de páginas
├── pages/                     → contenido por página (leer según necesites)
│   ├── home.md
│   ├── servicios.md
│   ├── salones.md
│   ├── sobre-prettify.md
│   ├── franquicias.md
│   ├── contacto.md
│   ├── manicura-barcelona.md
│   ├── pedicura-barcelona.md
│   ├── diseno-cejas-barcelona.md
│   ├── pestanas-barcelona.md
│   ├── manicura-cerca-de-mi.md
│   ├── pedicura-cerca-de-mi-barcelona.md
│   ├── diseno-cejas-cerca-de-mi-barcelona.md
│   ├── aviso-legal.md
│   ├── politica-privacidad.md
│   ├── politica-de-cookies.md
│   └── terminos-y-condiciones.md
├── public/
│   └── images/                → imágenes descargadas listas para usar
│       ├── foto-manicura-800x600-30e9d56c.jpg
│       ├── foto-pestanas-scaled-8cf7ab9b.jpg
│       ├── foto-pestanas-scaled-800x600-22de7e27.jpg
│       ├── foto-quien-somos-961a19cb.jpg
│       ├── franquicias-prettify-2024-d4ce7c64.jpg
│       ├── muntaner-prettify-1000x1000-8f664cdc.jpg
│       ├── passeig-sant-joan-1000x1000-2cbb869a.jpg
│       ├── pedicuras-prettify-d29c5f00.jpg
│       ├── pretiffy-franquicia-unas1..18 (galería de uñas para franquicias)
│       ├── prettiffy2-4b9b0afd.jpg
│       ├── prettiffy-lleida-scaled-1000x1000-b006feac.jpg
│       ├── prettiffy-paseo-san-juan-scaled-800x1000-3fb8667.jpg
│       ├── san-sebastian-1-1000x1000-0c51bda0.jpg
│       ├── banner-inicio-f1bb27f0.jpg
│       ├── bono-prettify-fcbb23aa.jpg
│       ├── cejas-pestanas-50x140-351507xx.jpg
│       ├── inicio2025-1000-bdca09xx.jpg
│       ├── phone-icon-e1728140502831-4d2b2fcf.png
│       ├── ubicacion-icon-e1728140548416-0e980afd.png
│       ├── tarjetas-pago-web-2448ee8c.png
│       ├── ajustes-cookies-1d58bac6.png
│       ├── android-300x89-cfffb061.png
│       └── apple-300x89-b794804d.png
└── technical/
    ├── images-manifest.json   → mapping completo URL original → ruta local
    ├── integrations.json      → integraciones detectadas
    └── metadata.json          → SEO técnico por página
```

**Regla importante:** No leas todos los archivos de golpe. Lee `site-context.md` y `home.md` primero, luego consulta el resto según lo necesites.

---

## El negocio

**Prettify** es una franquicia de salones de belleza con presencia en España y Andorra.

- **Web actual:** https://prettify.es
- **Email:** info@prettify.es
- **Instagram:** https://www.instagram.com/prettify.es
- **Servicios:** Manicura, Pedicura, Diseño de cejas, Tratamientos de pestañas
- **Modelo:** Franquicia — tienen página de captación de franquiciados
- **Booking:** Flowww (plataforma externa — botones "Pide cita" redirigen ahí)
- **Tienda:** WooCommerce — bonos regalo

### 12 salones
- **Barcelona (5):** Muntaner, Gran de Gràcia, Joan Güell, Passeig Sant Joan, Sagrada Família
- **Resto España:** Terrassa, Mataró, Lleida, Sitges, Donostia-San Sebastián, Madrid
- **Andorra**

---

## Stack

**Next.js 14 (App Router) + TypeScript + Tailwind CSS**

Inicializa con:
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes
```

Añade a `next.config.js` después de inicializar:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
```

---

## Páginas a crear

### Obligatorias — contenido principal
```
/                                    → home.md
/sobre-prettify/                     → sobre-prettify.md
/servicios/                          → servicios.md
/salones/                            → salones.md
/franquicias/                        → franquicias.md
/contacto/                           → contacto.md
```

### Obligatorias — SEO localizado (aquí está el tráfico orgánico)
```
/manicura-barcelona/                 → manicura-barcelona.md
/pedicura-barcelona/                 → pedicura-barcelona.md
/diseno-cejas-barcelona/             → diseno-cejas-barcelona.md
/pestanas-barcelona/                 → pestanas-barcelona.md
/manicura-cerca-de-mi/               → manicura-cerca-de-mi.md
/pedicura-cerca-de-mi-barcelona/     → pedicura-cerca-de-mi-barcelona.md
/diseno-cejas-cerca-de-mi-barcelona/ → diseno-cejas-cerca-de-mi-barcelona.md
```

### Secundarias
```
/tienda-online/                      → tienda-online.md
/aviso-legal/                        → aviso-legal.md
/politica-privacidad/                → politica-privacidad.md
/politica-de-cookies/                → politica-de-cookies.md
/terminos-y-condiciones/             → terminos-y-condiciones.md
```

### NO recrear
- `/acceder/`, `/mi-cuenta/`, `/favoritos/`, `/finalizar-compra/` — portal WooCommerce
- `/cursos-personal/`, `/franquiciado/` — contenido restringido
- `/landing/`, `/pide-cita/` — vacías

---

## Problemas SEO críticos a corregir

### 1. H1 duplicado — URGENTE
La web actual tiene 3 H1 por página: "PRETTIFY" del logo (×2) + el título real. El logo debe ser `<span>` o `<div>`, nunca `<h1>`.

**H1 correcto por página:**
| Página | H1 |
|--------|----|
| Home | Salones de belleza en España y Andorra |
| /manicura-barcelona/ | Manicura en Barcelona: cuida tus manos, resalta tu estilo |
| /pedicura-barcelona/ | Pedicura en Barcelona: el cuidado que tus pies merecen |
| /diseno-cejas-barcelona/ | Diseño de cejas en Barcelona: cejas perfectas para ti |
| /pestanas-barcelona/ | Lifting y extensiones de pestañas en Barcelona |
| /salones/ | Nuestros salones en España y Andorra |
| /servicios/ | Nuestros servicios de belleza |
| /sobre-prettify/ | Sobre Prettify |
| /franquicias/ | Hazte franquiciado Prettify |
| /contacto/ | Contacto |
| /manicura-cerca-de-mi/ | Manicura cerca de mí, en Barcelona |
| /pedicura-cerca-de-mi-barcelona/ | Pedicura cerca de mí, en Barcelona |
| /diseno-cejas-cerca-de-mi-barcelona/ | Diseño de cejas cerca de mí, en Barcelona |

### 2. Erratas en producción — corregir YA
- `/manicura-cerca-de-mi/` → H1 dice **"en Bacelona"** → corregir a "Barcelona"
- `/diseno-cejas-cerca-de-mi-barcelona/` → meta description dice **"sales de belleza"** → corregir a "salones de belleza"

### 3. Meta descriptions
Cada página necesita meta description única de 150-160 caracteres. Estructura:
`[Beneficio] en [Ciudad]. [Técnicas/servicios]. Reserva online. | Prettify`

### 4. Schema.org (actualmente ausente)
Implementar en todas las páginas relevantes:
- `BeautySalon` + `LocalBusiness` en home y páginas de salón
- `Service` en cada página de servicio
- `FAQPage` en páginas de servicio (genera rich snippets en Google)
- `BreadcrumbList` en páginas internas

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Prettify",
  "url": "https://prettify.es",
  "email": "info@prettify.es",
  "sameAs": ["https://www.instagram.com/prettify.es"],
  "areaServed": ["Barcelona", "Madrid", "Terrassa", "Mataró", "Lleida", "Sitges", "Donostia", "Andorra"]
}
```

### 5. Canonical tags
Todas las páginas con trailing slash consistente.

### 6. Sitemap y robots
Generar con `app/sitemap.ts` y `app/robots.ts`. Excluir: cuenta, carrito, checkout.

---

## Rendimiento — objetivos Core Web Vitals

| Métrica | Actual | Objetivo |
|---------|--------|----------|
| TTFB | 4.1s ❌ | < 200ms |
| LCP | 4.7s ❌ | < 2.5s |
| INP | 108ms ✓ | < 200ms |
| CLS | 0 ✓ | 0 |

**Para conseguirlo:**
- `<Image>` de Next.js siempre con `width` y `height` definidos
- Hero con `priority` (resuelve LCP)
- Resto de imágenes sin `priority` (lazy por defecto)
- Fuentes con `font-display: swap`
- Sin librerías pesadas innecesarias
- CSS crítico inline

---

## Imágenes — cómo usarlas

Las imágenes están en `public/images/` y listas para servir. El mapping completo está en `technical/images-manifest.json` — cada entrada tiene:
- `local_path` → ruta para Next.js (ej: `/images/foto-manicura-800x600-30e9d56c.jpg`)
- `alt` → texto alt original
- `context` → texto del HTML que rodeaba la imagen → usa esto para saber dónde va
- `downloaded: true` → el archivo existe en `public/images/`

**Asignación de imágenes por sección:**

| Imagen | Uso |
|--------|-----|
| `banner-inicio-*` | Hero de la home |
| `foto-manicura-*` | Sección/página de manicura |
| `foto-pestanas-*` | Sección/página de pestañas |
| `foto-quien-somos-*` | Página sobre-prettify |
| `pedicuras-prettify-*` | Sección/página de pedicura |
| `cejas-pestanas-*` | Sección/página de cejas |
| `franquicias-prettify-*` | Página de franquicias (hero) |
| `pretiffy-franquicia-unas1..18` | Galería de la página de franquicias |
| `muntaner-prettify-*` | Salón Muntaner en /salones/ |
| `passeig-sant-joan-*` | Salón Passeig Sant Joan en /salones/ |
| `prettiffy-lleida-*` | Salón Lleida en /salones/ |
| `prettiffy-paseo-san-juan-*` | Salón Barcelona en /salones/ |
| `san-sebastian-*` | Salón Donostia en /salones/ |
| `prettiffy2-*` | Imagen secundaria home o sobre-prettify |
| `bono-prettify-*` | Página tienda-online / bonos regalo |
| `inicio2025-*` | Sección home o sobre-prettify |
| `phone-icon-*` | Icono teléfono en contacto o footer |
| `ubicacion-icon-*` | Icono ubicación en salones o contacto |
| `tarjetas-pago-*` | Footer — métodos de pago |
| `android-*` / `apple-*` | Banners app store (si aplica) |
| `ajustes-cookies-*` | Banner de cookies |

**Uso en Next.js:**
```tsx
import Image from 'next/image'

// Hero — siempre priority
<Image
  src="/images/banner-inicio-f1bb27f0.jpg"
  alt="Salones de belleza Prettify en España y Andorra"
  width={1200}
  height={600}
  priority
/>

// Servicio — lazy
<Image
  src="/images/foto-manicura-800x600-30e9d56c.jpg"
  alt="Manicura en Barcelona — Prettify"
  width={800}
  height={600}
/>
```

---

## Integraciones a mantener

| Integración | Implementación |
|-------------|---------------|
| Google Tag Manager | Script en `<head>` — placeholder `{{GTM_ID}}` |
| Google Analytics 4 | Via GTM — placeholder `{{GA_ID}}` |
| Meta Pixel | Script en `<head>` — placeholder `{{PIXEL_ID}}` |
| WhatsApp | Botón flotante fijo abajo a la derecha — `https://wa.me/` |
| Flowww (reservas) | Botón "Pide cita" → link externo por salón |
| WooCommerce (bonos) | Redirect a `https://prettify.es/tienda-online/` por ahora |

---

## Identidad visual

- **Paleta:** Tonos nude/rosados para fondos y acentos, negro para tipografía, blanco para espacios
- **Tipografía:** Sans-serif moderna (usar Inter o similar de Google Fonts)
- **Tono:** Femenino, elegante, cercano — no formal
- **Espaciado:** Generoso, con mucho aire — estética de salon premium
- **Logo:** Texto "PRETTIFY" en tipografía display o imagen del logo si está en `public/images/`

---

## Estructura de H2 recomendada por página SEO

**/diseno-cejas-barcelona/** (mejor quick win — KD 10, pos 8 actual):
- H2: Diseño de cejas | Laminado de cejas | Microblading | Depilación con hilo | Tinte de cejas | Preguntas frecuentes

**/pestanas-barcelona/**:
- H2: Lifting de pestañas | Extensiones pelo a pelo | Volumen ruso | Tinte de pestañas | Lifting vs extensiones | FAQ

**/manicura-barcelona/**:
- H2: Manicura exprés | Manicura rusa | Manicura semipermanente | Uñas acrílicas | Uñas de gel | FAQ

**/pedicura-barcelona/**:
- H2: Pedicura SPA | Pedicura semipermanente | Pedicura tradicional | Pedicura exprés | FAQ

**Páginas "cerca de mí"** → H2 por barrio barcelonés (Eixample, Gràcia, Sagrada Família, Sant Martí, Nou Barris) con link al salón más cercano.

---

## Keywords objetivo por ciudad

### Barcelona — quick wins (atacar primero)
| Keyword | Volumen | KD |
|---------|---------|-----|
| cejas barcelona | 480 | 10 |
| microblading cejas barcelona | 170 | 8 |
| laminado de cejas barcelona | 170 | 11 |
| lifting de pestañas barcelona | 320 | 12 |
| manicura rusa barcelona | 210 | 13 |
| uñas acrilicas barcelona | 170 | 12 |

### Barcelona — alta prioridad
| Keyword | Volumen | KD |
|---------|---------|-----|
| uñas barcelona | 1.000 | 21 |
| manicura barcelona | 590 | 17 |
| pedicura barcelona | 480 | 14 |

### Madrid
| Keyword | Volumen | KD |
|---------|---------|-----|
| manicura rusa madrid | 210 | 13 ← quick win |
| manicura madrid | 720 | 28 |

### Terrassa
| Keyword | Volumen | KD | Pos. actual |
|---------|---------|-----|-------------|
| uñas terrassa | 480 | 23 | 2 → empujar a 1 |

---

## Páginas nuevas a crear (no existen en la web actual)

Estas páginas tienen KD bajo y son oportunidades directas de tráfico orgánico:

- `/manicura-rusa-barcelona/` (210 vol, KD 13)
- `/unas-acrilicas-barcelona/` (170 vol, KD 12)
- `/microblading-cejas-barcelona/` (170 vol, KD 8)
- `/laminado-cejas-barcelona/` (170 vol, KD 11)
- `/lifting-pestanas-barcelona/` (320 vol, KD 12)
- `/manicura-madrid/` (720 vol, KD 28)
- `/manicura-rusa-madrid/` (210 vol, KD 13)

Créalas con contenido de 600-800 palabras basado en el contenido de las páginas similares existentes.

---

## Git y deploy

Cuando el build pase sin errores:

```bash
git init
git add .
git commit -m "feat: initial Prettify web rebuild"
git remote add origin https://github.com/pablodomsg/prettify.git
git branch -M main
git push -u origin main --force
```

Luego conectar en vercel.com → Add New Project → Import `pablodomsg/prettify` → Deploy.

URL provisional: `prettify.vercel.app` o similar.

---

## Orden de ejecución

Ejecuta todo en orden sin parar ni pedir confirmación:

1. `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes`
2. Configurar `next.config.js` con `images: { unoptimized: true }`
3. `app/layout.tsx` con Header, Footer y botón WhatsApp flotante
4. `app/page.tsx` — Home con hero, servicios destacados, salones, CTA
5. Páginas principales: servicios, salones, sobre-prettify, franquicias, contacto
6. 7 páginas SEO localizadas existentes
7. 7 páginas SEO nuevas (con contenido generado)
8. Páginas legales
9. `app/sitemap.ts` y `app/robots.ts`
10. `npm run build` — corregir todos los errores
11. Git push a `https://github.com/pablodomsg/prettify.git`
