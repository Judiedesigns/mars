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
      ProjectModal.tsx               # Full-screen project modal, keyboard nav (←→ ESC 1-4)
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
    image-2.png, image-4.png         # Used in ProjectModal for projects 3 and 4
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
3. **Selected work** — 2×2 grid of 4 project cards; clicking opens ProjectModal
4. **Writing** — 2 Medium article links with thumbnails
5. **Contact/footer** — Email (click to copy), social links with dot separators (Resume · LinkedIn · Dribbble · Behance)
6. **ScatteredReel** — Full-width horizontal ticker of 11 mobile design screenshots, sits below the footer as a visual finale

## Projects (in ProjectModal)
| # | Title | Role | Year |
|---|---|---|---|
| 1 | Virtual Development | No code Development | 2025 |
| 2 | Shop Easy | Design, Research & Strategy | 2024 |
| 3 | Dashboard Design | Data, UX | 2026 |
| 4 | Vibe Code Collection | Vibecoding | 2026 |

Projects 3 and 4 use rendered React components (DashboardImage, VibeCodeImage) as their thumbnails instead of static images.

## Known issues / TODOs
- **Project thumbnail images for projects 1 and 2 are placeholders.** The originals lived on Figma's CDN (`figma:asset/` scheme) and are not available locally. Currently using `img5.png` (project 1) and `image-6.png` (project 2). Replace these with Florence's actual screenshots when available.
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
