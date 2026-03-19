"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { collections } from "@/data/collections";

export default function KoleksiyonlarPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
              Tüm Koleksiyonlar
            </span>
            <h1
              className="text-4xl lg:text-6xl text-cream mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Koleksiyonlar
            </h1>
            <p className="text-cream/50 max-w-lg mx-auto leading-relaxed">
              Her koleksiyon, farklı bir hikaye anlatıyor. Zamanın ötesinde
              tasarımları keşfedin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections - Vertical full-width */}
      <section className="pb-24 lg:pb-32">
        <div className="flex flex-col">
          {collections.map((col, i) => (
            <AnimatedSection key={col.slug} delay={0.1}>
              <Link
                href={`/koleksiyonlar/${col.slug}`}
                className="group block relative"
              >
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    aspectRatio="aspect-[21/9]"
                    label={col.name}
                    className="transition-transform duration-[3000ms] group-hover:scale-[1.02]"
                  />

                  {/* Parallax-like overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center px-8 lg:px-20">
                    <div>
                      <span className="text-[10px] tracking-[0.4em] text-gold/60 uppercase block mb-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2
                        className="text-4xl lg:text-6xl text-cream mb-3"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {col.name}
                      </h2>
                      <p className="text-[12px] tracking-[0.2em] text-cream/50 uppercase mb-2">
                        {col.slogan}
                      </p>
                      <p className="text-sm text-cream/40 max-w-md leading-relaxed hidden lg:block">
                        {col.description}
                      </p>
                      <div className="mt-6 flex items-center gap-3 text-gold text-[11px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
                        <span>Koleksiyonu Görüntüle</span>
                        <svg
                          width="24"
                          height="8"
                          viewBox="0 0 24 8"
                          fill="none"
                          className="transition-transform duration-1000 group-hover:translate-x-3"
                        >
                          <path
                            d="M0 4H22M22 4L18 0.5M22 4L18 7.5"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-border" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
