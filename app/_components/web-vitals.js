"use client";
import { useReportWebVitals } from "next/web-vitals";
import { logWebVitals } from "@/lib/utils";
export function WebVitals() {
  useReportWebVitals(logWebVitals);
}
