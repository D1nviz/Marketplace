import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import Navbar from "@/components/navbar";
import Providers from "@/providers";
import Footer from "@/components/footer";

import { cn, constructMetadata } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

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
          <Footer />
        </Providers>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
