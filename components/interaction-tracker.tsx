"use client";

import { useEffect } from "react";
import { initInteractionTracking } from "@b3-crow/website-hook-sdk";

export function InteractionTracker() {
  useEffect(() => {
    // This starts both screenshot capture and mouse cursor tracking
    initInteractionTracking({
      logging: true, // Enable detailed pointer tracking logs
    });
  }, []);

  return null;
}
