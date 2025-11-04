"use client";

import { ProductVariant } from "@/lib/types";
import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariants: Record<string, string>;
  onChange: (variantId: string, value: string) => void;
}

export function VariantSelector({
  variants,
  selectedVariants,
  onChange,
}: VariantSelectorProps) {
  return (
    <div className="space-y-4">
      {variants.map((variant) => (
        <div key={variant.id}>
          <label className="mb-2 block text-sm font-medium">
            {variant.name}
          </label>
          <div className="flex flex-wrap gap-2">
            {variant.values.map((value) => {
              const isSelected = selectedVariants[variant.id] === value;
              return (
                <button
                  key={value}
                  onClick={() => onChange(variant.id, value)}
                  className={cn(
                    "rounded-md border px-4 py-2 text-sm transition-all",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background hover:border-primary/50",
                  )}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
