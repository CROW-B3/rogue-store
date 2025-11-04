"use client";

import { Category, Tag } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
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
    <div className="space-y-6 rounded-lg border bg-card p-6">
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
            <label
              key={category.id}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.slug)}
                onChange={() => toggleCategory(category.slug)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
              <span className="text-sm capitalize">{category.name}</span>
            </label>
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
    </div>
  );
}
