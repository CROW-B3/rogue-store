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
 * All screenshot logic, including handling modern CSS colors (oklab, oklch),
 * is handled internally by the SDK.
 */
export function AutoScreenshotCapture() {
  useEffect(() => {
    // Initialize auto-capture with SDK
    initAutoCapture({
      delay: 5000, // 5 seconds
      filename: `rogue-store-screenshot-${Date.now()}`,
      viewportOnly: true, // Capture only visible viewport area
      useCORS: true,
      backgroundColor: "#ffffff",
      scale: window.devicePixelRatio,
      quality: 0.92,
      logging: true, // Enable logging to see capture progress
    });
  }, []);

  // This component doesn't render anything visible
  return null;
}
