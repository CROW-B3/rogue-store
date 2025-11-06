import { Product, FilterOptions } from "./types";

/**
 * Filter and sort an array of products according to the provided filter options.
 *
 * Applies a case-insensitive search across title, description, and category when a search query is present; restricts results to specified categories and tags when provided; constrains results to the given price range; and orders the final list based on the requested sort option (`price-asc`, `price-desc`, `newest`, or `relevance`).
 *
 * @param products - The list of products to filter
 * @param filters - Criteria controlling search query, categories, tags, priceRange, and sort order
 * @returns The resulting array of products after filtering and sorting
 */
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

/**
 * Compute the minimum and maximum prices from a list of products.
 *
 * @param products - Array of products to inspect
 * @returns `[minPrice, maxPrice]` where `minPrice` is the lowest product price and `maxPrice` is the highest; returns `[0, 0]` if `products` is empty.
 */
export function getMinMaxPrice(products: Product[]): [number, number] {
  if (products.length === 0) return [0, 0];
  const prices = products.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}