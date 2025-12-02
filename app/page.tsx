"use client";

import { ProductSection } from "@/components/product/product-section";
import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { products } from "@/data/products";
import { WebVitals } from "./_components/web-vitals";

export default function HomePage() {
  WebVitals();
  const newArrivals = products
    .filter((p) => p.tags.includes("new"))
    .slice(0, 8);
  const bestSellers = products
    .filter((p) => p.tags.includes("bestseller"))
    .slice(0, 4);

  return (
    <div>
      <HeroSection />

      {newArrivals.length > 0 && (
        <ProductSection
          title="NEW ARRIVALS"
          subtitle="Fresh picks just for you"
          products={newArrivals}
          columns={4}
          className="py-20 md:py-32"
        />
      )}

      <CategoriesSection />

      {bestSellers.length > 0 && (
        <ProductSection
          title="BEST SELLERS"
          subtitle="Customer favorites"
          products={bestSellers}
          columns={4}
          className="bg-secondary/30"
        />
      )}

      <NewsletterSection />
    </div>
  );
}
