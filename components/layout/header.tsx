"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Render the application's responsive header with branding, navigation, and action controls.
 *
 * The header includes a logo link, desktop navigation for larger viewports, a toggleable mobile menu,
 * a search link, a theme switch, and a shopping cart button that displays an item count badge when nonzero.
 *
 * @returns The header JSX element containing branding, navigation links, and action buttons.
 */
export function Header() {
  const { itemCount, toggleCart } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  // Trigger bounce animation when cart count changes
  useEffect(() => {
    if (itemCount > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 600);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-70 text-foreground"
          >
            <Image
              src="/logo.svg"
              alt="rouge."
              width={200}
              height={60}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-uppercase-sm text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <Link href="/products">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="hover:bg-transparent text-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>

            <motion.div
              animate={
                cartBounce
                  ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="relative hover:bg-transparent text-foreground"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <AnimatePresence mode="wait">
                  {itemCount > 0 && (
                    <motion.div
                      key={itemCount}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                    >
                      <Badge
                        data-testid="cart-badge"
                        variant="default"
                        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-[10px] font-bold bg-primary text-primary-foreground"
                      >
                        {itemCount}
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-transparent text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t py-6 md:hidden">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-uppercase-sm px-0 py-2 transition-colors hover:text-foreground/60"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
