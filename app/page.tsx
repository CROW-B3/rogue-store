"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

/**
 * Render the site's homepage composed of a hero, feature highlights, category grid, featured products, and newsletter sections.
 *
 * The component derives featured products from the products data (first four items) and uses categories to build the category grid.
 *
 * @returns The React element representing the homepage.
 */
export default function HomePage() {
  // Featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero images array
  const heroImages = ["/model-image-1.png", "/model-image-2.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-swap images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Parallax scroll effect for hero image
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div>
      {/* Premium Hero Section - Full Viewport */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <Container className="relative z-10">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left: Bold Typography */}
            <motion.div
              className="flex flex-col justify-center py-20 lg:py-32"
              style={{ opacity: textOpacity }}
            >
              <motion.p
                className="text-uppercase-sm text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                MODERN LUXURY
              </motion.p>
              <motion.h1
                className="text-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ELEVATE
                <span className="block">YOUR STYLE</span>
              </motion.h1>
              <motion.p
                className="mt-8 text-lg text-muted-foreground max-w-md font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover curated collections crafted for the modern minimalist.
              </motion.p>
              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button size="lg" className="group" asChild>
                  <Link href="/products">
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Parallax Image with Auto-Swap Animation */}
            <motion.div
              className="relative h-[60vh] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
              style={{ y: imageY }}
            >
              <div className="relative h-full w-full overflow-hidden bg-white">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={currentImageIndex}
                    initial={{
                      opacity: 0,
                      x: 100,
                      scale: 1.05,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: -100,
                      scale: 0.95,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[currentImageIndex]}
                      alt="Fashion Collection"
                      fill
                      className="object-contain"
                      style={{
                        objectPosition:
                          currentImageIndex === 0
                            ? "center center"
                            : "center bottom",
                      }}
                      priority={currentImageIndex === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Minimal Features */}
      <Section className="py-20 md:py-32">
        <Container>
          <motion.div
            className="grid gap-16 sm:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: Truck,
                title: "FREE SHIPPING",
                desc: "On orders over LKR 10,000",
              },
              {
                icon: Shield,
                title: "SECURE PAYMENT",
                desc: "100% secure transactions",
              },
              {
                icon: RotateCcw,
                title: "EASY RETURNS",
                desc: "30-day return policy",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="h-8 w-8 text-foreground transition-transform duration-300 group-hover:-translate-y-1" />
                  <h3 className="mt-6 text-uppercase-sm">{feature.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground font-light">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* Bold Categories - Asymmetric Grid */}
      <Section className="py-16 md:py-24">
        <Container className="max-w-[1600px]">
          <motion.h2
            className="text-headline mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            COLLECTIONS
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const isLarge = index === 0 || index === 1;
              return (
                <motion.div
                  key={category.id}
                  className={isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="group relative overflow-hidden image-zoom-hover block h-full"
                  >
                    <div
                      className={`relative image-loading ${isLarge ? "h-[550px]" : "h-[265px]"}`}
                    >
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover brightness-90 transition-all duration-700 ease-out group-hover:brightness-75 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-700" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                          {category.name.toUpperCase()}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Featured Products - Enhanced Grid */}
      <Section className="py-20 md:py-32">
        <Container className="max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-headline">FEATURED</h2>
              <p className="mt-4 text-muted-foreground font-light">
                Handpicked essentials
              </p>
            </motion.div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/products">
                <span className="text-uppercase-sm">View All</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Minimal Newsletter - Inverted Background */}
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
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
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
    </div>
  );
}
