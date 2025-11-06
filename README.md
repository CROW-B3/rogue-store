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

- Node.js v20+
- pnpm v8+ (or npm/yarn)

## Quick Start

```bash
# Clone and install
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
pnpm install

# Run dev server
pnpm dev
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
pnpm dev                 # Start dev server
pnpm build               # Build for production
pnpm lint                # Run ESLint
pnpm format              # Format with Prettier

# Testing
pnpm test                # Run Playwright tests
pnpm test:ui             # Run tests in UI mode

# Deployment
pnpm deploy              # Deploy to Cloudflare Pages
```

## Deployment

### Cloudflare Pages

```bash
wrangler login
pnpm deploy
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CROW-B3/rogue-store)

## License

Private and proprietary.
