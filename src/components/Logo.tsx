/**
 * Logo component — uses CSS (dark:hidden / dark:block) to switch between
 * light and dark mode logos instantly, with zero JavaScript and no flash.
 *
 * Place your logo files in /public/:
 *   /public/logo-light.png  ← shown on light backgrounds
 *   /public/logo-dark.png   ← shown on dark backgrounds
 *
 * Size prop: sm (44px), md (52px), lg (64px)
 */

import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const heightClass = { sm: 'h-11', md: 'h-13', lg: 'h-16' }[size];

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      {/* Light mode logo — hidden in dark mode */}
      <Image
        src="/logo-light.png"
        alt="Firmyx"
        width={160}
        height={40}
        priority
        className={`${heightClass} w-auto object-contain block dark:hidden`}
      />
      {/* Dark mode logo — hidden in light mode */}
      <Image
        src="/logo-dark.png"
        alt="Firmyx"
        width={160}
        height={40}
        priority
        className={`${heightClass} w-auto object-contain hidden dark:block`}
      />
    </span>
  );
}
