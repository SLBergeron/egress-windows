# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This project is converting the Agenforce marketing template into a website for **Egress Experts** — a basement window and door egress specialist company based in Ottawa, Ontario.

The site will be deployed on **Vercel**.

## Business Context

**Egress Experts** specializes exclusively in turning ordinary basement windows into code-compliant egress systems. They also create new openings to fit homeowner visions.

**What They Do:**
- Manage the entire process from design to installation
- Coordinate all required trades: cutting, excavation, window installation, well setup, drainage, and finishing
- Work through a trusted network of subcontracted professionals
- Provide one point of contact for homeowners
- Handle scheduling, permits, and inspections
- Ensure full compliance with Ontario Building Code egress requirements

**Target Market:**
- Homeowners finishing basements
- Homeowners adding basement bedrooms or rental units
- Builders needing reliable compliance solutions

**Core Value Proposition:**
Safety, simplicity, and code compliance. They turn basements into brighter, safer, legal living spaces — one window at a time.

## Development Philosophy

**Workflow:** Follow a **Research > Plan > Build** cycle for all changes.

**Approach:** Prioritize **surgical edits**. Modify existing components and content rather than rebuilding from scratch.

**Tone of Voice:**
- Direct and clear
- 5th grade reading level
- Simple language — no fancy words
- Clarity above all else

**Role:** You are the developer, not the designer. Focus on implementation and code quality.

## Technical Overview

This is a Next.js 15 marketing website built with TypeScript, Tailwind CSS v4, and Motion (formerly Framer Motion). The project uses the App Router architecture and is configured for Turbopack builds. Originally based on the Agenforce template from Aceternity UI Pro.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Format code with Prettier (includes Tailwind class sorting)
npx prettier --write .
```

Development server runs on `http://localhost:3000`.

## Architecture

### Application Structure

The project follows Next.js App Router conventions:

- **`app/`** - Next.js App Router directory
  - `layout.tsx` - Root layout with Navbar, Footer, ThemeProvider, and font configuration (Manrope, Inter)
  - `page.tsx` - Home page that composes section components (Hero, Features, Pricing, etc.)
  - `globals.css` - Tailwind v4 imports and CSS custom properties for theming (light/dark modes using OKLCH color space)

- **`components/`** - React components organized by feature
  - Landing page sections: `hero.tsx`, `features/`, `features-secondary/`, `features-tertiary/`, `pricing.tsx`, `faqs.tsx`, `outcomes.tsx`, `speed.tsx`, `logo-cloud.tsx`
  - Layout: `navbar.tsx`, `footer.tsx`, `container.tsx`
  - UI primitives: `ui/button.tsx`, `ui/dotted-glow-background.tsx`
  - Utility: `heading.tsx`, `subheading.tsx`, `gradient-divider.tsx`, `mode-toggle.tsx`, `logo.tsx`

- **`providers/`** - React context providers
  - `theme-provider.tsx` - Wraps next-themes for dark mode

- **`lib/`** - Utility functions
  - `utils.ts` - Contains `cn()` helper for merging Tailwind classes with clsx and tailwind-merge

- **`icons/`** and **`illustrations/`** - Static assets for the marketing site

### Component Patterns

- **Section Components**: High-level landing page sections (Features, Pricing, etc.) use the `Container` wrapper component for consistent layout
- **Feature Cards**: The features sections use a `Card` component with `CardSkeleton`, `CardContent`, `CardTitle`, and `CardCTA` subcomponents, with custom skeleton illustrations
- **Theming**: Uses `next-themes` with CSS custom properties defined in `globals.css`. Color values use OKLCH format for perceptually uniform colors

### Configuration

- **Path Aliases**: `@/*` maps to root directory (configured in `tsconfig.json`)
- **shadcn/ui**: Configured in `components.json` with "new-york" style, using Lucide icons and custom Aceternity registry
- **Image Domains**: Allows images from `assets.aceternity.com` and `images.unsplash.com` (configured in `next.config.ts`)

## Key Technologies

- **Next.js 15.5.4** with App Router and Turbopack
- **React 19.1.0**
- **Tailwind CSS v4** (PostCSS-based)
- **Motion 12** (formerly Framer Motion) for animations
- **next-themes** for dark mode support
- **Lucide React** and **Tabler Icons** for icons
- **shadcn/ui** components (Button, etc.) with Aceternity UI Pro components

## Styling Guidelines

- Use Tailwind v4 CSS custom properties (defined in `globals.css`)
- Leverage the `cn()` utility from `@/lib/utils` for conditional classes
- Prettier automatically sorts Tailwind classes via `prettier-plugin-tailwindcss`
- Dark mode classes are scoped with `.dark` custom variant

## Notes

- This is a marketing/landing page template, not a full application
- The codebase is pre-built with complete sections that can be customized
- Custom fonts (Manrope for headings, Inter for body) are loaded via next/font
