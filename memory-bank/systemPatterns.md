# System Patterns: Lira Mucevherat

## Architecture
- Next.js 16 App Router with TypeScript
- Tailwind CSS v4 for styling
- Framer Motion for page/section animations
- Lenis for smooth scrolling
- Static data layer (no CMS/database)

## Key Patterns
1. **AnimatedSection**: Reusable wrapper for scroll-triggered fade-in animations
2. **ImagePlaceholder**: Consistent placeholder component with gold shimmer effect
3. **Server/Client Split**: Dynamic route pages use server component for data loading + client component for interactivity
4. **generateStaticParams**: Pre-renders all collection detail pages at build time
5. **Lightbox**: Client-side product detail overlay

## Design System
- Colors: Black (#000), Gold (#C9A96E), Light Gold (#D4B87A), Cream (#F5F0E8), Card (#0A0A0A), Border (#1A1A1A)
- Fonts: Playfair Display (headings), Inter (body)
- Animations: 1-1.5s duration, ease [0.22, 1, 0.36, 1] curve
- Spacing: Consistent 6/12px horizontal padding, 24/32 vertical section padding
