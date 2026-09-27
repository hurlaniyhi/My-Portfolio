# Ridwan Kolawole – Portfolio

Personal portfolio site built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **SCSS modules**.
It is exported as a fully static site (`out/` folder) and hosted on Netlify.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # start the dev server at http://localhost:3000
```

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Start the local dev server with hot reload              |
| `npm run build`     | Build the static site into `out/`                       |
| `npm run start`     | Serve the built `out/` folder locally                   |
| `npm run lint`      | Check the code with ESLint                              |
| `npm run typecheck` | Check the code with the TypeScript compiler             |

**Netlify settings:** build command `npm run build`, publish directory `out`.

## Project structure

```
app/                  Next.js entry point
  layout.tsx          <html>/<body>, page metadata, global styles
  page.tsx            The home page — puts all the sections together, in order
components/
  layout/             Pieces around the content: navbar, mobile menu, intro loader, sidebars, footer
  sections/           One component per page section: Hero, About, Experience, Projects, Contact
  ui/                 Small reusable building blocks (e.g. SectionTitle)
data/                 ALL the site content (text, links, jobs, projects) — edit these to update the site
hooks/                Reusable React hooks (scroll lock, browser detection)
lib/                  Small helper functions
types/                TypeScript types describing the shape of the data
styles/               Global styles and shared SCSS variables (colours, fonts)
public/assets/        Images, cursors and icons (served from /assets/...)
```

Each component keeps its styles next to it, e.g. `About.tsx` + `About.module.scss`.

## Common tasks

- **Add or edit a job** → `data/experiences.ts`
- **Add or edit a featured project** → `data/featuredProjects.ts` (put the image in `public/assets/`)
- **Add or edit a small project card** → `data/otherProjects.ts`
- **Change email, resume link or page title** → `data/site.ts`
- **Change social links** → `data/socialLinks.ts`
- **Change a colour** → `styles/_variables.scss`

You usually don't need to touch any component to update content — the UI is generated from the `data/` files.

## Good to know

- Components that use state or browser APIs start with `'use client'` (e.g. `Experience`, `MobileMenu`).
  Everything else is rendered to static HTML at build time.
- Scroll animations use [AOS](https://michalsnik.github.io/aos/): add a `data-aos="fade-up"` attribute to animate an element.
- The mobile menu is opened/closed with a hidden checkbox and `:checked ~` CSS selectors, so the order of
  its elements in `MobileMenu.tsx` matters (see the note in that file).
