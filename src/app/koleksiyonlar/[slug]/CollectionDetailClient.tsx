"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Lightbox from "@/components/Lightbox";
import type { Collection, Product } from "@/data/collections";

export default function CollectionDetailClient({
  collection,
}: {
  collection: Collection;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 image-placeholder opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/koleksiyonlar"
              className="inline-flex items-center gap-2 text-gold/60 text-[11px] tracking-[0.2em] uppercase mb-6 sm:mb-8 hover:text-gold transition-colors duration-700 min-h-[44px]"
            >
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path
                  d="M16 4H2M2 4L6 0.5M2 4L6 7.5"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
              <span>Tüm Koleksiyonlar</span>
            </Link>

            <h1
              className="text-3xl sm:text-5xl lg:text-7xl gold-gradient-text mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {collection.name}
            </h1>
            <p className="text-[12px] tracking-[0.3em] text-cream/50 uppercase mb-6">
              {collection.slogan}
            </p>
            <p className="text-cream/40 max-w-xl leading-relaxed">
              {collection.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-3">
                {collection.products.length} Parça
              </span>
              <h2
                className="text-2xl lg:text-3xl text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Koleksiyon Parçaları
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {collection.products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="group block w-full text-left"
                >
                  <div className="relative overflow-hidden bg-card border border-border hover:border-gold/20 transition-all duration-1000">
                    <ImagePlaceholder
                      aspectRatio="aspect-square"
                      label={product.name}
                      className="transition-transform duration-[2000ms] group-hover:scale-[1.03]"
                    />

                    <div className="p-5 lg:p-6">
                      <h3
                        className="text-base lg:text-lg text-cream mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-cream/40 mb-3 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-gold/50">
                          {product.material}
                        </span>
                        <span className="text-[10px] tracking-[0.15em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          Detay
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h3
              className="text-2xl lg:text-3xl text-cream mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Bu Koleksiyondan Bir Parça Edinin
            </h3>
            <p className="text-cream/50 mb-8">
              Randevu alarak Nişantaşı mağazamızda koleksiyonu yakından inceleyin.
            </p>
            <Link
              href="/iletisim"
              className="inline-block px-8 sm:px-10 py-4 border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-1000 min-h-[44px]"
            >
              Randevu Alın
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
