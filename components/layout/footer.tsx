"use client";

import Link from "next/link";
import { Container } from "./container";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    shop: [
      { name: "All Products", href: "/products" },
      { name: "Apparel", href: "/products?category=apparel" },
      { name: "Accessories", href: "/products?category=accessories" },
      { name: "Home", href: "/products?category=home" },
      { name: "Tech", href: "/products?category=tech" },
    ],
    support: [
      { name: "Contact", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Size Guide", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socials = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  R
                </span>
              </div>
              <span className="text-xl font-bold">Rouge Store</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Discover premium products crafted with care. Quality you can
              trust, style you&apos;ll love.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold">Stay Updated</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe to our newsletter for exclusive offers.
              </p>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  aria-label="Email for newsletter"
                />
                <Button type="submit">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-4 space-y-3">
              {links.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="mt-4 space-y-3">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rouge Store. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
