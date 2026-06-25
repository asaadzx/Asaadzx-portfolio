# Portfolio Template

A clean, animated single-page portfolio built with SvelteKit 5 + Tailwind CSS 4.

Zero external service dependencies — no database, no API routes, no analytics. Just static files.

---

## Quick Start

```bash
bun install
bun run dev      # local dev server at http://localhost:5173
```

## Build

```bash
bun run build    # outputs static site to build/
bun run preview  # preview the built site locally
```

Deploy the `build/` folder to any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.

---

## Customization

### 1. Content — `src/lib/config.ts`

Everything visible on the page lives here. No other file needs editing.

```ts
export const siteConfig: SiteConfig = {
  name: "Your Name",
  username: "@username",
  title: "Your Tagline",
  tagline: "Nice to meet you 👋",
  email: "hello@example.com",
  location: "Your City, Country",
  avatarUrl: "https://example.com/avatar.jpg",   // leave "" to hide
  bio: "A short paragraph about yourself. This shows in the My Background section.",

  skills: [
    { name: "Writing",    icon: "mdi:file-document-edit" },
    { name: "Photography", icon: "mdi:camera" },
    // pick any icon from https://iconify.design
  ],

  cvUrl: "/cv.pdf",     // link to your CV/resume; leave "" to hide the button

  projects: [
    {
      id: 1,
      slug: "project-one",
      name: "Project One",
      description: "Short description.",
      longDescription: "Longer walkthrough of the project.",   // optional
      tags: ["Design", "Branding"],
      category: "Branding",
      image: "https://placehold.co/600x400/...",
      links: [
        { label: "Live Site", url: "https://example.com" },
      ],
      page: true,    // true = clickable to a detail page at /projects/project-one
    },
  ],

  socialLinks: [
    { label: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com" },
  ],

  theme: {
    dark: false,   // set true to start in dark mode
  },

  seo: {
    title: "Your Name — Portfolio",
    description: "Description for search engines.",
    ogImage: "https://example.com/og-image.jpg",
    author: "Your Name",
    keywords: ["portfolio", "design", "art"],
    canonical: "https://yourdomain.com",
    twitterHandle: "@yourhandle",
  },
};
```

#### Project detail pages

When `page: true` on a project, clicking its gallery image opens `/projects/[slug]`. That page shows the image, description, tags, and external links. Only projects with `page: true` are prerendered at build time.

### 2. Colors — `src/app.css`

The color palette uses CSS custom properties. Edit the `@theme` block (light mode) and the `.dark` block (dark mode):

```css
@theme {
  --color-text: #090b15;
  --color-background: #f4f6fb;
  --color-primary: #c1c4cd;
  --color-secondary: #869ce9;
  --color-accent: #213169;
}

.dark {
  --color-text: #eaecf6;
  --color-background: #04060b;
  --color-primary: #32353e;
  --color-secondary: #162b79;
  --color-accent: #96a6de;
}
```

These variables are used everywhere via Tailwind utility classes like `text-text`, `bg-background`, `bg-primary`, `text-accent`, etc. Change the hex values and the entire site re-colors.

### 3. Font — `src/app.css`

The font is set in the `@theme` block:

```css
@theme {
  --font-heading: 'IM Fell English', serif;
  --font-body: 'IM Fell English', serif;
}
```

Change to any Google Font (add the `@import` or `<link>` in `app.html` first) or a system font stack:

```css
--font-body: 'Inter', system-ui, sans-serif;
```

The scale uses a perfect-fourth modular scale:

| Token  | Size    |
|--------|---------|
| `text-sm`  | 0.750rem |
| `text-base`| 1rem     |
| `text-xl`  | 1.333rem |
| `text-2xl` | 1.777rem |
| `text-3xl` | 2.369rem |
| `text-4xl` | 3.158rem |
| `text-5xl` | 4.210rem |

Adjust these in the `@theme` block to change the type scale.

### 4. Favicon — `src/app.html`

The favicon is an inline SVG emoji:

```html
<link rel="icon" href="data:image/svg+xml,..." />
```

Change the emoji or replace with a proper favicon link.

### 5. Icons — Skill Grid

