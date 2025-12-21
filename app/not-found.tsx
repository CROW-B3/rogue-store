import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

/**
 * Renders a 404 "Page Not Found" UI with prominent status, descriptive text, and actions to go home or browse products.
 *
 * @returns A React element rendering the 404 page with navigation buttons to "/" and "/products".
 */
export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                <Search className="mr-2 h-5 w-5" />
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
