"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";

/**
 * Render the order confirmation UI that displays the order number from the URL and provides navigation actions.
 *
 * Reads the "order" search parameter (defaults to "N/A" if missing) and renders a centered confirmation layout
 * with a check icon, order summary card, confirmation messages, and action buttons for continuing shopping or
 * returning to the home page.
 *
 * @returns The React element for the order confirmation page.
 */
function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") || "N/A";

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100"
          >
            <CheckCircle className="h-12 w-12 text-green-600" />
          </motion.div>

          <h1 className="mt-8 text-3xl font-bold">Order Confirmed!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="mt-2 text-2xl font-bold">{orderNumber}</p>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            We&apos;ve sent a confirmation email with your order details.
            You&apos;ll receive another email when your order ships.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

/**
 * Page component that renders the order confirmation UI.
 *
 * Wraps the order success content with a React Suspense boundary that shows a simple
 * loading fallback while the content is resolving.
 *
 * @returns A React element containing the order success content wrapped with a Suspense fallback.
 */
export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}