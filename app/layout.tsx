import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Guestable | Minimal Auth Demo",
  description:
    "A minimal Next.js demo with guest login, modals, and GitHub Pages deployment.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Guestable",
    description:
      "A minimal Next.js demo with guest login, modals, and GitHub Pages deployment.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 min-h-screen text-white`}
      >
        {children}
      </body>
    </html>
  );
}
