"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Price } from "@/components/ui/price";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

/**
 * Render a clickable product card for the given product.
 *
 * Displays the product image, up to two tag badges (mapped to visual variants), the title, price, optional rating, and a two-line truncated description. The card links to the product page using `product.slug` and includes a subtle entrance animation and image hover effect.
 *
 * @param product - The product data used to populate the card (expects properties like `slug`, `images`, `title`, `price`, `rating`, `description`, and `tags`).
 * @returns The JSX element representing the product card.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}

            {/* Badges */}
            {product.tags.length > 0 && (
              <div className="absolute left-2 top-2 flex flex-wrap gap-1">
                {product.tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant={
                      tag === "new"
                        ? "success"
                        : tag === "bestseller"
                          ? "warning"
                          : "default"
                    }
                    className="capitalize"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold transition-colors group-hover:text-primary">
              {product.title}
            </h3>

            <div className="mt-2 flex items-center justify-between">
              <Price amount={product.price} className="text-lg font-bold" />
              {product.rating && (
                <Rating rating={product.rating} size="sm" showValue={false} />
              )}
            </div>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
