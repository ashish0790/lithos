import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-earth-brown selection:text-alabaster pt-20">
        {children}
      </body>
    </html>
  );
}
