'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { OrderButton } from '@/components/order-button';
import { Cake, Heart, Star, Calendar, Phone, Clock, Instagram, Facebook, Youtube, ChevronRight, Sparkles } from 'lucide-react';
import { Testimonials } from '@/components/testimonials';
import { MeetJoshua } from '@/components/meet-joshua';
import { OurStory } from '@/components/our-story';
import { TrustIndicators } from '@/components/trust-indicators';
import { FinalCTA } from '@/components/final-cta';
import { Newsletter } from '@/components/newsletter';
import { TrendingProducts } from '@/components/trending-products';
import { ProductShowcase } from '@/components/product-showcase';

export function HomeClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
          <Image
            src="/optimized/baker-sarah-portrait.webp"
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
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="h-4 w-4 text-red-300" />
              <span className="text-sm font-medium text-white">Crafting Sweet Memories Since 2015</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Artisanal Cakes & Pastries <span className="bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent">Made with Love</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Handcrafted with premium ingredients and baked to perfection for your special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OrderButton className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 text-lg" />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
              >
                <Link href="/custom-cake">
                  Design Your Cake
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Trending Products */}
      <TrendingProducts />

      {/* Complete Product Catalog */}
      <ProductShowcase />

      {/* Our Story */}
      <OurStory />
      <MeetJoshua />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
