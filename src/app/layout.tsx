import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lira Mücevherat | Nişantaşı, İstanbul | 1987'den beri",
  description:
    "Üç kuşaktır Nişantaşı'nda, el yapımı mücevherlerin en ince detaylarını ustaların ellerinde şekillendiriyoruz. Eternite, Bizantion, Moderna koleksiyonları.",
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
