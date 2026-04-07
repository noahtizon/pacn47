import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    "cultural show",
    "student theater",
  ],
  openGraph: {
    title: "PACN 47: Araw Gabi — Pilipinx-American Culture Night",
    description:
      "A student-produced theatrical celebration of Pilipinx-American identity, heritage, and community at UC Irvine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
