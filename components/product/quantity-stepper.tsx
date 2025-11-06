"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

/**
 * Renders a compact quantity selector with decrement and increment controls.
 *
 * The component displays the current `value` and calls `onChange` with a new value
 * when the user increments or decrements within the provided `min` and `max` bounds.
 * The controls are disabled when the value is at the corresponding bound for accessibility.
 *
 * @param value - Current quantity to display
 * @param onChange - Callback invoked with the updated quantity when it changes
 * @param min - Minimum allowed quantity (defaults to 1)
 * @param max - Maximum allowed quantity (defaults to 99)
 * @returns A JSX element containing the quantity stepper controls and current value
 */
export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantityStepperProps) {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-12 text-center font-medium">{value}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}