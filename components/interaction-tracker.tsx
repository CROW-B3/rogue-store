"use client";

import { useEffect } from "react";
import { createCrowSDK } from "@b3-crow/website-hook-sdk";

export function InteractionTracker() {
  useEffect(() => {
    // Create and initialize the SDK (only runs in browser)
    const crow = createCrowSDK({
      apiKey: 'pk_test_local_key_1',
      debug: true, // Enable detailed logging
    });

    crow.initializeSdk();

    // Cleanup on unmount
    return () => {
      crow.destroySdk();
    };
  }, []);

  return null;
}
