"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Gorusme & Hayal",
    description:
      "Hayalinizdeki mucevheri anlatin. Ilham kaynaklarinizi, tarzinizi ve beklentilerinizi birlikte konusalim. Ilk gorusmemiz magazamizda veya online olabilir.",
  },
  {
    number: "02",
    title: "Tasarim & Prototip",
    description:
      "Usta tasarimcimiz, fikirlerinizi krokiye dokecek. 3D modelleme ve mum prototip ile tasarimi onaylayacaksiniz. Her detay sizin onayinizla sekillenir.",
  },
  {
    number: "03",
    title: "Uretim & Teslim",
    description:
      "Onaylanan tasarim, atölyemizde usta ellere emanet edilir. 4-8 haftalik ozenli uretim surecinin ardindan, esiz parcaniz sertifikasiyla teslim edilir.",
  },
];

export default function IsmarlamaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jewelryType: "",
    material: "",
    stone: "",
    budget: "",
    description: "",
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
    alert("Talebiniz alindi. En kisa surede sizinle iletisime gececegiz.");
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
              Ismarlama Tasarim
            </span>
            <h1
              className="text-4xl lg:text-6xl text-cream mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sizin Icin, Size Ozel
            </h1>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              Hayalinizdeki mucevheri, usta zanaatkarlarimizla birlikte
              tasarlayip hayata geciriyoruz. Her parca, benzersiz bir hikaye
              anlatiyor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.2}>
                <div className="relative p-8 lg:p-10 border border-border hover:border-gold/20 transition-all duration-1000">
                  {/* Step number */}
                  <span
                    className="text-5xl lg:text-6xl gold-gradient-text font-bold block mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-xl text-cream mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-cream/50 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gold/20" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
                Ismarlama Talep Formu
              </span>
              <h2
                className="text-2xl lg:text-3xl text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Hayalinizi Paylasin
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                    Isim Soyisim
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm"
                    placeholder="Adiniz Soyadiniz"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              {/* Row 2 */}
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

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                    Mucevher Turu
                  </label>
                  <select
                    name="jewelryType"
                    required
                    value={formData.jewelryType}
                    onChange={handleChange}
                    className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Secin...
                    </option>
                    <option value="yuzuk" className="bg-black">
                      Yuzuk
                    </option>
                    <option value="kolye" className="bg-black">
                      Kolye
                    </option>
                    <option value="bilezik" className="bg-black">
                      Bilezik
                    </option>
                    <option value="kupe" className="bg-black">
                      Kupe
                    </option>
                    <option value="set" className="bg-black">
                      Set
                    </option>
                    <option value="diger" className="bg-black">
                      Diger
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                    Malzeme
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Secin...
                    </option>
                    <option value="14-ayar" className="bg-black">
                      14 Ayar Altin
                    </option>
                    <option value="18-ayar" className="bg-black">
                      18 Ayar Altin
                    </option>
                    <option value="22-ayar" className="bg-black">
                      22 Ayar Altin
                    </option>
                    <option value="24-ayar" className="bg-black">
                      24 Ayar Altin
                    </option>
                    <option value="platin" className="bg-black">
                      Platin
                    </option>
                    <option value="rose" className="bg-black">
                      Rose Altin
                    </option>
                    <option value="beyaz" className="bg-black">
                      Beyaz Altin
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                    Tas
                  </label>
                  <select
                    name="stone"
                    value={formData.stone}
                    onChange={handleChange}
                    className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Secin...
                    </option>
                    <option value="pirlanta" className="bg-black">
                      Pirlanta
                    </option>
                    <option value="yakut" className="bg-black">
                      Yakut
                    </option>
                    <option value="zumrut" className="bg-black">
                      Zumrut
                    </option>
                    <option value="safir" className="bg-black">
                      Safir
                    </option>
                    <option value="turkuaz" className="bg-black">
                      Turkuaz
                    </option>
                    <option value="yok" className="bg-black">
                      Tassiz
                    </option>
                    <option value="diger" className="bg-black">
                      Diger
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                    Butce Araligi
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Secin...
                    </option>
                    <option value="10-25k" className="bg-black">
                      10.000 - 25.000 TL
                    </option>
                    <option value="25-50k" className="bg-black">
                      25.000 - 50.000 TL
                    </option>
                    <option value="50-100k" className="bg-black">
                      50.000 - 100.000 TL
                    </option>
                    <option value="100-250k" className="bg-black">
                      100.000 - 250.000 TL
                    </option>
                    <option value="250k+" className="bg-black">
                      250.000 TL ve uzeri
                    </option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                  Aciklama
                </label>
                <textarea
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-transparent text-cream py-3 gold-border-bottom text-sm resize-none"
                  placeholder="Hayalinizdeki mucevheri tarif edin... Ilham kaynaklari, ozel detaylar, onem verdiginiz noktalar..."
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-block px-12 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-light transition-colors duration-1000"
                >
                  Talep Gonderin
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
