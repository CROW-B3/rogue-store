"use client";
import { useReportWebVitals } from "next/web-vitals";
import { logWebVitals } from "@/lib/utils";

export const WebVitals = () => {
  useReportWebVitals(logWebVitals);
  return <div></div>;
};
