import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="text-3xl font-bold tracking-[0.3em] gold-gradient-text mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              LIRA
            </h3>
            <p className="text-[10px] tracking-[0.35em] text-gold/60 uppercase mb-6">
              Mücevherat &bull; 1987&apos;den beri
            </p>
            <p className="text-sm text-cream/50 leading-relaxed max-w-[280px]">
              Üç kuşaktır Nişantaşı&apos;nda, el yapımı mücevherlerin en ince
              detaylarını ustaların ellerinde şekillendiriyoruz.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase text-gold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kesfet
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/koleksiyonlar", label: "Koleksiyonlar" },
                { href: "/atolye", label: "Atolye & Hikaye" },
                { href: "/ismarlama", label: "Ismarlama Tasarım" },
                { href: "/magaza", label: "Mağaza" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Collections */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase text-gold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Koleksiyonlar
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/koleksiyonlar/eternite", label: "Eternite" },
                { href: "/koleksiyonlar/bizantion", label: "Bizantion" },
                { href: "/koleksiyonlar/moderna", label: "Moderna" },
                { href: "/koleksiyonlar/heritage", label: "Heritage" },
                { href: "/koleksiyonlar/nisan", label: "Nisan" },
                { href: "/koleksiyonlar/atelier", label: "Atelier" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase text-gold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              İletişim
            </h4>
            <div className="flex flex-col gap-3 text-sm text-cream/50">
              <p>Nişantaşı Mah. Abdi İpekçi Cad.</p>
              <p>No: 42/A, Şişli / İstanbul</p>
              <p className="mt-2">+90 212 240 87 87</p>
              <p>info@liramucevherat.com</p>
              <div className="mt-4 flex gap-4">
                <span className="text-gold/60 hover:text-gold transition-colors duration-700 cursor-pointer text-xs tracking-widest uppercase">
                  Instagram
                </span>
                <span className="text-gold/60 hover:text-gold transition-colors duration-700 cursor-pointer text-xs tracking-widest uppercase">
                  Pinterest
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/30 tracking-wider">
            &copy; 2024 Lira Mücevherat. Tüm hakları saklıdır.
          </p>
          <p className="text-[11px] text-cream/30 tracking-wider">
            Nişantaşı, İstanbul &bull; 1987&apos;den beri
          </p>
        </div>
      </div>
    </footer>
  );
}
