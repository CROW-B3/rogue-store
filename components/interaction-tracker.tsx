"use client";

import { useEffect } from "react";
import { initInteractionTracking } from "@b3-crow/website-hook-sdk";

export function InteractionTracker() {
  useEffect(() => {
    // Initialize interaction tracking with simplified API
    initInteractionTracking({
      logging: true, // Enable detailed pointer tracking logs
    });
  }, []);
}
