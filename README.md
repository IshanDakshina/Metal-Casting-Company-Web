# Shashiki Metal Industries — Website

A clean, conventional marketing website for Shashiki Metal Industries, a sand-casting and metal
manufacturing business in Sri Lanka. Built with Vite, React, TypeScript, Tailwind CSS, Framer
Motion, React Router and React Hook Form.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/pages/` — one file per route: Home, About, Products, Services, Gallery, Contact, NotFound
- `src/components/` — shared UI: Navbar, Footer, ProductCard, Reveal (scroll fade-in), CountUp,
  PageHero, Logo
- `src/context/ThemeContext.tsx` — light/dark mode, toggled from the navbar and persisted to
  `localStorage`
- `src/data/products.ts` — the six product lines (GY Plates, Manhole Covers, Mechanical Machine
  Parts, Metal Pipes, Sand Casting Models, Custom Orders) — edit this file to update product
  copy across the whole site
- `tailwind.config.js` — the color palette (`brand`, `surface`, `ink`, `navy`) and fonts

## Before Going Live

1. **Photos** — every photo on the site (hero, product cards, about, gallery) is a placeholder
   sourced from Unsplash. Replace the `src` values in `src/pages/*.tsx` and
   `src/data/products.ts` with real photography of the factory, team and finished products.
2. **Contact details** — the address, phone number, email and map in `src/pages/Contact.tsx`
   and `src/components/Footer.tsx` are placeholders. Update them, and swap the embedded Google
   Map for the exact business location.
3. **Contact form** — `onSubmit` in `src/pages/Contact.tsx` currently simulates a submission.
   Connect it to a real email service, form backend, or API endpoint before launch.
4. **Company facts** — the "years in operation" and "projects completed" figures on the homepage
   trust strip are placeholders; replace with accurate numbers.
5. **Logo** — a simple gear-mark logo is built with inline SVG in `src/components/Logo.tsx`. If
   you have the official logo as an image file, drop it into `public/` and swap it in.
