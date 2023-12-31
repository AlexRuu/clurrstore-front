import Navbar from "@/components/ui/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import PreviewModalProvider from "@/providers/preview-modal-provider";

export const metadata: Metadata = {
  title: "Clurr's Studio",
  description: "All things aesthetic and cute",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body>
        <div className="max-w-[100vw] overflow-x-hidden w-full">
          <Navbar />
          <PreviewModalProvider />
          {children}
        </div>
      </body>
    </html>
  );
}
