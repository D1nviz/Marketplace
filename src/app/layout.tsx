import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import Providers from "@/providers";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "A marketplace for buying and selling goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <Providers>
          <main className="relative flex flex-col min-h-screen ">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </Providers>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
