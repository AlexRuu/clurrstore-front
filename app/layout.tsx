import Navbar from "@/components/ui/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import PreviewModalProvider from "@/providers/preview-modal-provider";

export const metadata: Metadata = {
  title: "Clurr's Studio",
  description: "All things aesthetic and cute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body>
        <PreviewModalProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
