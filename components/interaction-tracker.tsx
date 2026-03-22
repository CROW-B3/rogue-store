"use client";

import { useEffect } from "react";
import { createCrowSDK } from "@b3-crow/website-hook-sdk";

const CROW_API_KEY = "crow_nkGZrQKWUBfXokSGOdWkNMPoMxQALEUS";

export function InteractionTracker() {
  useEffect(() => {
    if (!CROW_API_KEY) return;

    const crow = createCrowSDK({
      apiKey: CROW_API_KEY,
      debug: true,
    });

    crow.initializeSdk();

    return () => {
      crow.destroySdk();
    };
  }, []);

  return null;
}
