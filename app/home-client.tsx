'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { OrderButton } from '@/components/order-button';
import { Cake, Heart, Star, Calendar, Phone, Clock, Instagram, Facebook, Youtube, ChevronRight, Sparkles } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';
import { Testimonials } from '@/components/testimonials';

export function HomeClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
          <Image
            src={getOptimizedImagePath("/baker-joshua-workspace.jpg")}
            alt="Professional Baker Preparing Cakes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-yellow-100">Crafting Sweet Memories Since 2015</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif tracking-tight leading-tight">
              <span className="text-overlay px-4 py-2">
                Artisanal Cakes & Pastries <span className="text-yellow-300">Made with Love</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              <span className="text-overlay px-4 py-2 inline-block">
                Handcrafted with premium ingredients and baked to perfection for your special moments.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OrderButton size="lg" className="text-lg px-8 py-6">
                Order Now
              </OrderButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                asChild
              >
                <Link href="/custom-cake">
                  Custom Order <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the home page content */}
      {/* ... */}
    </div>
  );
}
