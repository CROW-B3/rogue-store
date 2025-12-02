import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ToastProvider } from "@/components/ui/toast-provider";
import { AutoScreenshotCapture } from "@/components/screenshot-auto-capture";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rouge Store - Premium Shopping Experience",
  description:
    "Discover premium products crafted with care. Quality you can trust, style you'll love.",
};

/**
 * Application root layout that provides the HTML structure, global font, header, footer, and global UI components.
 *
 * @param children - The page content to render inside the layout's main container.
 * @returns The root HTML element containing the rendered application layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CartDrawer />
        <ToastProvider />
        <AutoScreenshotCapture />
      </body>
    </html>
  );
}
