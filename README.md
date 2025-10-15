# Egress Experts

Marketing website for Egress Experts, a basement window and door egress specialist company based in Ottawa, Ontario.

## About

Egress Experts specializes in turning ordinary basement windows into code-compliant egress systems. They manage the entire process from design to installation, coordinating all required trades and providing one point of contact for homeowners.

## Tech Stack

- **Next.js 15.5.4** with App Router and Turbopack
- **React 19.1.0**
- **TypeScript**
- **Tailwind CSS v4**
- **Motion 12** (formerly Framer Motion)
- **shadcn/ui** components with Aceternity UI Pro

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Format code with Prettier
npx prettier --write .
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by feature
- `providers/` - React context providers (theme, etc.)
- `lib/` - Utility functions
- `icons/` - Custom icon components
- `illustrations/` - Static assets
- `public/` - Public assets (images, etc.)

## Key Features

- Responsive design optimized for all devices
- Dark mode support with next-themes
- Optimized AVIF images for fast loading
- Smooth animations with Motion
- SEO-friendly structure
- Accessibility compliant

## Deployment

This site is configured for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

The site is production-ready and optimized for Vercel's Edge Network.

## Notes

See [CLAUDE.md](./CLAUDE.md) for development guidelines and project context.