Skills use [Iconify](https://iconify.design) icons. Any icon from any set works:

```ts
skills: [
  { name: "Design", icon: "mdi:palette" },           // Material Design
  { name: "Camera", icon: "ph:camera-fill" },         // Phosphor
  { name: "Code",   icon: "simple-icons:typescript" }, // Simple Icons
]
```

Social links use [Font Awesome](https://fontawesome.com) (loaded from CDN in `app.html`):

```ts
{ label: "GitHub", icon: "fa-brands fa-github", url: "..." }
```

### 6. Dark/Light Mode

An animated toggle switch (top-right corner, hidden on mobile) switches between light and dark mode. The preference is saved in `localStorage`. On first visit, it respects the system `prefers-color-scheme` setting.

Set the default in `config.ts`:

```ts
theme: { dark: true },   // or false
```

The toggle is hidden on screens narrower than 640px (`hidden sm:block`). On mobile the theme is always dark by default, so visitors get a consistent viewing experience without an on-screen control.

### 7. CV / Resume Button

Add a CV download link in the My Background section by setting `cvUrl` in `config.ts`:

```ts
cvUrl: "/cv.pdf",   // path or URL to your CV file
```

Leave as `""` to hide the button entirely. The button has a hover scale + tracking animation.

---

## Features

- **Scroll-triggered blur/fade animations** — sections fade in as they scroll into view (uses `svelte-inview` + `svelte-motion`)
- **Skills grid** — icon + label cards using Iconify
- **Gallery carousel** — swipeable/clickable carousel with dot indicators and prev/next arrows
- **Project detail pages** — optional linked pages with image, description, tags, and external links
- **Dark/light mode** — animated toggle, persists in localStorage, system-aware on first visit
- **Profession-agnostic** — no "developer" assumptions in content or types; works for designers, writers, artists, photographers
- **Full SEO** — meta tags, Open Graph, Twitter Cards, and JSON-LD structured data (Person, WebPage, WebSite schemas)
- **Error page** — styled 404/500 page with animated buttons and social links
- **Fully static** — zero server runtime, zero external API calls, zero analytics

---

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) + [Svelte 5](https://svelte.dev/) — framework
- [Tailwind CSS 4](https://tailwindcss.com/) — styling
- [Lucide](https://lucide.dev/) — gallery navigation icons
- [Iconify](https://iconify.design/) — skill icons (any icon set)
- [Font Awesome](https://fontawesome.com/) — social link icons (CDN)
- [svelte-motion](https://svelte-motion.vercel.app/) — scroll animations
- [svelte-inview](https://github.com/rmarscher/svelte-inview) — intersection observer triggers
- [IM Fell English](https://fonts.google.com/specimen/IM+Fell+English) — default font (Google Fonts)

---

## Project Structure

```
src/
├── app.css              # Tailwind theme, colors, font, dark mode
├── app.html             # HTML shell, CDN links, favicon
├── lib/
│   ├── config.ts        # ★ ALL content lives here
│   ├── seo.ts           # SEO metadata generators
│   ├── utils.ts         # cn() utility (clsx + tailwind-merge)
│   ├── Components/
│   │   ├── ThemeToggle.svelte      # dark/light switch
│   │   ├── BlurFade.svelte         # scroll animation wrapper
│   │   ├── LetterPullUp.svelte     # letter-by-letter animation
│   │   ├── SparklesText.svelte     # animated sparkle heading
│   │   ├── InteractiveHover.svelte # social link button
│   │   ├── SEOHead.svelte          # meta tags + JSON-LD
│   │   ├── AnimatedButton.svelte   # error page button
│   │   └── CoolMode.svelte         # particle effect wrapper
│   └── sections/
│       ├── Hero.svelte     # avatar, name, tagline, socials
│       ├── About.svelte    # bio + skills icons
│       ├── Gallery.svelte  # project image carousel
│       └── Contact.svelte  # email button + footer
└── routes/
    ├── +layout.svelte     # theme toggle + CSS import
    ├── +page.svelte       # composes all sections
    ├── +page.server.ts    # SEO data for homepage
    ├── +error.svelte      # 404/500 error page
    └── projects/[slug]/
        ├── +page.svelte   # project detail page
        └── +page.ts       # loader + prerender config
```
