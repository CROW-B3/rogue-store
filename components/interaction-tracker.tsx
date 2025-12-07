"use client";

import { useEffect } from "react";
import { initInteractionTracking } from "@b3-crow/website-hook-sdk";
// Unified interaction tracking with hardcoded configs

export function InteractionTracker() {
  useEffect(() => {
    // Initialize interaction tracking with simplified API
    // This starts both screenshot capture and mouse cursor tracking
    initInteractionTracking({
      logging: true, // Enable detailed pointer tracking logs
    });
  }, []);

  return null;
}
