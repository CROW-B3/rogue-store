"use client";

import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/lib/types";
import { useCartStore } from "@/lib/cart-store";
import { Price } from "@/components/ui/price";
import { QuantityStepper } from "@/components/product/quantity-stepper";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface CartLineItemProps {
  item: CartItem;
}

/**
 * Renders a single shopping cart row with product thumbnail, title, optional variants, unit price, quantity control, remove action, and line total.
 *
 * @param item - Cart line data containing `product` (with id, slug, title, images, price), `quantity`, and optional `selectedVariants`
 * @returns The rendered cart line item element
 */
export function CartLineItem({ item }: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const lineTotal = item.product.price * item.quantity;

  return (
    <div className="flex gap-4 rounded-lg border p-4">
      {/* Product Image */}
      <Link
        href={`/products/${item.product.slug}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted"
      >
        <Image
          src={item.product.images[0]}
          alt={item.product.title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between gap-2">
          <div className="flex-1">
            <Link
              href={`/products/${item.product.slug}`}
              className="font-medium hover:text-primary"
            >
              {item.product.title}
            </Link>

            {/* Variants */}
            {item.selectedVariants && (
              <div className="mt-1 text-sm text-muted-foreground">
                {Object.entries(item.selectedVariants).map(([key, value]) => (
                  <span key={key} className="mr-2">
                    {value}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-1">
              <Price
                amount={item.product.price}
                className="text-sm font-medium"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => removeItem(item.product.id, item.selectedVariants)}
            aria-label="Remove item"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Quantity & Total */}
        <div className="mt-2 flex items-center justify-between">
          <QuantityStepper
            value={item.quantity}
            onChange={(quantity) =>
              updateQuantity(item.product.id, quantity, item.selectedVariants)
            }
          />
          <Price amount={lineTotal} className="font-bold" />
        </div>
      </div>
    </div>
  );
}