"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { categories } from "@/data/categories";

export function CategoriesSection() {
  return (
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
                  href={`/${category.slug}`}
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
  );
}
