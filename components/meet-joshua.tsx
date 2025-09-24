'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, ChevronRight, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function MeetJoshua() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold font-serif mb-8 text-center hero-text">
        Meet Joshua
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-2/5 flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg animate-tilt"></div>
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/optimized/josh.webp"
                alt="Joshua Okwukwem Ogugua - Master Baker & Founder"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-3/5 text-center lg:text-left"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="prose prose-lg hero-text">
            <p className="mb-6">
              As the founder and head baker, I personally oversee every cake that leaves our bakery. My passion for baking started at a young age, inspired by my mother's traditional recipes that have been passed down through generations.
            </p>
            <p className="mb-8">
              When I'm not in the kitchen creating new cake designs, you can find me teaching baking classes or exploring new flavor combinations. My mission is to make every celebration special with cakes that are as unique as the people they're made for.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="gap-2 group"
              asChild
            >
              <Link href="/gallery">
                View Our Gallery
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 group"
              asChild
            >
              <a href="https://instagram.com/zerethfoods" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
