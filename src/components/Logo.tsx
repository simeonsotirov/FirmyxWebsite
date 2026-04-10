/**
 * ─── HOW TO ADD YOUR LOGO ────────────────────────────────────────────────────
 *
 * 1. Copy your logo file (PNG, SVG, WebP, etc.) into the /public/ folder.
 *    Example: /public/logo.png
 *
 * 2. In the <Image> tag below, change:
 *      src="/YOUR-LOGO-FILE.png"   ← your file name
 *      width={160}                 ← adjust to your logo's natural width
 *      height={40}                 ← adjust to your logo's natural height
 *      alt="Firmyx"                ← your brand name for accessibility
 *
 * 3. The `size` prop controls the rendered height:
 *      sm  → h-7  (28 px)  — used in the Footer
 *      md  → h-9  (36 px)  — used in the Header
 *      lg  → h-11 (44 px)  — available for hero usage
 *
 * That's it — no other changes are needed. The logo will appear everywhere
 * automatically (Header, Footer, and any other place Logo is imported).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const heightClass = { sm: 'h-7', md: 'h-9', lg: 'h-11' }[size];

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      {/*
       * ↓↓↓  PASTE YOUR LOGO HERE  ↓↓↓
       * Replace the src, width, height, and alt values below.
       * Keep priority on the header logo so it loads with no delay.
       */}
      <Image
        src="/logo.png"          // ← change to your file, e.g. /logo.svg
        alt="Firmyx"
        width={160}              // ← set to your logo's natural pixel width
        height={40}              // ← set to your logo's natural pixel height
        priority
        className={`${heightClass} w-auto object-contain`}
      />
    </span>
  );
}
