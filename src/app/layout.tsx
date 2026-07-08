import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "mahdi-products",
    template: "mahdi-products | %s"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <body className="min-h-screen flex flex-col">
        <ToastContainer />

        <Providers>
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
