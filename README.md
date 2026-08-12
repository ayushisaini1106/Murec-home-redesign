# MUREC Home Page Redesign

A fresh, responsive React + Vite homepage redesign for MUREC (Madhusudan Urban Real Estate Collection).

## Assignment approach

- MUREC is the content source: brand, homepage copy, project/collection content and contact information.
- Timeless is used only as visual inspiration for premium presentation, cinematic transitions, typography, spacing and interaction quality.
- The Timeless interface is not reproduced pixel-for-pixel.

## Run locally

```bash
npm install
npm run dev
```

The Vite development server is configured for port `3000`.

## Production build

```bash
npm run build
```

## Project structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    Legacy.jsx
    Collection.jsx
    Philosophy.jsx
    Voices.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  styles.css
```

## Motion

The homepage includes lightweight CSS/JS interactions:
- intro reveal
- hero image zoom and scroll parallax
- staggered hero typography
- scroll-triggered section reveals
- scroll progress indicator
- active/scrolling navbar
- image hover zoom and project reveal
- rotating philosophy visual
- animated CTA and footer marquee
- responsive mobile navigation

No backend or database is required.
