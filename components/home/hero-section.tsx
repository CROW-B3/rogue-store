"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/container";
import { heroImages } from "@/constants/hero";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid gap-0 lg:grid-cols-2">
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
              className="mt-16 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-uppercase-sm text-muted-foreground mb-3">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-5 w-5 rotate-90 text-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[60vh] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
            style={{ y: imageY }}
          >
            <div className="relative h-full w-full overflow-hidden bg-white">
              <AnimatePresence mode="wait">
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
  );
}
