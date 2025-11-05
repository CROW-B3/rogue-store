"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { debounce } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Render a search input with an inline search icon, debounced change notifications, and a clear button.
 *
 * The component keeps an internal input state synced to the `value` prop. User input updates the local state immediately and calls `onChange` after a 300ms debounce. The clear button resets the input and calls `onChange` with an empty string.
 *
 * @param value - Controlled input value shown in the search field
 * @param onChange - Callback invoked when the input value changes; receives the new value
 * @param placeholder - Optional placeholder text for the input (defaults to "Search products...")
 * @returns A JSX element containing the search input with an inline search icon and an optional clear (X) button
 */
export function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const debouncedOnChange = useMemo(() => debounce(onChange, 300), [onChange]);

  const handleChange = (newValue: string) => {
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  };

  const handleClear = () => {
    setLocalValue("");
    onChange("");
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        value={localValue}
        onChange={(e) => handleChange(e.target.value)}
        className="pl-9 pr-9"
      />
      {localValue && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
