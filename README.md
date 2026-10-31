# Portfolio

A bilingual portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Development

Install Node.js 20.19+ or 22.12+, then run:

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
```

The production output is `dist/`. Configure the host to serve `index.html` for client-side routes, including `/projects/:slug` and `/contact`.

## Design

The portfolio uses warm ivory, sage, lavender, and sky blue; editorial serif headings; a compact floating navigation; and screenshot-led project showcases. The homepage prioritizes selected work, followed by a personal introduction, capabilities, and contact.

Shared project previews live in `src/components/ProjectShowcases.tsx`. Existing project metadata remains in `src/data/projects.ts`; English and Portuguese copy lives in `src/locales/`. CV downloads remain in `public/`.

The visual direction is inspired by the supplied Craft reference. Project screenshots and personal information come from the existing portfolio.
