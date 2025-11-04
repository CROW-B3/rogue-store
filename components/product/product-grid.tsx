import { Product } from "@/lib/types";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-lg font-medium">No products found</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
