import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OutboundOS — Revenue Systems for Service Businesses",
  description:
    "We install automated lead capture and follow-up systems that respond to every inquiry instantly. Stop losing leads to missed calls and slow follow-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeRegistry>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeRegistry>
      </body>
    </html>
  );
}
