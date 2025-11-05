"use client";

import { Category, Tag } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductFiltersProps {
  categories: Category[];
  tags: Tag[];
  selectedCategories: string[];
  selectedTags: string[];
  priceRange: [number, number];
  maxPrice: number;
  onCategoryChange: (categories: string[]) => void;
  onTagChange: (tags: string[]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onClearAll: () => void;
}

/**
 * Renders a product filter panel with controls for categories, price range, and tags.
 *
 * Displays a list of category checkboxes, a price range slider with formatted bounds,
 * and toggleable tag badges. Shows a "Clear all" control when any filter is active.
 *
 * @param categories - Available categories to show as checkbox items.
 * @param tags - Available tags to show as toggleable badges.
 * @param selectedCategories - Slugs of currently selected categories.
 * @param selectedTags - Slugs of currently selected tags.
 * @param priceRange - Current price range as a two-element tuple [min, max].
 * @param maxPrice - Maximum allowed price for the slider.
 * @param onCategoryChange - Callback invoked with the updated selected category slugs when a category is toggled.
 * @param onTagChange - Callback invoked with the updated selected tag slugs when a tag is toggled.
 * @param onPriceRangeChange - Callback invoked with the updated price range tuple when the slider value changes.
 * @param onClearAll - Callback invoked when the "Clear all" control is activated.
 * @returns The filter panel React element.
 */
export function ProductFilters({
  categories,
  tags,
  selectedCategories,
  selectedTags,
  priceRange,
  maxPrice,
  onCategoryChange,
  onTagChange,
  onPriceRangeChange,
  onClearAll,
}: ProductFiltersProps) {
  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedTags.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < maxPrice;

  const toggleCategory = (slug: string) => {
    if (selectedCategories.includes(slug)) {
      onCategoryChange(selectedCategories.filter((c) => c !== slug));
    } else {
      onCategoryChange([...selectedCategories, slug]);
    }
  };

  const toggleTag = (slug: string) => {
    if (selectedTags.includes(slug)) {
      onTagChange(selectedTags.filter((t) => t !== slug));
    } else {
      onTagChange([...selectedTags, slug]);
    }
  };

  return (
    <Card className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-3 text-sm font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category.slug}`}
                checked={selectedCategories.includes(category.slug)}
                onCheckedChange={() => toggleCategory(category.slug)}
              />
              <label
                htmlFor={`category-${category.slug}`}
                className="text-sm capitalize cursor-pointer"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3 text-sm font-medium">Price Range</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={maxPrice}
            step={100}
            value={priceRange}
            onValueChange={(value) =>
              onPriceRangeChange(value as [number, number])
            }
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="mb-3 text-sm font-medium">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isSelected = selectedTags.includes(tag.slug);
            return (
              <Badge
                key={tag.id}
                variant={isSelected ? "default" : "outline"}
                className="cursor-pointer capitalize"
                onClick={() => toggleTag(tag.slug)}
              >
                {tag.name}
                {isSelected && <X className="ml-1 h-3 w-3" />}
              </Badge>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
