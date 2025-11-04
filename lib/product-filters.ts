import { Product, FilterOptions } from "./types";

export function filterProducts(
  products: Product[],
  filters: FilterOptions,
): Product[] {
  let filtered = [...products];

  // Search query
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    );
  }

  // Categories
  if (filters.categories.length > 0) {
    filtered = filtered.filter((product) =>
      filters.categories.includes(product.category),
    );
  }

  // Tags
  if (filters.tags.length > 0) {
    filtered = filtered.filter((product) =>
      product.tags.some((tag) => filters.tags.includes(tag)),
    );
  }

  // Price range
  const [minPrice, maxPrice] = filters.priceRange;
  filtered = filtered.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice,
  );

  // Sort
  switch (filters.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;
    case "relevance":
    default:
      // Keep original order for relevance
      break;
  }

  return filtered;
}

export function getMinMaxPrice(products: Product[]): [number, number] {
  if (products.length === 0) return [0, 0];
  const prices = products.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}
