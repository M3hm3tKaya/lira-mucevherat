"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/collections";

interface LightboxProps {
  product: Product | null;
  onClose: () => void;
}

export default function Lightbox({ product, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-card border border-border max-w-lg w-full p-8 lg:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-cream/50 hover:text-gold transition-colors duration-700"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>

            {/* Product image placeholder */}
            <div className="image-placeholder aspect-square mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold/20"
                >
                  <path
                    d="M12 2L2 9L12 22L22 9L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                  <path d="M2 9H22" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M12 2L8.5 9L12 22L15.5 9L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 animate-shimmer" />
            </div>

            {/* Product info */}
            <h3
              className="text-xl lg:text-2xl text-cream mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {product.name}
            </h3>
            <p className="text-sm text-cream/60 mb-4 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold/60">
                {product.material}
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold">
                {product.price}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
