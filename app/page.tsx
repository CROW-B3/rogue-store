"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";

/**
 * Render the site's homepage composed of a hero, feature highlights, category grid, featured products, and newsletter sections.
 *
 * The component derives featured products from the products data (first four items) and uses categories to build the category grid.
 *
 * @returns The React element representing the homepage.
 */
export default function HomePage() {
  // Featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Elevate Your Style
                <span className="block text-primary">Shop With Confidence</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Discover our curated collection of premium products. From
                fashion to tech, we bring you quality items that match your
                lifestyle.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products?tag=new">View New Arrivals</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                alt="Shopping hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Free Shipping</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                On orders over LKR 10,000
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Secure Payment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                100% secure transactions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Easy Returns</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                30-day return policy
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Categories */}
      <Section className="bg-muted/30">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <p className="mt-2 text-muted-foreground">
              Explore our diverse range of products
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
              >
                <div className="relative aspect-square">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="mt-1 text-sm opacity-90">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Products */}
      <Section>
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">
                Handpicked favorites just for you
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Stay in the Loop</h2>
            <p className="mt-4 text-primary-foreground/90">
              Subscribe to our newsletter for exclusive offers, new arrivals,
              and style tips.
            </p>
            <form
              className="mt-8 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-0 px-4 py-3 text-foreground"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </div>
  );
}