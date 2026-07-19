import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar.jsx";

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
        <Navbar />

        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}