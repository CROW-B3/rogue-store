"use client";

import { useEffect } from "react";
import { createCrowSDK } from "@b3-crow/website-hook-sdk";

const CROW_API_KEY = "crow_nkGZrQKWUBfXokSGOdWkNMPoMxQALEUS";
const CROW_INGEST_URL = "https://dev.api.crowai.dev/api/v1/ingest";

export function InteractionTracker() {
  useEffect(() => {
    if (!CROW_API_KEY) return;

    const crow = createCrowSDK({
      apiKey: CROW_API_KEY,
      ingestUrl: CROW_INGEST_URL,
      debug: true,
    });

    crow.initializeSdk();

    return () => {
      crow.destroySdk();
    };
  }, []);

  return null;
}
