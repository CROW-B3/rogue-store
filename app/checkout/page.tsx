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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Price } from "@/components/ui/price";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { generateOrderNumber } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { WebVitals } from "../_components/web-vitals";

/**
 * Renders the checkout page with an order summary and payment summary, handles client-side-only rendering and navigation for empty carts, and provides a "Place Order" action that clears the cart and navigates to a success page.
 *
 * @returns The checkout page JSX including the list of cart items, a payment summary (subtotal, shipping, tax, total), and a "Place Order" button that finalizes the order and redirects to the success screen.
 */
export default function CheckoutPage() {
  WebVitals();
  const { items, summary, clearCart } = useCartStore();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && items.length === 0) {
      router.push("/cart");
    }
  }, [isClient, items.length, router]);

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
              <BreadcrumbLink asChild>
                <Link href="/cart">Cart</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Checkout</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mt-6 text-3xl font-bold">Checkout</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
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
                  <Separator className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
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
                  By placing this order, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline hover:text-foreground"
                  >
                    Terms and Conditions
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
