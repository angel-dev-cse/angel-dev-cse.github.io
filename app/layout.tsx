import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { poppinsRegular } from "./ui/fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angel Sharma",
  description: "Portfolio of Angel Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={poppinsRegular.className}>{children}</body>
    </html>
  );
}
