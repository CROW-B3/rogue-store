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
 * Men's collection page displaying all men's clothing products
 */
export default function MenPage() {
  const menProducts = products.filter(
    (p) =>
      p.category === "apparel" && (p.gender === "men" || p.gender === "unisex"),
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
                <BreadcrumbPage>Men</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold">Men&apos;s Collection</h1>
            <p className="mt-2 text-muted-foreground">
              Discover premium clothing for the modern man. {menProducts.length}{" "}
              products available.
            </p>
          </motion.div>

          <div className="mt-12">
            <ProductGrid products={menProducts} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
