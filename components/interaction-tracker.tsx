"use client";

import { useEffect } from "react";
import { initCrow } from "@b3-crow/website-hook-sdk";

export function InteractionTracker() {
  useEffect(() => {
    // Initialize Crow SDK with tracking configuration
    const initSDK = async () => {
      try {
        const crow = await initCrow({
          projectId: "pk_test_abc123def456", // Test project API key
          apiEndpoint: "http://localhost:8787",
          capture: {
            pageViews: true,
            clicks: true,
            errors: true,
            forms: false,
            performance: false,
          },
          batching: {
            enabled: true,
            maxBatchSize: 10,
            flushInterval: 5000, // 5 seconds
          },
          debug: true, // Enable debug logging
        });

        console.log("[Rouge Store] Crow SDK initialized successfully", crow);
      } catch (error) {
        console.error("[Rouge Store] Failed to initialize Crow SDK:", error);
      }
    };

    initSDK();
  }, []);

  return null;
}
