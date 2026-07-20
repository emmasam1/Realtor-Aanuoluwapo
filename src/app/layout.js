import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import Footer from "@/components/footer/Footer";
import FloatingSocials from "@/components/floating/FloatingSocials";
import ScrollToTop from "@/components/floating/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Realtor Academy",
    template: "%s | Realtor Academy",
  },
  description:
    "Learn how to become a successful realtor. Buy, sell, invest, and grow your real estate career.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground transition-colors duration-300">
        <Providers>
          <Navbar />

          <main>{children}</main>

          <FloatingSocials />

          <ScrollToTop />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
