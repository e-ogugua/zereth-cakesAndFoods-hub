'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { getOptimizedImagePath } from '@/lib/image-utils';

export function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-muted">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <Image
          src={getOptimizedImagePath("/baker-sarah-workspace.jpg")}
          alt="Our Bakery"
          fill
          className="object-cover"
          priority
        />
      </div>
      <motion.div 
        className="container relative z-10 px-4 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Crafting delicious memories one cake at a time
        </p>
      </motion.div>
    </section>
  );
}
