'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { OrderButton } from '@/components/order-button';
import { Sparkles } from 'lucide-react';

// Using dynamic imports to load heavy components only when needed (below the fold)
// This reduces initial bundle size and improves page load performance
const TrustIndicators = dynamic(() => import('@/components/trust-indicators').then(mod => ({ default: mod.TrustIndicators })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const TrendingProducts = dynamic(() => import('@/components/trending-products').then(mod => ({ default: mod.TrendingProducts })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const ProductShowcase = dynamic(() => import('@/components/product-showcase').then(mod => ({ default: mod.ProductShowcase })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const OurStory = dynamic(() => import('@/components/our-story').then(mod => ({ default: mod.OurStory })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const MeetJoshua = dynamic(() => import('@/components/meet-joshua').then(mod => ({ default: mod.MeetJoshua })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const Newsletter = dynamic(() => import('@/components/newsletter').then(mod => ({ default: mod.Newsletter })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

const FinalCTA = dynamic(() => import('@/components/final-cta').then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
});

export function HomeClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile-first responsive design */}
      <div className="relative h-screen max-h-[100vh] sm:h-[90vh] lg:h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
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
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Professional badge - simplified animation */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="h-4 w-4 text-red-300" />
              <span className="text-sm font-medium text-white">Professional Cake Design Since 2015</span>
            </div>

            {/* CTA Buttons - responsive layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OrderButton className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 text-lg w-full sm:w-auto touch-target focus-ring" />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg w-full sm:w-auto touch-target focus-ring"
              >
                <Link href="/custom-cake">
                  Design Your Cake
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Text Section - Responsive typography scaling */}
      <div className="bg-gradient-to-r from-red-50 via-pink-50 to-red-50 section-spacing border-b border-red-200">
        <div className="container mx-auto container-spacing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
              Custom Cakes and Pastries <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Professionally Crafted</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Quality baked goods made with premium ingredients. Custom designs available for all occasions and celebrations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trust Indicators */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <TrustIndicators />
      </Suspense>

      {/* Trending Products */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <TrendingProducts />
      </Suspense>

      {/* Complete Product Catalog */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <ProductShowcase />
      </Suspense>

      {/* Our Story */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <OurStory />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <MeetJoshua />
      </Suspense>

      {/* Testimonials */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <Testimonials />
      </Suspense>

      {/* Newsletter */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <Newsletter />
      </Suspense>

      {/* Final CTA */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
        <FinalCTA />
      </Suspense>
    </div>
  );
}
