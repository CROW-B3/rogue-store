"use client";

import { notFound } from "next/navigation";
import { useState, use } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductGallery } from "@/components/product/product-gallery";
import { VariantSelector } from "@/components/product/variant-selector";
import { QuantityStepper } from "@/components/product/quantity-stepper";
import { Rating } from "@/components/ui/rating";
import { Price } from "@/components/ui/price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { useCartStore } from "@/lib/cart-store";
import { ShoppingCart, Check, Home } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Render the product detail page for the route identified by `params.slug`.
 *
 * Renders product gallery, metadata, variants selector (if available), quantity controls, add-to-cart flow, and tabs for description, specifications, and shipping. If no product matches the slug, triggers a 404 via `notFound()`. Selecting variants and pressing "Add to Cart" will validate required variant selections, add the specified quantity of the product to the cart store, and produce success or error toasts.
 *
 * @param params - Route parameters containing a `slug` string identifying the product
 * @returns The JSX element for the product detail page
 */
export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const { addItem } = useCartStore();

  const handleVariantChange = (variantId: string, value: string) => {
    setSelectedVariants((prev) => ({ ...prev, [variantId]: value }));
  };

  const handleAddToCart = () => {
    // Check if all variants are selected
    if (product.variants) {
      const allSelected = product.variants.every(
        (variant) => selectedVariants[variant.id],
      );
      if (!allSelected) {
        toast.error("Please select all options");
        return;
      }
    }

    // Add to cart
    for (let i = 0; i < quantity; i++) {
      addItem(product, product.variants ? selectedVariants : undefined);
    }

    toast.success(
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4" />
        <span>Added to cart!</span>
      </div>,
    );
  };

  return (
    <div>
      <Section>
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery images={product.images} title={product.title} />

            {/* Details */}
            <div>
              {/* Badges */}
              {product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={
                        tag === "new"
                          ? "success"
                          : tag === "bestseller"
                            ? "warning"
                            : "default"
                      }
                      className="capitalize"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <h1 className="mt-4 text-3xl font-bold">{product.title}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="mt-4">
                  <Rating rating={product.rating} />
                </div>
              )}

              {/* Price */}
              <div className="mt-6">
                <Price amount={product.price} className="text-3xl font-bold" />
              </div>

              {/* Description */}
              <p className="mt-6 text-muted-foreground">
                {product.description}
              </p>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-8">
                  <VariantSelector
                    variants={product.variants}
                    selectedVariants={selectedVariants}
                    onChange={handleVariantChange}
                  />
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="mt-8 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Quantity
                  </label>
                  <QuantityStepper value={quantity} onChange={setQuantity} />
                </div>

                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </motion.div>
              </div>

              {/* Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="specs">
                  <TabsList className="w-full">
                    {product.specs && (
                      <TabsTrigger value="specs" className="flex-1">
                        Specifications
                      </TabsTrigger>
                    )}
                    <TabsTrigger value="shipping" className="flex-1">
                      Shipping
                    </TabsTrigger>
                  </TabsList>

                  {product.specs && (
                    <TabsContent value="specs" className="mt-4">
                      <dl className="space-y-2">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between border-b pb-2"
                          >
                            <dt className="font-medium">{key}</dt>
                            <dd className="text-muted-foreground">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </TabsContent>
                  )}

                  <TabsContent value="shipping" className="mt-4">
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <h4 className="font-medium text-foreground">
                          Shipping & Returns
                        </h4>
                        <p className="mt-2">
                          Free standard shipping on orders over LKR 10,000.
                          Orders typically arrive within 3-5 business days.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          Return Policy
                        </h4>
                        <p className="mt-2">
                          We offer a 30-day return policy for unworn items in
                          original condition with tags attached.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
