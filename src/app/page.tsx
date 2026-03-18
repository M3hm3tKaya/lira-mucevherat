"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const featuredCollections = [
  {
    slug: "eternite",
    name: "Eternite",
    slogan: "Sonsuzlugu Tasiyorsunuz",
  },
  {
    slug: "bizantion",
    name: "Bizantion",
    slogan: "Imparatorlugun Mirasi",
  },
  {
    slug: "moderna",
    name: "Moderna",
    slogan: "Bugunu Yasamak",
  },
];

const pressLogos = [
  "Vogue Turkiye",
  "Harper's Bazaar",
  "Elle Turkiye",
  "GQ Turkiye",
  "Maison Francaise",
  "Marie Claire",
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden -mt-20">
        {/* Background with slow zoom */}
        <div className="absolute inset-0 animate-slow-zoom">
          <div className="absolute inset-0 image-placeholder">
            <div className="absolute inset-0 animate-gold-glow" />
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-7xl sm:text-8xl lg:text-[140px] font-bold tracking-[0.25em] gold-gradient-text leading-none"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              LIRA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <p className="mt-4 text-[11px] sm:text-[13px] tracking-[0.5em] text-cream/60 uppercase">
              Mucevherat &bull; 1987&apos;den beri
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <p
              className="mt-8 text-lg sm:text-xl text-cream/50 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Uc kusaktir, Nisantasi&apos;nda sanatin en ince detaylarini
              seklendiriyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          >
            <Link
              href="/koleksiyonlar"
              className="inline-block mt-12 px-10 py-4 border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-1000"
            >
              Koleksiyonlari Kesfet
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ========== 3 COLLECTIONS PREVIEW ========== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
                Seckin Koleksiyonlar
              </span>
              <h2
                className="text-3xl lg:text-5xl text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Zamanin Otesinde
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
            {featuredCollections.map((col, i) => (
              <AnimatedSection key={col.slug} delay={i * 0.2}>
                <Link
                  href={`/koleksiyonlar/${col.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      aspectRatio="aspect-[3/4]"
                      label={col.name}
                      className="transition-transform duration-[2000ms] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <h3
                        className="text-2xl lg:text-3xl text-cream mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {col.name}
                      </h3>
                      <p className="text-[11px] tracking-[0.2em] text-cream/50 uppercase">
                        {col.slogan}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-gold text-[11px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <span>Kesfet</span>
                        <svg
                          width="16"
                          height="8"
                          viewBox="0 0 16 8"
                          fill="none"
                        >
                          <path
                            d="M0 4H14M14 4L10 0.5M14 4L10 7.5"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ATELIER STORY ========== */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <ImagePlaceholder
                aspectRatio="aspect-[4/5]"
                label="Atolye"
                glow
              />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="lg:pl-8">
                <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
                  Hikayemiz
                </span>
                <h2
                  className="text-3xl lg:text-4xl text-cream mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Uc Kusaktir,
                  <br />
                  <span className="gold-gradient-text">Ustaligi Yasatiyoruz</span>
                </h2>
                <p className="text-cream/50 leading-relaxed mb-6">
                  1987&apos;de Usta Ahmet Lira tarafindan kurulan atölyemiz,
                  bugun ucuncu kusak ile faaliyetlerini surdurmektedir. Her bir
                  parcamiz, geleneksel kuyumculuk tekniklerinin modern tasarim
                  anlayisiyla harmanlanmasiyla ortaya cikar.
                </p>
                <p className="text-cream/50 leading-relaxed mb-8">
                  Nisantasi&apos;ndaki atölyemizde, yalnizca en kaliteli
                  malzemelerle ve yuzlerce saatlik el emegi ile mucevherler
                  uretiyoruz. Her parca, bir sanat eseri olarak dunyaya gelir.
                </p>
                <Link
                  href="/atolye"
                  className="inline-flex items-center gap-3 text-gold text-[11px] tracking-[0.25em] uppercase group"
                >
                  <span>Hikayemizi Okuyun</span>
                  <svg
                    width="24"
                    height="8"
                    viewBox="0 0 24 8"
                    fill="none"
                    className="transition-transform duration-700 group-hover:translate-x-2"
                  >
                    <path
                      d="M0 4H22M22 4L18 0.5M22 4L18 7.5"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== BESPOKE CTA ========== */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 image-placeholder opacity-30" />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
              Ismarlama Tasarim
            </span>
            <h2
              className="text-3xl lg:text-5xl text-cream mb-6 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hayalinizdeki Mucevheri
              <br />
              <span className="gold-gradient-text">Birlikte Tasarlayalim</span>
            </h2>
            <p className="text-cream/50 leading-relaxed max-w-lg mx-auto mb-10">
              Tek ve benzersiz bir parca mi istiyorsunuz? Usta
              tasarimcilarimizla birlikte, hayalinizdeki mucevheri gercege
              donusturun.
            </p>
            <Link
              href="/ismarlama"
              className="inline-block px-10 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-light transition-colors duration-1000"
            >
              Ismarlama Surecini Baslatin
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== PRESS STRIP ========== */}
      <section className="py-16 lg:py-20 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-center text-[11px] tracking-[0.4em] text-cream/30 uppercase mb-10">
              Basinda Biz
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {pressLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm lg:text-base text-cream/20 tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
