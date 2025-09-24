'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { OrderButton } from '@/components/order-button';
import { Cake, Heart, Star, Calendar, Phone, Clock, Instagram, Facebook, Youtube, ChevronRight, Sparkles } from 'lucide-react';
import { Testimonials } from '@/components/testimonials';
import { FeaturedCategories } from '@/components/featured-categories';
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
      <div className="relative h-[80vh] flex items-center justify-center bg-muted overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-yellow-100">Crafting Sweet Memories Since 2015</span>
            </div>
            <h1 className="hero-title">
              Artisanal Cakes & Pastries <span className="hero-accent">Made with Love</span>
            </h1>
            <p className="hero-subtitle">
              Handcrafted with premium ingredients and baked to perfection for your special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OrderButton size="lg" className="hero-button">
                Order Now
              </OrderButton>
              <Button
                variant="outline"
                size="lg"
                className="hero-button-outline"
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

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Trending Products */}
      <TrendingProducts />

      {/* Complete Product Catalog */}
      <ProductShowcase />

      {/* Our Story */}
      <OurStory />

      {/* Meet Joshua */}
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
