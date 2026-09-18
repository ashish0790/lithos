import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collections - Lithos",
  description:
    "Explore Lithos's meticulously crafted porcelain tiles and large format slabs, designed for modern spaces and inspired by timeless stone surfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${dmSans.className}`}>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-earth-brown selection:text-alabaster pt-20">
        {children}
      </body>
    </html>
  );
}
