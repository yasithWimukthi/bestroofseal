import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BestRoofSeal",
  description: "Roof sealant reviews and buying guides",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html>
          <body className="bg-slate-50 text-slate-900">
          <Navbar />
          {children}
          <Footer />
          </body>
      </html>
  );
}
