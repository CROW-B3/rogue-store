"use client";

import { useCartStore } from "@/lib/cart-store";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartLineItem } from "./cart-line-item";
import { Price } from "@/components/ui/price";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const { isOpen, closeCart, items, summary } = useCartStore();

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/50"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l bg-background shadow-xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeCart}
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-auto p-4">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">
                      Your cart is empty
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Add some products to get started
                    </p>
                    <Button className="mt-6" onClick={closeCart} asChild>
                      <Link href="/products">Continue Shopping</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <CartLineItem
                        key={`${item.product.id}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <Price amount={summary.subtotal} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <Price amount={summary.shipping} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <Price amount={summary.tax} />
                    </div>
                    <div className="flex justify-between border-t pt-2 text-lg font-bold">
                      <span>Total</span>
                      <Price amount={summary.total} />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Button
                      className="w-full"
                      size="lg"
                      asChild
                      onClick={closeCart}
                    >
                      <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                      onClick={closeCart}
                    >
                      <Link href="/cart">View Cart</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
