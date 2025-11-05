"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  className?: string;
}

/**
 * Render a dual-handle range slider that lets the user select and adjust a numeric range.
 *
 * @param min - Minimum allowed value for the range
 * @param max - Maximum allowed value for the range
 * @param step - Increment step for each handle movement
 * @param value - Current range as a two-element tuple `[minValue, maxValue]`
 * @param onValueChange - Callback invoked with the updated `[minValue, maxValue]` when either handle moves
 * @param className - Optional additional CSS class names applied to the component wrapper
 * @returns The rendered slider element with two draggable handles and a highlighted active range
 */
export function Slider({
  min,
  max,
  step,
  value,
  onValueChange,
  className,
}: SliderProps) {
  const [localValue, setLocalValue] = React.useState(value);

  React.useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (index: number, newValue: number) => {
    const newRange: [number, number] = [...localValue] as [number, number];
    newRange[index] = newValue;

    // Ensure min doesn't exceed max
    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[0] = newRange[1];
    }
    // Ensure max doesn't go below min
    if (index === 1 && newRange[1] < newRange[0]) {
      newRange[1] = newRange[0];
    }

    setLocalValue(newRange);
    onValueChange(newRange);
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <div className="relative w-full">
        <div className="h-2 w-full rounded-full bg-secondary">
          <div
            className="absolute h-2 rounded-full bg-primary"
            style={{
              left: `${((localValue[0] - min) / (max - min)) * 100}%`,
              right: `${100 - ((localValue[1] - min) / (max - min)) * 100}%`,
            }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[0]}
          onChange={(e) => handleChange(0, Number(e.target.value))}
          aria-label="Minimum value"
          className="pointer-events-auto absolute inset-0 z-10 h-2 w-full cursor-pointer opacity-0"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[1]}
          onChange={(e) => handleChange(1, Number(e.target.value))}
          aria-label="Maximum value"
          className="pointer-events-auto absolute inset-0 z-10 h-2 w-full cursor-pointer opacity-0"
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background"
          style={{ left: `${((localValue[0] - min) / (max - min)) * 100}%` }}
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background"
          style={{ left: `${((localValue[1] - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
}
