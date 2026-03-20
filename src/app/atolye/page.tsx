"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const timeline = [
  {
    year: "1987",
    title: "Başlangıç",
    description:
      "Usta Ahmet Lira, Nişantaşı'nda küçük bir atölyede el yapımı mücevher üretmeye başlar. Geleneksel Türk kuyumculuk sanatını yaşatma tutkusuyla yola çıkar.",
  },
  {
    year: "1995",
    title: "İlk Koleksiyon",
    description:
      "Bizantion koleksiyonu ile ulusal tanınırlık kazanılır. Bizans örgü tekniği modern çizgilerle buluşturulur ve büyük ilgi görür.",
  },
  {
    year: "2005",
    title: "İkinci Kuşak",
    description:
      "Mehmet Lira işletmeye dahil olur. Aile geleneği modern vizyonla harmanlanır. Nişantaşı'ndaki flagship mağaza açılır.",
  },
  {
    year: "2015",
    title: "Uluslararası Tanınırlık",
    description:
      "Basel ve Paris mücevher fuarlarında Türkiye'yi temsil eder. Moderna koleksiyonu uluslararası ödüllerle tanınır.",
  },
  {
    year: "2020",
    title: "Üçüncü Kuşak",
    description:
      "Elif Lira, dijital tasarım yeteneklerini geleneksel zanaata katar. Atelier sınırlı seri koleksiyonu lansman yapılır.",
  },
  {
    year: "2024",
    title: "Bugün",
    description:
      "Üç kuşak bir arada, geleneği geleceğe taşıyoruz. Her parça, yüzlerce yıllık bilginin ve tutkulu işçiliğin ürünüdür.",
  },
];

const productionSteps = [
  {
    step: "01",
    title: "Tasarım & Çizim",
    description:
      "Her parça, kağıt üzerinde ince çizimlerle başlar. Usta tasarımcımız, her açıdan inceleyerek mükemmel proporsiyon ve estetiği yakalar.",
  },
  {
    step: "02",
    title: "Mum Model & Döküm",
    description:
      "Tasarım, el ile mum modele dönüştürülür. Kayıp mum tekniği ile en ince detaylar korunarak altın veya platin dökümü yapılır.",
  },
  {
    step: "03",
    title: "Taş Yerleşimi & İşçilik",
    description:
      "Her pırlanta ve değerli taş, mikroskop altında titizlikle yerine oturtulur. El perdahlama ile yüzey mükemmel parlaklığa ulaşır.",
  },
  {
    step: "04",
    title: "Kalite Kontrol & Sunum",
    description:
      "Her parça, 12 farklı kalite kontrol noktasından geçer. Özel kutusu ve sertifikasıyla birlikte sahibine sunulur.",
  },
];

export default function AtolyePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
              Atolye & Hikaye
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl text-cream mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Üç Kuşak, Bir Tutku
            </h1>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              1987&apos;den bu yana, her mücevherimizde emeğin, tutkunun ve
              ustalığın izini taşıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl text-center text-cream mb-10 sm:mb-16"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Yolculuğumuz
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-border" />

            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-6 sm:gap-8 mb-10 sm:mb-16 lg:mb-20 ${
                    i % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-black z-10 mt-1" />

                  {/* Content */}
                  <div
                    className={`pl-12 lg:pl-0 lg:w-1/2 ${
                      i % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <span
                      className="text-3xl sm:text-4xl lg:text-5xl gold-gradient-text font-bold block mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="text-xl text-cream mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Photo */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection>
            <ImagePlaceholder
              aspectRatio="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
              label="Nişantaşı Atölyemiz"
              glow
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Production Steps */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-16 lg:mb-24">
              <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
                Üretim Süreci
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sanatın 4 Aşaması
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            {productionSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.15}>
                <div className="bg-card border border-border p-5 sm:p-8 lg:p-10 hover:border-gold/20 transition-all duration-1000">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className="text-3xl sm:text-4xl lg:text-5xl gold-gradient-text font-bold shrink-0"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3
                        className="text-lg text-cream mb-3"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-cream/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <ImagePlaceholder
                      aspectRatio="aspect-[16/9]"
                      label={step.title}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
