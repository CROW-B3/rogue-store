# Rogue Store

A modern, full-featured e-commerce storefront built with Next.js 15, React 19, and Tailwind CSS v4. This project showcases a complete shopping experience with cart management, product filtering, and a responsive design system.

## Features

### Core Functionality

- **Product Catalog**: Browse 24+ products across multiple categories (Apparel, Accessories, Home, Tech)
- **Advanced Filtering**: Filter products by category, price range, tags, and search query
- **Shopping Cart**: Full cart management with quantity adjustments and persistent storage
- **Product Variants**: Select product variants (size, color, etc.) before adding to cart
- **Checkout Flow**: Complete checkout process with order summary and success page
- **Dark Mode**: System-wide theme toggle with persistent preference

### User Experience

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Image Galleries**: Product image galleries with thumbnail navigation
- **Search & Sort**: Debounced search and multiple sorting options (price, newest, relevance)
- **Toast Notifications**: User-friendly feedback for cart actions
- **Breadcrumb Navigation**: Clear navigation context throughout the app
- **Loading States**: Skeleton loaders for better perceived performance

### Developer Experience

- **TypeScript**: Full type safety across the entire codebase
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **State Management**: Zustand for efficient global state management
- **Component Library**: Reusable UI components with class-variance-authority
- **Animation**: Smooth animations with Framer Motion
- **Icons**: Lucide React icon library

## Tech Stack

### Core Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Styling

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[class-variance-authority](https://cva.style/)** - Component variant management
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### State Management & Utils

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Class name utilities

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files

### Deployment

- **[OpenNext for Cloudflare](https://opennext.js.org/)** - Deploy to Cloudflare Pages
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** - Cloudflare CLI

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v20.x or higher
- **pnpm**: v8.x or higher (recommended) or npm/yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will automatically reload when you make changes to the code.

## Project Structure

```
rogue-store/
├── app/                          # Next.js App Router pages
│   ├── cart/                     # Shopping cart page
│   ├── checkout/                 # Checkout flow
│   │   └── success/              # Order success page
│   ├── products/                 # Product listing & detail pages
│   │   └── [slug]/               # Dynamic product detail page
│   ├── error.tsx                 # Error boundary
│   ├── layout.tsx                # Root layout
│   ├── not-found.tsx             # 404 page
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── cart/                     # Cart-related components
│   │   ├── cart-drawer.tsx       # Slide-in cart drawer
│   │   └── cart-line-item.tsx    # Cart item component
│   ├── layout/                   # Layout components
│   │   ├── container.tsx         # Content container
│   │   ├── footer.tsx            # Site footer
│   │   ├── header.tsx            # Site header with nav
│   │   ├── section.tsx           # Section wrapper
│   │   └── theme-toggle.tsx      # Dark mode toggle
│   ├── product/                  # Product components
│   │   ├── product-card.tsx      # Product card
│   │   ├── product-filters.tsx   # Filter sidebar
│   │   ├── product-gallery.tsx   # Image gallery
│   │   ├── product-grid.tsx      # Responsive product grid
│   │   ├── quantity-stepper.tsx  # Quantity selector
│   │   ├── search-bar.tsx        # Search input
│   │   ├── sort-control.tsx      # Sort dropdown
│   │   └── variant-selector.tsx  # Variant selection
│   └── ui/                       # Reusable UI components
│       ├── badge.tsx             # Badge component
│       ├── breadcrumb.tsx        # Breadcrumb navigation
│       ├── button.tsx            # Button component
│       ├── card.tsx              # Card component
│       ├── checkbox.tsx          # Checkbox component
│       ├── input.tsx             # Input component
│       ├── price.tsx             # Price display
│       ├── rating.tsx            # Star rating
│       ├── separator.tsx         # Divider
│       ├── skeleton.tsx          # Loading skeleton
│       ├── slider.tsx            # Range slider
│       ├── tabs.tsx              # Tab component
│       └── toast-provider.tsx    # Toast notifications
├── data/                         # Static data
│   ├── categories.ts             # Product categories
│   ├── products.ts               # Product catalog
│   └── tags.ts                   # Product tags
├── lib/                          # Utility functions & stores
│   ├── cart-store.ts             # Cart state management
│   ├── product-filters.ts        # Product filtering logic
│   ├── theme-store.ts            # Theme state management
│   ├── types.ts                  # TypeScript types
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
├── .eslintrc.json                # ESLint configuration
├── .prettierrc                   # Prettier configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```

## Available Scripts

### Development

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
```

### Code Quality

```bash
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors automatically
pnpm format       # Format code with Prettier
```

### Deployment

```bash
pnpm build:cloudflare    # Build for Cloudflare Pages
pnpm deploy              # Build and deploy to Cloudflare
pnpm preview             # Preview Cloudflare deployment locally
pnpm cf-typegen          # Generate Cloudflare types
```

## Development

### Adding New Products

Products are defined in `data/products.ts`. To add a new product:

```typescript
{
  id: "25",
  slug: "product-slug",
  title: "Product Name",
  description: "Product description",
  category: "apparel", // or "accessories", "home", "tech"
  tags: ["new", "bestseller"],
  price: 5000, // Price in LKR
  currency: "LKR",
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  variants: [
    { id: "size", name: "Size", values: ["S", "M", "L"] },
    { id: "color", name: "Color", values: ["Black", "White"] }
  ],
  rating: 4.5,
  createdAt: "2025-01-20T00:00:00Z",
  specs: {
    Material: "Cotton",
    Origin: "Sri Lanka"
  }
}
```

### Adding New Categories

Categories are defined in `data/categories.ts`:

```typescript
{
  id: "5",
  name: "Category Name",
  slug: "category-slug",
  description: "Category description",
  image: "https://example.com/category-image.jpg"
}
```

### State Management

The app uses Zustand for state management:

- **Cart Store** (`lib/cart-store.ts`): Manages cart items, quantities, and calculations
- **Theme Store** (`lib/theme-store.ts`): Manages dark/light theme preference

Both stores persist to localStorage automatically.

### Styling

The project uses Tailwind CSS v4 with a custom design system:

- Colors, spacing, and typography are defined in `app/globals.css`
- Dark mode is implemented using CSS variables
- Components use the `cn()` utility for conditional classes

## Deployment

### Cloudflare Pages

This project is configured to deploy to Cloudflare Pages using OpenNext:

1. Install Wrangler CLI:

```bash
pnpm add -g wrangler
```

2. Login to Cloudflare:

```bash
wrangler login
```

3. Deploy:

```bash
pnpm deploy
```

### Vercel

Alternatively, deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CROW-B3/rogue-store)

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Add your environment variables here
# CLOUDFLARE_API_TOKEN=your_token_here
```

## Code Quality

The project includes several code quality tools:

- **Pre-commit Hooks**: Husky runs lint-staged before each commit
- **Lint-staged**: Automatically formats and lints staged files
- **ESLint**: Enforces code style and catches errors
- **Prettier**: Ensures consistent code formatting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Acknowledgments

- Design inspiration from modern e-commerce platforms
- UI components built with Radix UI primitives
- Product images from Unsplash
