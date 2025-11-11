export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  values: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  gender?: "men" | "women" | "unisex";
  tags: string[];
  price: number;
  currency: "LKR";
  images: string[];
  variants?: ProductVariant[];
  rating?: number;
  createdAt: string;
  specs?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export type SortOption = "relevance" | "price-asc" | "price-desc" | "newest";

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  tags: string[];
  searchQuery: string;
  sort: SortOption;
}
