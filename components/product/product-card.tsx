"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Price } from "@/components/ui/price";

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
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="overflow-hidden">
        {/* Image - Borderless, Clean */}
        <div className="relative aspect-square overflow-hidden bg-muted image-loading mb-4">
          {product.images[0] ? (
            <>
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted image-loading">
              <span className="text-muted-foreground text-sm">No image</span>
            </div>
          )}

          {/* Minimal Badge - Only New */}
          {product.tags.includes("new") && (
            <div className="absolute left-3 top-3">
              <Badge
                variant="default"
                className="bg-primary text-primary-foreground text-[10px] font-medium uppercase tracking-wider px-2 py-1"
              >
                New
              </Badge>
            </div>
          )}
        </div>

        {/* Content - Minimal Text Only */}
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-wide font-medium transition-colors">
            {product.title}
          </h3>
          <Price amount={product.price} className="text-base font-bold" />
        </div>
      </div>
    </Link>
  );
}
