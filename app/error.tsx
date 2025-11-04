"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <AlertTriangle className="h-16 w-16 text-destructive" />
          <h2 className="mt-4 text-3xl font-bold">Something went wrong!</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re sorry for the inconvenience. Please try again.
          </p>
          <Button size="lg" className="mt-8" onClick={reset}>
            Try Again
          </Button>
        </div>
      </Container>
    </Section>
  );
}
