import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PACN 47: Araw Gabi — Pilipinx-American Culture Night at UC Irvine",
  description:
    "Pilipinx-American Culture Night (PACN) 47 at UC Irvine. A student-produced theatrical celebration of Pilipinx-American identity, heritage, and community.",
  keywords: [
    "PACN",
    "Pilipinx American Culture Night",
    "Araw Gabi",
    "UCI",
    "UC Irvine",
    "Filipino culture",
    "Kababayan",
  ],
  authors: [{ name: "Kababayan at UCI" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
