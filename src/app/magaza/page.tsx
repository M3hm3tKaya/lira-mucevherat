"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const storeImages = [
  { id: 1, label: "Mağaza Giriş" },
  { id: 2, label: "Sergi Alani" },
  { id: 3, label: "Özel Görüşme Odası" },
  { id: 4, label: "Koleksiyon Vitrini" },
  { id: 5, label: "Atölye İçi" },
];

export default function MagazaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + storeImages.length) % storeImages.length
    );
  };

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
              Nişantaşı, İstanbul
            </span>
            <h1
              className="text-4xl lg:text-6xl text-cream mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mağazamız
            </h1>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              Nişantaşı&apos;nın kalbinde, mücevher sanatına adanmış özel
              mekanımız sizi bekliyor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImagePlaceholder
                    aspectRatio="aspect-[16/9]"
                    label={storeImages[currentSlide].label}
                    glow
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-6 right-6 flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-700"
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M12 4H2M2 4L5 1M2 4L5 7"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <span className="text-[11px] tracking-[0.2em] text-cream/50">
                  {String(currentSlide + 1).padStart(2, "0")} /{" "}
                  {String(storeImages.length).padStart(2, "0")}
                </span>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-700"
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M0 4H10M10 4L7 1M10 4L7 7"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Slide label */}
              <div className="absolute bottom-6 left-6">
                <span className="text-[11px] tracking-[0.2em] text-cream/40 uppercase">
                  {storeImages[currentSlide].label}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Store Info */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection delay={0}>
              <div className="border border-border p-8 lg:p-10 hover:border-gold/20 transition-all duration-1000">
                <div className="mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg text-cream mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Adres
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  Nişantaşı Mah. Abdi İpekçi Cad.
                  <br />
                  No: 42/A, Şişli
                  <br />
                  34367 İstanbul, Türkiye
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="border border-border p-8 lg:p-10 hover:border-gold/20 transition-all duration-1000">
                <div className="mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg text-cream mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Çalışma Saatleri
                </h3>
                <div className="text-sm text-cream/50 space-y-2">
                  <p>Pazartesi - Cuma: 10:00 - 19:00</p>
                  <p>Cumartesi: 11:00 - 18:00</p>
                  <p>Pazar: Randevuyla</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="border border-border p-8 lg:p-10 hover:border-gold/20 transition-all duration-1000">
                <div className="mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold"
                  >
                    <path
                      d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.63 21 20.28 21 19.92 21C10.4 21 3 13.6 3 4.08C3 3.72 3 3.37 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.39 8.3 3.95 8.52 4.48L6.84 6.16C8.36 9.31 10.69 11.64 13.84 13.16L15.52 11.48C16.05 11.7 16.61 11.86 17.19 11.95C17.66 12.03 18 12.44 18 12.92V16.92"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg text-cream mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  İletişim
                </h3>
                <div className="text-sm text-cream/50 space-y-2">
                  <p>+90 212 240 87 87</p>
                  <p>+90 532 240 87 87</p>
                  <p>info@liramucevherat.com</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="relative">
              <div className="image-placeholder aspect-[21/9] bg-card border border-border">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold/20 mb-3"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                  <span className="text-[11px] tracking-[0.3em] text-gold/20 uppercase">
                    Harita - Nişantaşı, İstanbul
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h3
              className="text-2xl lg:text-3xl text-cream mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mağazamıza Davetlisiniz
            </h3>
            <p className="text-cream/50 mb-8">
              Özel bir deneyim için randevu alarak gelin. Size özel olarak
              koleksiyonlarımızı sunmaktan memnuniyet duyarız.
            </p>
            <a
              href="tel:+902122408787"
              className="inline-block px-10 py-4 border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-1000"
            >
              Hemen Arayın
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
