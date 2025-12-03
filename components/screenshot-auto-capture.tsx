"use client";

import { useEffect } from "react";
import { initAutoCapture } from "@b3-crow/website-hook-sdk";

/**
 * AutoScreenshotCapture Component
 *
 * Integrates the @b3-crow/website-hook-sdk to automatically capture
 * a screenshot of the website 5 seconds after it launches.
 *
 * This is a simple wrapper that initializes the SDK's auto-capture feature.
 * All screenshot logic, configuration, upload URL, and metadata are
 * handled internally by the SDK.
 */
export function AutoScreenshotCapture() {
  useEffect(() => {
    // Initialize auto-capture with SDK
    // All configuration (uploadUrl, metadata, etc.) is handled in the SDK
    initAutoCapture({
      interval: 100,
      logging: true, // Enable logging to see capture progress
    });
  }, []);

  // This component doesn't render anything visible
  return null;
}
