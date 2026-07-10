# Mohammed Safwan Portfolio

A modern, data-driven personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, and shadcn-style UI primitives.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- shadcn/ui-style primitives
- next-themes
- ESLint
- Prettier

## Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

If you do not have pnpm:

```bash
npm install
npm run dev
```

## Useful Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm format
pnpm format:check
```

## Folder Structure

```text
src/
  app/                  Routes, SEO files, project detail pages, 404
  components/
    layout/             Navbar and footer
    sections/           Homepage sections
    shared/             Reusable app components
    ui/                 shadcn-style primitives
  config/site.ts        Main editable site configuration
  data/                 Editable portfolio content
  design-tokens.ts      Documented design token source
  lib/                  Utilities
  types/                Shared content types
public/
  images/
    projects/           Project thumbnails
    certificates/       Certificate images
    achievements/       Achievement images
  resume/               Resume PDF
```

## Editing Site Info

Edit `src/config/site.ts` to update:

- Name and display name
- Tagline
- Bio
- Email
- Location
- Availability text
- Social links
- Navigation
- SEO metadata
- Resume/profile image paths

## Adding Projects

Edit `src/data/projects.ts`.

Add a new object to the `projects` array. Cards are generated automatically.

Use `caseStudy` only when the project should have a detail page at `/projects/[slug]`.

```ts
{
  slug: "my-project",
  title: "My Project",
  description: "Short project summary.",
  technologies: ["Next.js", "TypeScript"],
  github: "https://github.com/...",
  live: "https://...",
  image: "/images/projects/my-project.png",
  featured: true,
  category: "Web Application",
  year: "2026",
  status: "Completed",
  features: ["Feature one", "Feature two"],
  caseStudy: {
    problem: "What problem it solves.",
    approach: "How it was built.",
    outcome: "What it achieved.",
  },
}
```

Buttons for missing GitHub or live demo links are hidden automatically.

## Replacing Project Thumbnails

Current thumbnails are clean SVG placeholders in `public/images/projects`.

To replace one:

1. Add your real screenshot to `public/images/projects`.
2. Update the `image` path in `src/data/projects.ts` if the filename changed.

Recommended image size: `1280x800`.

## Editing Skills

Edit `src/data/skills.ts`.

Add, remove, or rename skill groups without touching React components.

## Editing Experience and Education

Edit:

- `src/data/experience.ts`
- `src/data/education.ts`

Each entry renders through the shared timeline component.

## Certifications

Edit `src/data/certifications.ts`.

Each certification supports:

- `name`
- `issuer`
- `date`
- `credentialUrl` optional
- `image` optional

Certificate images should go in `public/images/certificates`.

When an image is present, the site shows a certificate lightbox button. When a credential URL is present, it shows a View Credential button.

## Achievements

Edit `src/data/achievements.ts`.

Each achievement supports:

- `title`
- `description`
- `date`
- `event`
- `position` optional
- `certificateImage` optional
- `galleryImages` optional
- `externalLink` optional

Images should go in `public/images/achievements`.

## Blogs and Testimonials

Edit:

- `src/data/blogs.ts`
- `src/data/testimonials.ts`

These sections are hidden automatically while their arrays are empty.

## Profile Picture and Resume

Current paths:

- Profile: `public/images/profile.jpeg`
- Resume: `public/resume/Safwan_Resume.pdf`

Replace those files with the same names to update the site without changing code.

## Design Tokens

Design tokens are defined in:

- `src/design-tokens.ts`
- `src/app/globals.css`
- `tailwind.config.ts`

The system includes:

- Light and dark color hierarchy
- 8px spacing rhythm
- Three radius values
- Three elevation levels
- Geist and Geist Mono typography
- Reduced-motion support

## Contact Form

The contact form currently validates fields and shows placeholder success/error states.

To connect it later, update the submit handler in `src/components/sections/contact-section.tsx` for Formspree, Resend, EmailJS, or a custom API route.

## SEO

Implemented:

- Metadata
- Open Graph
- Twitter cards
- Dynamic OG images with `next/og`
- Project-level OG images
- Sitemap
- Robots
- Manifest
- Favicon

Update the production URL in `src/config/site.ts` after deployment.

## Deploying to Vercel

Build locally first:

```bash
pnpm build
```

Push to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/personal-portfolio.git
git push -u origin main
```

Deploy with Vercel:

```bash
npm i -g vercel
vercel
vercel --prod
```

You can also import the GitHub repository directly from the Vercel dashboard.
