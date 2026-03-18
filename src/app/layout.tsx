import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lira Mucevherat | Nisantasi, Istanbul | 1987'den beri",
  description:
    "Uc kusaktir Nisantasi'nda, el yapimi mucevherlerin en ince detaylarini ustalarin ellerinde seklendiriyoruz. Eternite, Bizantion, Moderna koleksiyonlari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
