"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { toast } from "sonner";

export function NewsletterSection() {
  return (
    <Section className="bg-primary text-primary-foreground py-32">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-headline">STAY IN THE LOOP</h2>
          <p className="mt-6 opacity-60 font-light text-lg">
            Subscribe for exclusive drops and early access
          </p>
          <form
            className="mt-12 flex flex-col sm:flex-row gap-4 mx-auto max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email") as string;
              if (email) {
                toast.info(
                  "Newsletter demo - submission not yet connected to backend",
                );
                e.currentTarget.reset();
              }
            }}
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:opacity-40 focus:border-primary-foreground h-14"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="h-14 px-8 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </Container>
    </Section>
  );
}
