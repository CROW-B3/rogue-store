"use client";

import { useEffect } from "react";
import { initAutoCapture } from "@b3-crow/website-hook-sdk";

/**
 * InteractionTracker Component
 *
 * Integrates the @b3-crow/website-hook-sdk to track user interactions
 * including pointer movements and optionally capture screenshots.
 *
 * Current configuration:
 * - Screenshots: DISABLED (for testing pointer tracking)
 * - Pointer Tracking: ENABLED (1 second batching)
 * - Storage: D1 database (remote)
 *
 * This is a simple wrapper that initializes the SDK's auto-capture feature.
 * All configuration (uploadUrl, metadata, etc.) are handled internally by the SDK.
 */
export function InteractionTracker() {
  useEffect(() => {
    // Initialize with pointer tracking enabled, screenshots disabled
    initAutoCapture({
      // Screenshot capture DISABLED for testing
      // To enable: set interval to a number (e.g., interval: 5000 for every 5 seconds)
      interval: null,

      // Enable logging to see pointer tracking in console
      logging: true,

      // Pointer tracking configuration
      pointerTracking: {
        enabled: true,
        batchInterval: 1000, // Send batches every 1 second (1000ms)
        maxBatchSize: 1000, // Or when buffer reaches 1000 coordinates
        logging: true, // Enable detailed pointer tracking logs
      },
    });
  }, []);

  // This component doesn't render anything visible
  return null;
}
