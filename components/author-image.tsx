'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type AuthorImageProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withDecoration?: boolean;
};

export function AuthorImage({
  className = '',
  size = 'md',
  withDecoration = true
}: AuthorImageProps) {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32 md:w-40 md:h-40',
    lg: 'w-48 h-48 md:w-64 md:h-64',
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative rounded-full overflow-hidden border-4 border-background shadow-lg ${sizeClasses[size]}`}
      >
        <Image
          src="/optimized/baker-Joshua-potrait.webp"
          alt="CEO Chukwuka Emmanuel Ogugua - Founder of Zereth Cakes Hub"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {withDecoration && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/90 flex items-center justify-center text-white z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10a1 1 0 01-1.64 0l-7-10A1 1 0 014 7h4V2a1 1 0 011.7-.7l1.6 1.6 1.6-1.6a1 1 0 011.4.146z" clipRule="evenodd" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-secondary/80 flex items-center justify-center z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
}
