import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "OutboundOS — The citation comes with the answer",
  description:
    "A citation-backed document assistant for mid-market law firms. On a real deployment, a client benchmark went from 5 of 14 correct to 14 of 14. A $200 accuracy audit is credited toward the build.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
