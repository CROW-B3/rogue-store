"use client";

import { CrowSDK } from "@b3-crow/website-hook-sdk";

export const crow = new CrowSDK({ projectId: "pk_test_abc123def456" });

if (typeof window !== "undefined") {
  crow.init();
}
