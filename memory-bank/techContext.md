# Tech Context: Lira Mucevherat

## Stack
- **Framework**: Next.js 16.2.0 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with @theme inline
- **Animation**: Framer Motion 12, GSAP 3 (available), @gsap/react
- **Scroll**: Lenis smooth scrolling
- **Utilities**: clsx for conditional classes

## Key Conventions (Next.js 16)
- `params` is a Promise - must use `await` or `use()` to access
- `searchParams` is a Promise
- `generateStaticParams` for pre-rendering dynamic routes
- Server Components by default, `"use client"` directive for client components

## Build & Dev
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
