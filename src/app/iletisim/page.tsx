"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız alındı. En kısa sürede size döneceğiz.");
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
              İletişim
            </span>
            <h1
              className="text-4xl lg:text-6xl text-cream mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Bize Ulaşın
            </h1>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              Sorularınız, randevu talepleriniz veya özel siparişleriniz için
              bize ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="space-y-10">
                  {/* Address */}
                  <div className="flex gap-5">
                    <div className="shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
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
                    <div>
                      <h3
                        className="text-sm text-cream mb-2 tracking-wider uppercase"
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
                  </div>

                  {/* Phone */}
                  <div className="flex gap-5">
                    <div className="shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
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
                    <div>
                      <h3
                        className="text-sm text-cream mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Telefon
                      </h3>
                      <div className="text-sm text-cream/50 space-y-1">
                        <p>+90 212 240 87 87</p>
                        <p>+90 532 240 87 87</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-5">
                    <div className="shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gold"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <path
                          d="M2 4L12 13L22 4"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-sm text-cream mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        E-posta
                      </h3>
                      <div className="text-sm text-cream/50 space-y-1">
                        <p>info@liramucevherat.com</p>
                        <p>siparis@liramucevherat.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-5">
                    <div className="shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
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
                    <div>
                      <h3
                        className="text-sm text-cream mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Çalışma Saatleri
                      </h3>
                      <div className="text-sm text-cream/50 space-y-1">
                        <p>Pazartesi - Cuma: 10:00 - 19:00</p>
                        <p>Cumartesi: 11:00 - 18:00</p>
                        <p>Pazar: Randevuyla</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-5">
                    <div className="shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gold"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="5"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-sm text-cream mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Sosyal Medya
                      </h3>
                      <div className="text-sm text-cream/50 space-y-1">
                        <p className="hover:text-gold transition-colors duration-700 cursor-pointer">
                          @liramucevherat
                        </p>
                        <p className="hover:text-gold transition-colors duration-700 cursor-pointer">
                          pinterest.com/liramucevherat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-card border border-border p-8 lg:p-12">
                  <h2
                    className="text-xl lg:text-2xl text-cream mb-8"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Mesaj Gönderin
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                          İsim Soyisim
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                        E-posta
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                        Konu
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-black">
                          Konu seçin...
                        </option>
                        <option value="randevu" className="bg-black">
                          Randevu Talebi
                        </option>
                        <option value="koleksiyon" className="bg-black">
                          Koleksiyon Hakkında
                        </option>
                        <option value="ismarlama" className="bg-black">
                          Ismarlama Tasarım
                        </option>
                        <option value="fiyat" className="bg-black">
                          Fiyat Bilgisi
                        </option>
                        <option value="diger" className="bg-black">
                          Diğer
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                        Mesajınız
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm resize-none"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full lg:w-auto px-12 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-light transition-colors duration-1000"
                      >
                        Mesaj Gönderin
                      </button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
