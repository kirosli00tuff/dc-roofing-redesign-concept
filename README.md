# DC Roofing — Independent Redesign Concept

This repository contains a **mobile-first, unofficial redesign concept** for [DC Roofing Inc.](https://www.dcroofing.ca/), an established Metro Vancouver roofing company. It was created independently by **Kiros Li** as a speculative demonstration and is not affiliated with, endorsed by, or commissioned by DC Roofing.

## Design direction

The interface follows a custom **Pacific Shield Modernism** system: storm-charcoal surfaces, mineral-white content fields, cedar survey rules, restrained Roof Lichen action signals, and repeated roof-pitch “Shelter Cut” transitions. The structure prioritizes fast mobile access to services, business proof, service areas, and estimate requests.

| Area | Implementation |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS 4 plus a project-specific design system |
| Interaction | Responsive navigation, smooth anchors, validation, reduced-motion support |
| Form | Web3Forms, configured through `VITE_WEB3FORMS_ACCESS_KEY` |
| Hosting | Vercel-compatible static build |

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Add a valid Web3Forms access key to `.env.local` before testing the inquiry form. Local environment files are ignored by Git.

## Quality checks

```bash
pnpm check
pnpm build
```

The production output is written to `dist/public`.

## Content and asset note

Public business facts were drawn from DC Roofing's official website during the concept research pass. Generated photography and the concept mark are original visual assets prepared for this redesign. This project deliberately avoids testimonials, ratings, fabricated project claims, or any representation that the concept is DC Roofing's current official website.

## License and use

The source code is provided for portfolio review. DC Roofing's name and public business information remain the property of their respective owners. Do not present this concept as an official site without the business owner's authorization.
