import Navbar from "@/components/ui/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import PreviewModalProvider from "@/providers/preview-modal-provider";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Clurr's Studio",
  description: "All things aesthetic and cute",
};

const font = Poppins({ weight: "500", subsets: ["devanagari"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body className={font.className}>
        <div className="max-w-[100vw] overflow-x-hidden w-full">
          <Navbar />
          <PreviewModalProvider />
          {children}
        </div>
      </body>
    </html>
  );
}
