"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Price } from "@/components/ui/price";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { generateOrderNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { items, summary, clearCart } = useCartStore();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (items.length === 0) {
      router.push("/cart");
    }
  }, [items.length, router]);

  if (!isClient) {
    return null;
  }

  if (items.length === 0) {
    return null;
  }

  const handlePlaceOrder = () => {
    const orderNumber = generateOrderNumber();
    clearCart();
    router.push(`/checkout/success?order=${orderNumber}`);
  };

  return (
    <Section>
      <Container>
        <Breadcrumbs
          items={[{ label: "Cart", href: "/cart" }, { label: "Checkout" }]}
        />

        <h1 className="mt-6 text-3xl font-bold">Checkout</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="mt-6 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.product.id}-${index}`}
                    className="flex gap-4"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h3 className="font-medium">{item.product.title}</h3>
                      {item.selectedVariants && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {Object.values(item.selectedVariants).join(", ")}
                        </p>
                      )}
                      <p className="mt-1 text-sm">
                        Qty: {item.quantity} ×{" "}
                        <Price amount={item.product.price} />
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Price
                        amount={item.product.price * item.quantity}
                        className="font-bold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div>
            <div className="sticky top-24 rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold">Payment Summary</h2>

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

              <Button
                size="lg"
                className="mt-6 w-full"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By placing this order, you agree to our Terms and Conditions
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
