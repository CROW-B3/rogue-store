"use client";

import { useEffect } from "react";
import { initAutoCapture } from "@b3-crow/website-hook-sdk";

/**
 * AutoScreenshotCapture Component
 *
 * Integrates the @b3-crow/website-hook-sdk to track pointer coordinates
 * and optionally capture screenshots.
 *
 * Current configuration:
 * - Screenshots: DISABLED (for testing pointer tracking)
 * - Pointer Tracking: ENABLED (15ms batching)
 *
 * This is a simple wrapper that initializes the SDK's auto-capture feature.
 * All configuration (uploadUrl, metadata, etc.) are handled internally by the SDK.
 */
export function AutoScreenshotCapture() {
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
        batchInterval: 15, // Send batches every 15ms
        maxBatchSize: 100, // Or when buffer reaches 100 coordinates
        logging: true, // Enable detailed pointer tracking logs
      },
    });
  }, []);

  // This component doesn't render anything visible
  return null;
}
