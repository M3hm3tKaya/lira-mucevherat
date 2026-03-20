"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/koleksiyonlar", label: "Koleksiyonlar" },
  { href: "/atolye", label: "Atolye" },
  { href: "/ismarlama", label: "Ismarlama" },
  { href: "/magaza", label: "Mağaza" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span
              className="text-2xl lg:text-3xl font-bold tracking-[0.3em] gold-gradient-text"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              LIRA
            </span>
            <span className="text-[9px] tracking-[0.35em] text-gold/60 uppercase mt-[-2px]">
              Mücevherat
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-[13px] tracking-[0.15em] uppercase transition-colors duration-700",
                  pathname === link.href
                    ? "text-gold"
                    : "text-cream/70 hover:text-cream"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-[6px] p-3 min-w-[44px] min-h-[44px] items-center justify-center"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="block w-6 h-[1px] bg-gold"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="block w-6 h-[1px] bg-gold"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="block w-6 h-[1px] bg-gold"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-black border-b border-border"
          >
            <div className="px-4 sm:px-6 py-8 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "text-sm tracking-[0.2em] uppercase block py-3 min-h-[44px] flex items-center",
                      pathname === link.href
                        ? "text-gold"
                        : "text-cream/70"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
