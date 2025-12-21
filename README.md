# Rogue Store

Modern e-commerce storefront built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- Product catalog with filtering, search, and sorting
- Shopping cart with persistent storage
- Product variants (size, color, etc.)
- Checkout flow with order tracking
- Dark mode support
- Fully responsive design
- E2E tests with Playwright

## Tech Stack

- **Next.js 15** - App Router, React 19, TypeScript
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible components
- **Zustand** - State management
- **Framer Motion** - Animations
- **Playwright** - E2E testing
- **Cloudflare Pages** - Deployment

## Prerequisites

- Bun v1.3+

## Quick Start

### Using Docker

```bash
# Pull and run from Docker Hub
docker run -p 3000:3000 bitbybitb3/rogue-store:latest
```

Docker Hub: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)

### Local Development

```bash
# Clone and install
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
bun install

# Run dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
rogue-store/
├── app/              # Next.js pages
├── components/       # React components
│   ├── cart/        # Cart components
│   ├── layout/      # Layout components
│   ├── product/     # Product components
│   └── ui/          # UI primitives
├── data/            # Static data (products, categories)
├── lib/             # Utils & state management
└── tests/           # Playwright E2E tests
```

## Scripts

```bash
# Development
bun run dev              # Start dev server
bun run build            # Build for production
bun run lint             # Run ESLint
bun run format           # Format with Prettier

# Testing
bun run test             # Run Playwright tests
bun run test:ui          # Run tests in UI mode

# Deployment
bun run deploy           # Deploy to Cloudflare Pages
```

## Deployment

### Cloudflare Pages

```bash
wrangler login
bun run deploy
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CROW-B3/rogue-store)

## License

Private and proprietary.
