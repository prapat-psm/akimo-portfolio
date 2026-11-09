# Akimo Portfolio

Portfolio and commission site for the artist Akimo. Phase 1 is a static portfolio (no database, no login), hosted for free on Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

Architecture and phase 2 (booking system) plan: https://claude.ai/artifact/SmNzsax5DgnR9bwAvquSSS

## Stack

- Next.js 16 (App Router), React 19, Tailwind CSS 4
- vitest 5 + Testing Library (`unit` project on node, `dom` project on jsdom)
- `@opennextjs/cloudflare` + wrangler for Cloudflare Workers

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm test` | Run all vitest tests once |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run preview` | Build for Workers and run it locally with wrangler |
| `npm run deploy` | Build and deploy to Cloudflare (run `npx wrangler login` first) |

## Editing content

Everything Akimo changes lives in `src/content/`:

- `commissions.ts`: prices (THB, and USD once Akimo sets them) and terms
- `gallery.ts`: artworks. Put a resized web copy (about 1200px long side, `.webp`) in `public/gallery/` and add an entry
- `links.ts`: VGen, X, waiting list, Facebook (hidden until it has a URL)

## Notes

- Every route must stay static (`dynamic = 'error'` in the root layout). This keeps each request well inside the Workers free plan's 10 ms CPU limit.
- `cacheComponents` is off: with it on, the prerendered page hung with a 500 under `wrangler dev` (OpenNext 1.20.16). Re-test before enabling it.
- Images are `unoptimized` and served as static assets, so no Cloudflare Images or R2 setup is needed.
