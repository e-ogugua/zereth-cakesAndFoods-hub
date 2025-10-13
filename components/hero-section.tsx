'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-muted">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <Image
          src="/optimized/beautiful-custom-wedding-cake-elegant-design.webp"
          alt="Beautiful Custom Wedding Cake - Zereth Cakes Hub Story"
          fill
          className="object-cover"
          priority
        />
      </div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Our Story</h1>
        <p className="hero-subtitle">Crafting delicious memories one cake at a time</p>
      </motion.div>
    </section>
  );
}
