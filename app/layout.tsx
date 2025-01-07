import type { Metadata } from "next";
import Auxhelper from "@/Components/Auxhelper";
import Footer from "@/Components/Footer";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Web Analyzer",
  description: "Find whats your website is construct it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Auxhelper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
