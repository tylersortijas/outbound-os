import type { Metadata } from "next";
import { Archivo, Spline_Sans_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

// Archivo: industrial grotesque, one family in weight contrast (display → body).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

// Spline Sans Mono: machine-record labels only (status, Business Brain fields).
const splineSansMono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OutboundOS — The AI Workforce for Home-Service Businesses",
  description:
    "Hire a managed team of AI employees that answer every call, follow up on every lead, and run your front office — 24/7. Built on your business's real context, with every decision logged and reversible. AI you can actually trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${splineSansMono.variable}`}
    >
      <body>
        <AppRouterCacheProvider options={{ key: "mui" }}>
          <ThemeRegistry>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <ScrollToTop />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
