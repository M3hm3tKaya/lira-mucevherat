"use client";

import clsx from "clsx";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
  label?: string;
  glow?: boolean;
}

export default function ImagePlaceholder({
  className,
  aspectRatio = "aspect-square",
  label,
  glow = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={clsx(
        "image-placeholder relative overflow-hidden",
        aspectRatio,
        glow && "animate-gold-glow",
        className
      )}
    >
      {/* Diamond icon SVG */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg
          width="32"
          height="32"
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
          <path
            d="M2 9H22"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M12 2L8.5 9L12 22L15.5 9L12 2Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        {label && (
          <span className="text-[10px] tracking-[0.3em] text-gold/20 uppercase">
            {label}
          </span>
        )}
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />
    </div>
  );
}
