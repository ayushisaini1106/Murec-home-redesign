# MUREC Home Page Redesign

A fresh, highly responsive, and premium React + Vite homepage redesign for MUREC (Madhusudan Urban Real Estate Collection).

## Overview & Approach

- **Content Source**: MUREC is the core content source, encompassing the brand identity, homepage copy, project/collection highlights, and contact information.
- **Visual Aesthetic**: Inspired by high-end, luxury real estate design (using "Timeless" as a visual reference). The goal was to establish a premium presentation, cinematic transitions, refined typography, generous spacing, and a high quality of interaction.
- **Implementation**: The interface is custom-built, focusing on smooth performance and an immersive user experience without relying on heavy external UI libraries.

## Key Features & Enhancements

- **Immersive Intro & Smooth Loading**: Features a custom intro screen that locks scrolling during load to prevent mobile jitter, seamlessly fading into the main content.
- **Ambient Backgrounds**: An animated, ambient background canvas with floating orbs and a subtle grain texture adds depth to the entire page.
- **Advanced Animations**:
  - Continuous, GPU-accelerated background image zooms (`will-change: transform`).
  - Staggered typography reveals (`fadeUp`, `titleIn`).
  - Scroll-triggered reveals utilizing `IntersectionObserver`.
  - Infinite marquee scrolling in the footer.
- **Interactive Navigation**:
  - Sticky, glassmorphism navbar that adapts on scroll.
  - Scroll progress indicator at the top of the viewport.
  - Responsive mobile menu drawer.
- **Refined Mobile Responsiveness**:
  - Fluid typography using `clamp()` functions.
  - Adjusted mobile layouts for the Hero, Legacy, and Philosophy sections to prevent horizontal overflow and text clipping.
  - Fully accessible and responsive Contact Modal (fixed viewport clipping on smaller devices).
- **Interactive Elements**: Image hover zoom effects, rotating badges, and polished CTA buttons.

## Tech Stack

- **React 18**
- **Vite** (Build Tool)
- **Vanilla CSS** (No Tailwind or CSS-in-JS used, maintaining a clean global stylesheet `styles.css`)

## Run Locally

Make sure you have Node.js installed, then run:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The Vite development server is configured to run on port `3000`. Open `http://localhost:3000` in your browser.

## Production Build

To generate a minified, production-ready build:

```bash
npm run build
```

The compiled assets will be available in the `dist/` directory.

## Project Structure

```text
src/
  components/
    Navbar.jsx         # Main navigation & mobile menu
    Hero.jsx           # Animated hero section with staggered text
    Legacy.jsx         # Legacy statistics and copy
    Collection.jsx     # Featured property collections
    Philosophy.jsx     # Brand philosophy & rotating visual
    Voices.jsx         # Testimonials/Voices section
    Contact.jsx        # Inquiry modal and contact details
    Footer.jsx         # Footer with marquee and quick links
    BackgroundCanvas.jsx # Ambient background grain & orbs
  App.jsx              # Main layout, intro screen, and scroll observer logic
  main.jsx             # React entry point
  styles.css           # Global styles, variables, animations, and media queries
vite.config.js         # Vite configuration
```

## Note

No backend or database is required for this frontend demonstration.
