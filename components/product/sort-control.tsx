"use client";

import { ArrowUpDown } from "lucide-react";
import { SortOption } from "@/lib/types";

interface SortControlProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortControl({ value, onChange }: SortControlProps) {
  const options: { value: SortOption; label: string }[] = [
    { value: "relevance", label: "Relevance" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
  ];

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
