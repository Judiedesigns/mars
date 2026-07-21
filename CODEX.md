# Florence Eze — Portfolio Codebase Briefing

## Stack
- React 18 + TypeScript
- Vite 6 (build tool)
- Tailwind CSS v4
- Paper Design shaders (`@paper-design/shaders-react`) for profile picture effect
- `motion/react` for animations (NOT `framer-motion`)
- Lucide React for icons
- pnpm as package manager

## Project structure
```
src/
  app/
    App.tsx                          # Root component — mounts everything, sets all meta/OG tags
    components/
      CustomCursor.tsx               # Color-cycling cursor, morphs on hover
      CaseStudySheet.tsx             # Shared routed case-study sheet, carousel, drag-to-close
      StandardProjectCaseStudy.tsx   # Reusable case-study content for smaller project pages
      ProfilePictureShader.tsx       # Avatar with Paper Design WebGL shader
      DashboardImage.tsx             # Rendered React component used as project 3 thumbnail
      VibeCodeImage.tsx              # Rendered React component used as project 4 thumbnail
      ScatteredReel.tsx              # Horizontal auto-scrolling image ticker (bottom of page)
  imports/
    First.tsx                        # Main page layout (nav, hero, projects, writing, contact)
    ArrowUpRight-28-2166.tsx         # Icon component
    ArrowRight.tsx                   # Icon component
    img1.png … img8.png, img12.png   # Mobile design screenshots used in the reel
    Slice-1.png, image10.png, image11.png  # More reel images
    image-6.png                      # Placeholder for Shop Easy project thumbnail
    img5.png                         # Placeholder for Virtual Development project thumbnail
    img2.png                         # Placeholder for Visual Hierarchy article thumbnail
    img3.png                         # Placeholder for Color Variables article thumbnail
    dashboard-cover.png              # Available asset
  styles/
    index.css                        # Master CSS import (imports all below)
    fonts.css                        # Google Fonts: DM Mono, DM Sans, Inter
    theme.css                        # Tailwind design tokens (--background, --foreground, etc.)
    tailwind.css                     # @import "tailwindcss"
    animations.css                   # Custom keyframes and animation utilities
    cursor.css                       # Cursor and rainbow-hover styles
    globals.css                      # Global base styles
  main.tsx                           # Vite entry point — mounts App into #root
index.html                           # HTML entry point
vercel.json                          # SPA rewrites + X-Robots-Tag: index, follow
vite.config.ts                       # Vite config with React + Tailwind plugins
```

## Design language
- **Background:** `#fafafa`
- **Title font:** DM Mono (monospace) — used for name, section labels, nav
- **Body font:** Inter / DM Sans — used for descriptions, project meta
- **Accent:** Rainbow hover effect on social links (CSS class `rainbow-hover`)
- **Motion:** Subtle — fade-in on load, scale on project card hover, custom cursor interactions

## Page structure (First.tsx)
1. **Nav** — "Florence Eze" left, "Contact" right (smooth scrolls to footer)
2. **Hero** — Profile picture shader, name, role ("Product Designer · UX Researcher"), about paragraph
3. **Work** — Selected Work and Play tabs; clicking a card opens a routed case-study sheet
4. **Writing** — 2 Medium article links with thumbnails
5. **Contact/footer** — Email (click to copy), social links with dot separators (Resume · LinkedIn · Dribbble · Behance)
6. **ScatteredReel** — Full-width horizontal ticker of 11 mobile design screenshots, sits below the footer as a visual finale

## Projects
Project metadata, media, routes, and helper functions live in `src/app/data/projects.ts`.
Every project currently has an internal `/work/...` route. Larger/custom case studies have dedicated components; smaller project pages use `StandardProjectCaseStudy.tsx` with shared layout and copy.

## Known issues / TODOs
- **Shop Easy cover still needs final art direction.** Current main-page cover uses `assets/ShopEasy/img5.png` with `object-contain` to avoid bad cropping.
- The `figma:asset/` import scheme only works inside Figma Make. All such imports have been replaced with local file paths for the Vercel build.

## Deployment
- Build: `pnpm build` → outputs to `dist/`
- Deploy target: Vercel (import GitHub repo, framework auto-detected as Vite)
- `vercel.json` handles SPA routing and sets indexing headers so the site is not noindexed

## Person
**Florence Eze** — Product Designer and UX Researcher based in Lagos.
- Email: florencekey22@gmail.com
- LinkedIn: linkedin.com/in/florence-eze
- Dribbble: dribbble.com/janeyrexx
- Behance: behance.net/florenceeze1
- Resume: Google Drive (linked in contact section)
