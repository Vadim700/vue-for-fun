# Vue for Fun

A Vue 3 pet project playground: posts, a kanban board, UI components, CSS experiments, JavaScript
notes and a photo gallery. It is used as a sandbox for layout tricks and performance ideas that are
worth keeping.

## Sections

| Route      | What is inside                                                            |
| ---------- | ------------------------------------------------------------------------- |
| `/`        | Landing page with links to every section                                  |
| `/posts`   | Animated 6×2 promo-post grid where the active frame expands to 2×2        |
| `/todos`   | Kanban board with drag & drop and localStorage persistence                |
| `/onlycss` | 48 CSS backgrounds, a 3D carousel and scroll animations — no JS animation |
| `/ui`      | Tooltip, calendar, modal, histogram, avatar and custom form controls      |
| `/funjs`   | Short cheatsheets about data collections and cookies                      |
| `/gallery` | Adaptive photo gallery with lazy-loaded images                            |

## Stack

Vue 3 (Composition API), Vue Router, Pinia (+ persisted state), Vite, Tailwind CSS 4, highlight.js,
Motion, vee-validate and yup.

## Getting started

```sh
npm install
npm run dev        # development
npm run build      # production build
npm run preview    # preview the production build
npm run lint       # ESLint with --fix
npm run lint:check # ESLint without changes
npm run format     # Prettier
```

Requires Node.js `^20.19.0` or `>=22.12.0`.

## Performance notes

- Every page and nested section is loaded as a lazy chunk; the initial bundle is just the shell.
- highlight.js is imported dynamically and only on pages that show code (core + required languages).
- Post images and large backgrounds are compressed and resized (`src/assets/optimized/`); images
  below the fold use `loading="lazy"`.
- The post grid uses percentage-based absolute positioning with CSS transitions — no resize
  listeners and no layout measurements.
- The modal and the CSS code drawer use CSS transitions instead of an animation library.
- The 404 noise effect is rendered at a lower resolution and a lower frame rate.
- `prefers-reduced-motion` is respected and interactive elements have a visible focus ring.

## Structure

```
src/
  assets/        images and optimized copies
  components/    reusable components (UI, todos, posts, modals, layout)
  lib/           framework-agnostic utilities
  router/        route definitions
  services/      mock services
  stores/        Pinia stores
  use/           composables
  views/         pages and nested sections
```

## Notes

The demo content (post copy, gallery captions and JS notes) is intentionally filler text in some
places — the project is primarily about layout and frontend experiments.
