"use client";

import { useEffect } from "react";
import { initCrow } from "@b3-crow/website-hook-sdk";

interface InteractionTrackerProps {
  debug?: boolean;
}

export function InteractionTracker({ debug = false }: InteractionTrackerProps) {
  useEffect(() => {
    const initSDK = async () => {
      try {
        // Get projectId from environment variable
        const projectId = process.env.NEXT_PUBLIC_CROW_PROJECT_ID;

        if (!projectId) {
          console.error(
            "[Rouge Store] Missing NEXT_PUBLIC_CROW_PROJECT_ID environment variable",
          );
          return;
        }

        // Initialize SDK with minimal config - all other settings use SDK defaults
        const crow = await initCrow({
          projectId,
          debug, // Only user-configurable setting
        });

        console.log("[Rouge Store] Crow SDK initialized successfully", crow);
      } catch (error) {
        console.error("[Rouge Store] Failed to initialize Crow SDK:", error);
      }
    };

    initSDK();
  }, [debug]);

  return null;
}
