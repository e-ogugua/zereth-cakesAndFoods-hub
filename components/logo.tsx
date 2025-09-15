'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getOptimizedImagePath } from '@/lib/image-utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ 
  className = '',
  variant = 'default',
  size = 'md' 
}: LogoProps) {
  const sizeMap = {
    sm: { width: 120, height: 40, className: 'h-8 w-auto' },
    md: { width: 160, height: 60, className: 'h-12 w-auto' },
    lg: { width: 200, height: 70, className: 'h-14 w-auto' },
    xl: { width: 240, height: 80, className: 'h-16 w-auto md:h-20 md:w-auto' },
  };

  const logoVariant = variant === 'default' 
    ? (typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    : variant;

  const logoSource = logoVariant === 'dark' 
    ? getOptimizedImagePath("/Zereth-logo2.jpeg") 
    : getOptimizedImagePath("/Zereth-logo1.jpeg");

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src={logoSource}
        alt="Zereth Cakes Hub - Where Edible Art Meets Extraordinary Taste"
        width={sizeMap[size].width}
        height={sizeMap[size].height}
        className={`${sizeMap[size].className} object-contain transition-all duration-300 hover:opacity-90`}
        priority
      />
    </Link>
  );
}
