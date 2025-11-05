"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { Price } from "@/components/ui/price";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

/**
 * Render the shopping cart page with either an empty-cart view or a populated cart and order summary.
 *
 * The empty view shows a centered message and a call-to-action to continue shopping. The populated view
 * lists cart line items and displays an order summary with subtotal, shipping, tax, total, and actions
 * to proceed to checkout or continue shopping.
 *
 * @returns The cart page JSX element that reflects the current cart state (empty or populated).
 */
export default function CartPage() {
  const { items, summary } = useCartStore();

  if (items.length === 0) {
    return (
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Cart" }]} />
          <div className="mt-12 flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground" />
            <h1 className="mt-6 text-2xl font-bold">Your cart is empty</h1>
            <p className="mt-2 text-muted-foreground">
              Add some products to get started
            </p>
            <Button className="mt-6" size="lg" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Cart" }]} />

        <h1 className="mt-6 text-3xl font-bold">Shopping Cart</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <CartLineItem key={`${item.product.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <Price amount={summary.subtotal} />
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <Price amount={summary.shipping} />
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <Price amount={summary.tax} />
                </div>
                <div className="flex justify-between border-t pt-3 text-lg font-bold">
                  <span>Total</span>
                  <Price amount={summary.total} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}