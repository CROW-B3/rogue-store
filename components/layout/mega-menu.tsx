"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface SubCategory {
  name: string;
  href: string;
}

interface Collection {
  name: string;
  href: string;
}

interface MegaMenuItem {
  name: string;
  href: string;
  subcategories?: SubCategory[];
  collections?: Collection[];
}

const menuItems: MegaMenuItem[] = [
  {
    name: "MEN",
    href: "/men",
    subcategories: [
      { name: "Tanks", href: "/men?subcategory=tanks" },
      { name: "T-Shirts", href: "/men?subcategory=tshirts" },
      { name: "Shirts", href: "/men?subcategory=shirts" },
      { name: "Hoodies & Jackets", href: "/men?subcategory=hoodies-jackets" },
      { name: "Jeans", href: "/men?subcategory=jeans" },
      { name: "Shorts", href: "/men?subcategory=shorts" },
      { name: "Joggers & Pants", href: "/men?subcategory=joggers-pants" },
    ],
    collections: [
      { name: "Premium", href: "/men?collection=premium" },
      { name: "Oversize", href: "/men?collection=oversize" },
      { name: "Essentials", href: "/men?collection=essentials" },
    ],
  },
  {
    name: "WOMEN",
    href: "/women",
    subcategories: [
      { name: "Tanks & Tops", href: "/women?subcategory=tanks-tops" },
      { name: "T-Shirts", href: "/women?subcategory=tshirts" },
      { name: "Dresses", href: "/women?subcategory=dresses" },
      { name: "Bottoms", href: "/women?subcategory=bottoms" },
      { name: "Activewear", href: "/women?subcategory=activewear" },
      { name: "Outerwear", href: "/women?subcategory=outerwear" },
    ],
    collections: [
      { name: "Premium", href: "/women?collection=premium" },
      { name: "Essentials", href: "/women?collection=essentials" },
      { name: "Seamless", href: "/women?collection=seamless" },
    ],
  },
  {
    name: "ACCESSORIES",
    href: "/accessories",
    subcategories: [
      { name: "Bags", href: "/accessories?subcategory=bags" },
      { name: "Watches", href: "/accessories?subcategory=watches" },
      { name: "Sunglasses", href: "/accessories?subcategory=sunglasses" },
      { name: "Wallets", href: "/accessories?subcategory=wallets" },
      { name: "Jewelry", href: "/accessories?subcategory=jewelry" },
    ],
  },
  {
    name: "GIFTS",
    href: "/gifts",
  },
];

/**
 * MegaMenu component that displays a sophisticated navigation dropdown
 * with subcategories and collections for each main category.
 *
 * @returns The mega menu navigation component
 */
export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 text-uppercase-sm transition-colors py-2 group ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.name}
              {(item.subcategories || item.collections) && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeMenu === item.name ? "rotate-180" : ""
                  }`}
                />
              )}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-foreground transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeMenu === item.name &&
                (item.subcategories || item.collections) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50"
                  >
                    <div className="bg-background border border-border shadow-premium-lg rounded-md p-8 min-w-[600px]">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Left Column: Subcategories */}
                        {item.subcategories && (
                          <div>
                            <h3 className="text-uppercase-sm text-foreground mb-4 font-semibold">
                              {item.name}
                            </h3>
                            <ul className="space-y-3">
                              {item.subcategories.map((sub) => (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.href}
                                    className="text-sm text-muted-foreground hover:text-foreground/70 transition-colors block py-1"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Middle Column: Shop All */}
                        <div>
                          <h3 className="text-uppercase-sm text-foreground mb-4 font-semibold">
                            SHOP ALL
                          </h3>
                          <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground/70 transition-colors block py-1"
                            onClick={() => setActiveMenu(null)}
                          >
                            View All {item.name}
                          </Link>
                        </div>

                        {/* Right Column: Collections */}
                        {item.collections && (
                          <div>
                            <h3 className="text-uppercase-sm text-foreground mb-4 font-semibold">
                              COLLECTIONS
                            </h3>
                            <ul className="space-y-3">
                              {item.collections.map((collection) => (
                                <li key={collection.name}>
                                  <Link
                                    href={collection.href}
                                    className="text-sm text-muted-foreground hover:text-foreground/70 transition-colors block py-1"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    {collection.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
