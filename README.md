# Iris Café & Kitchen

Landing site for Iris Café & Kitchen, JP Nagar, Bengaluru. Next.js 15 (App Router) + Tailwind CSS 4, fully static.

## Develop

```bash
npm ci
npm run dev        # http://localhost:3000
```

## Check before deploying

```bash
npm run lint
npm run build      # must finish with every route marked ○ (Static)
npm start          # serve the production build locally
```

## Deploy

**Vercel (recommended):** import the repo at vercel.com/new. The defaults work as they are (framework Next.js, build `npm run build`). Then add the `iriscafe.in` domain under Project → Settings → Domains.

**Any Node host:** `npm ci && npm run build && npm start` (Node 18.18+; set `PORT` if needed).

No environment variables are required.

## Content

All copy, menu items, prices, hours, links and gallery images live in `src/lib/data.ts`. Images are in `public/images`, and `next/image` serves them as AVIF/WebP.

The production URL (`https://iriscafe.in`) is set in `cafe.website` and `metadataBase` in `src/app/layout.tsx`. It drives the canonical URL, Open Graph tags, `robots.txt`, `sitemap.xml` and the schema.org JSON-LD. Update both if the domain changes.
