"use client";

import { useEffect } from "react";
import { createCrowSDK } from "@b3-crow/website-hook-sdk";

export function InteractionTracker() {
  useEffect(() => {
    // Create and initialize the SDK (only runs in browser)
    const crow = createCrowSDK({
      debug: true,
    });

    crow.initializeSdk();

    // Cleanup on unmount
    return () => {
      crow.destroySdk();
    };
  }, []);

  return null;
}
