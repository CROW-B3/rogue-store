"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductGrid } from "@/components/product/product-grid";
import { products } from "@/data/products";
import { Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Gifts page displaying curated gift products
 */
export default function GiftsPage() {
  // Show premium and bestseller products as gift suggestions
  const giftProducts = products.filter(
    (p) => p.tags.includes("premium") || p.tags.includes("bestseller"),
  );

  return (
    <div>
      <Section>
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Gifts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold">Gift Guide</h1>
            <p className="mt-2 text-muted-foreground">
              Curated premium gifts for every occasion. {giftProducts.length}{" "}
              products available.
            </p>
          </motion.div>

          <div className="mt-12">
            <ProductGrid products={giftProducts} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
