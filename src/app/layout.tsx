import type { Metadata } from "next";
import { nunito } from "@/config/fonts";

import { Navbar, Socials } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Paucar",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen container mx-auto relative">

          <Navbar />

          {children}

          <Socials />
        </main>
      </body>
    </html>
  );
}
