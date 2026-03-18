"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const timeline = [
  {
    year: "1987",
    title: "Baslangic",
    description:
      "Usta Ahmet Lira, Nisantasi'nda kucuk bir atolyede el yapimi mucevher uretmeye baslar. Geleneksel Turk kuyumculuk sanatini yasatma tutkusuyla yola cikar.",
  },
  {
    year: "1995",
    title: "Ilk Koleksiyon",
    description:
      "Bizantion koleksiyonu ile ulusal taninirlik kazanilir. Bizans orgu teknigi modern cizgilerle bulusturulur ve buyuk ilgi gorur.",
  },
  {
    year: "2005",
    title: "Ikinci Kusak",
    description:
      "Mehmet Lira isletmeye dahil olur. Aile gelenegi modern vizyonla harmanlanir. Nisantasi'ndaki flagship magaza acilir.",
  },
  {
    year: "2015",
    title: "Uluslararasi Taninirlirlik",
    description:
      "Basel ve Paris mucevher fuarlarinda Turkiye'yi temsil eder. Moderna koleksiyonu uluslararasi odullerle taninir.",
  },
  {
    year: "2020",
    title: "Ucuncu Kusak",
    description:
      "Elif Lira, dijital tasarim yeteneklerini geleneksel zanaata katar. Atelier sinirli seri koleksiyonu lansman yapilir.",
  },
  {
    year: "2024",
    title: "Bugun",
    description:
      "Uc kusak bir arada, gelenegi gelecege tasiyoruz. Her parca, yuzlerce yillik bilginin ve tutkulu iscilin urunudur.",
  },
];

const productionSteps = [
  {
    step: "01",
    title: "Tasarim & Cizim",
    description:
      "Her parca, kagit uzerinde ince cizimlerle baslar. Usta tasarimcimiz, her acidan inceleyerek mukemmel proporsiyon ve estetigi yakalar.",
  },
  {
    step: "02",
    title: "Mum Model & Dokum",
    description:
      "Tasarim, el ile mum modele donusturulur. Kayip mum teknigi ile en ince detaylar korunarak altin veya platin dokumu yapilir.",
  },
  {
    step: "03",
    title: "Tas Yerlesimi & Iscilk",
    description:
      "Her pirlanta ve degerli tas, mikroskop altinda titizlikle yerine oturulur. El perdahlama ile yuzey mukemmel parlaklga ulasir.",
  },
  {
    step: "04",
    title: "Kalite Kontrol & Sunum",
    description:
      "Her parca, 12 farkli kalite kontrol noktasindan gecer. Ozel kutusu ve sertifikasiyla birlikte sahibine sunulur.",
  },
];

export default function AtolyePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
              className="text-4xl lg:text-6xl text-cream mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Uc Kusak, Bir Tutku
            </h1>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              1987&apos;den bu yana, her mucevherimizde emegin, tutkuun ve
              ustalgin izini tasiyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <h2
              className="text-2xl lg:text-3xl text-center text-cream mb-16"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Yolculugumuz
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
                  className={`relative flex items-start gap-8 mb-16 lg:mb-20 ${
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
                      className="text-4xl lg:text-5xl gold-gradient-text font-bold block mb-2"
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
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <ImagePlaceholder
              aspectRatio="aspect-[21/9]"
              label="Nisantasi Atölyemiz"
              glow
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Production Steps */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[11px] tracking-[0.4em] text-gold/60 uppercase block mb-4">
                Uretim Sureci
              </span>
              <h2
                className="text-3xl lg:text-4xl text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sanatin 4 Asamasi
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {productionSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.15}>
                <div className="bg-card border border-border p-8 lg:p-10 hover:border-gold/20 transition-all duration-1000">
                  <div className="flex items-start gap-6">
                    <span
                      className="text-4xl lg:text-5xl gold-gradient-text font-bold shrink-0"
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
