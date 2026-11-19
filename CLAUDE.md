# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server on port 3001 (auto-opens browser, host: true → reachable from LAN)
npm run build     # production build to dist/
npm run preview   # serve the production build
npm run lint      # ESLint 9 flat config (eslint.config.js), --max-warnings 0 (warnings fail the lint)
```

There is no test runner configured. The package name is `front-end-exam`; the app itself is "Furniro", a furniture e-commerce front-end.

## Architecture

React 19 + React Router 7 + Vite 8 SPA, styled with Tailwind CSS 4 via the `@tailwindcss/vite` plugin (JavaScript/JSX only, no TypeScript). Requires Node >= 22.12 (Vite 8). No state management library, no backend, no API layer. ESLint is pinned to 9.x because `eslint-plugin-react` does not yet support ESLint 10; `react-hooks` v7 flags `setState` called synchronously inside `useEffect`, so read initial values with lazy `useState(() => ...)` instead.

- **Routing** (`src/main.jsx`): `createBrowserRouter` with three routes — `/` (Home), `/checkout`, `/contact`. Add new pages here.
- **Pages** (`src/Pages/`, capital P): each page is a flat composition of components from `src/components/`. Pages hold no logic. Every page repeats `<Navbar/>` ... `<Footer/>` itself; there is no shared layout route.
- **Components** (`src/components/`): mostly static presentational sections (Banner, OurProducts, Inspirations, ...). Product data and copy are hardcoded in JSX, not loaded from data files.
- **`ImagePage`**: the blurred hero header used by sub-pages; takes a `name` prop used for both the title and breadcrumb.
- **Assets** (`src/assets/<SectionName>/`): images imported directly in the component that uses them (e.g. `../assets/banner/LogoIcon.png`). Folder names match the component/section, with inconsistent casing (`banner`, `BrowseTheRange`, `Inspiratons` [sic]) — match existing paths exactly, since Windows is case-insensitive but build/CI on Linux is not.
- **Styling**: Tailwind v4 is CSS-first: there is no `tailwind.config.js` or PostCSS config. Design tokens (colors `primary`/`ink`/`ivory`/`stone`/`line`/`muted`, fonts `font-serif` Cormorant Garamond and `font-sans` Inter + Noto Sans Thai, `tracking-luxe`) live in the `@theme` block of `src/index.css`, which also loads the Google Fonts. Shared classes (`container-x`, `section-y`, `btn-primary`, `btn-outline`, `field`, `field-label`, `eyebrow`, `section-title`) are `@utility` blocks in the same file; define new reusable classes there with `@utility`, not `@layer components` (v4 cannot `@apply` those). Layouts are mobile-first, with `sm`/`lg` as the main breakpoints (the navbar collapses to a hamburger below `lg`). Use the v4 important suffix (`py-2.5!`), not the old `!py-2.5`.

### BillingDetails (the only stateful component)

`src/components/BillingDetails.jsx` implements the checkout form with cascading Thai address selects: Country → Province → District (amphure) → Sub-District (tambon). On mount it fetches three JSON datasets from `raw.githubusercontent.com/kongvut/thai-province-data` (provinces, amphures, tambons) and filters them client-side by the selected parent id. Province options only appear when country is `TH`. The form is not submitted anywhere. This component requires network access to work.

## Notes

- Navbar links for Shop and About currently point to `/` (placeholders); only Home, Contact and the cart icon (→ `/checkout`) are real routes.
- Source files contain some Thai comments (e.g. in `vite.config.js`); this is expected.
