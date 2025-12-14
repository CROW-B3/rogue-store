"use client";

import { useState, useMemo, Suspense } from "react";
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
import { SearchBar } from "@/components/product/search-bar";
import { SortControl } from "@/components/product/sort-control";
import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { filterProducts, getMinMaxPrice } from "@/lib/product-filters";
import { FilterOptions, SortOption } from "@/lib/types";
import { Filter, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/**
 * Renders the products listing content including search, sorting, filters, and the product grid.
 *
 * Initializes filter state from URL parameters and product data, keeps a memoized filtered list in sync with user controls, and exposes UI for searching, sorting, toggling filters, and clearing filter state.
 *
 * @returns The JSX element containing the products page content, including filter controls, product count summary, and the product grid.
 */
function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialTag = searchParams.get("tag") || "";

  const [minPrice, maxPrice] = getMinMaxPrice(products);

  const [filters, setFilters] = useState<FilterOptions>({
    categories: initialCategory ? [initialCategory] : [],
    priceRange: [minPrice, maxPrice],
    tags: initialTag ? [initialTag] : [],
    searchQuery: "",
    sort: "relevance" as SortOption,
  });

  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [filters],
  );

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
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6">
            <h1 className="text-3xl font-bold">All Products</h1>
            <p className="mt-2 text-muted-foreground">
              Discover our complete collection of {products.length} premium
              products
            </p>
          </div>

          {/* Search & Sort */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 sm:max-w-md">
              <SearchBar
                value={filters.searchQuery}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, searchQuery: value }))
                }
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <SortControl
                value={filters.sort}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, sort: value }))
                }
              />
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <aside className={`lg:block ${showFilters ? "block" : "hidden"}`}>
              <ProductFilters
                categories={categories}
                tags={tags}
                selectedCategories={filters.categories}
                selectedTags={filters.tags}
                priceRange={filters.priceRange}
                maxPrice={maxPrice}
                onCategoryChange={(cats) =>
                  setFilters((prev) => ({ ...prev, categories: cats }))
                }
                onTagChange={(tags) =>
                  setFilters((prev) => ({ ...prev, tags }))
                }
                onPriceRangeChange={(range) =>
                  setFilters((prev) => ({ ...prev, priceRange: range }))
                }
                onClearAll={() =>
                  setFilters({
                    categories: [],
                    priceRange: [minPrice, maxPrice],
                    tags: [],
                    searchQuery: "",
                    sort: "relevance",
                  })
                }
              />
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </div>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

/**
 * Page component that renders the products listing inside a Suspense boundary.
 *
 * @returns The page element that renders ProductsContent with a "Loading..." Suspense fallback.
 */
export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
