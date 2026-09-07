import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { defaultMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = defaultMetadata();

export const viewport: Viewport = {
  themeColor: "#143a6b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${plusJakarta.variable} h-full antialiased`}>
      <body
        className={cn(
          "flex min-h-full flex-col font-sans",
          company.showMobileActionBar && "has-mobile-bar",
        )}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
