import Navbar from "@/components/ui/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";

import { poppins } from "./font";
import Footer from "@/components/footer/footer";

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
    <html lang="en-us" className={poppins.className}>
      <body className="w-full">
        <div className="max-w-[100vw] overflow-x-hidden w-full">
          <Navbar />
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
