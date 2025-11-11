"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";
import { Product } from "@/lib/types";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface ProductSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * ProductSection component displays a categorized section of products
 * with a title, optional subtitle, and responsive grid layout.
 *
 * @param props - Component props
 * @returns Product section with animated grid
 */
export function ProductSection({
  id,
  title,
  subtitle,
  products,
  columns = 4,
  className = "",
}: ProductSectionProps) {
  if (products.length === 0) return null;

  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-headline mb-3">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground font-light">{subtitle}</p>
          )}
        </motion.div>

        {/* Products Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
