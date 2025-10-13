'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { OrderButton } from '@/components/order-button';
import { Cake, Instagram, ChevronRight, Phone } from 'lucide-react';

// Sample gallery items - replace with your actual images
const galleryItems = [
  { id: 1, category: 'wedding', src: '/optimized/beautiful-custom-wedding-cake-elegant-design.webp', alt: 'Elegant Wedding Cake' },
  { id: 2, category: 'birthday', src: '/optimized/birthday.webp', alt: 'Colorful Birthday Cake' },
  { id: 3, category: 'bento', src: '/optimized/birthday2.webp', alt: 'Cute Bento Cake' },
  { id: 4, category: 'wedding', src: '/optimized/wedding-cake-elegant-multi-tier.webp', alt: 'Floral Wedding Cake' },
  { id: 5, category: 'custom', src: '/optimized/birthay-cake-1.webp', alt: 'Custom Design Cake' },
  { id: 6, category: 'birthday', src: '/optimized/cake-size-6-inch.webp', alt: 'Kids Birthday Cake' },
  { id: 7, category: 'bento', src: '/optimized/cake-size-10-inch.webp', alt: 'Minimalist Bento Cake' },
  { id: 8, category: 'custom', src: '/optimized/cake-size-12-inch.webp', alt: 'Themed Custom Cake' },
  { id: 9, category: 'wedding', src: '/optimized/wedding.webp', alt: 'Rustic Wedding Cake' },
  { id: 10, category: 'bento', src: '/optimized/artisanal-pastries-fresh-baked.webp', alt: 'Elegant Bento Cake' },
  { id: 11, category: 'birthday', src: '/optimized/baker-emma-workspace.webp', alt: 'Adult Birthday Cake' },
  { id: 12, category: 'custom', src: '/optimized/baker-Joshua-potrait.webp', alt: 'Special Design Cake' },
  { id: 13, category: 'wedding', src: '/optimized/weddingcake.webp', alt: 'Elegant Wedding Cake' },
  { id: 14, category: 'birthday', src: '/optimized/rainbow-unicorn-birthday-cake.webp', alt: 'Unicorn Birthday Cake' },
  { id: 15, category: 'custom', src: '/optimized/chocolate-ganache-celebration-cake.webp', alt: 'Chocolate Celebration Cake' },
  { id: 16, category: 'wedding', src: '/optimized/elegant-wedding-cake-three-tier.webp', alt: 'Three Tier Wedding Cake' },
  { id: 17, category: 'bento', src: '/optimized/gourmet-cupcakes-assorted-flavors.webp', alt: 'Assorted Cupcakes' },
  { id: 18, category: 'custom', src: '/optimized/gourmet-cupcakes-dozen-assorted.webp', alt: 'Dozen Cupcakes' },
  { id: 19, category: 'birthday', src: '/optimized/mothers-cake.webp', alt: 'Mother\'s Day Cake' },
  { id: 20, category: 'wedding', src: '/optimized/wedding-cake1.webp', alt: 'Wedding Cake Design' },
  { id: 21, category: 'custom', src: '/optimized/other-designs.webp', alt: 'Custom Design' },
  { id: 22, category: 'bento', src: '/optimized/other2.webp', alt: 'Specialty Cake' },
  { id: 23, category: 'wedding', src: '/optimized/corporate-cake-professional-design.webp', alt: 'Corporate Cake' },
  { id: 24, category: 'birthday', src: '/optimized/corporate-logo-cake-professional.webp', alt: 'Logo Cake' },
  { id: 25, category: 'custom', src: '/optimized/decoration-elegant.webp', alt: 'Elegant Decoration' },
  { id: 26, category: 'wedding', src: '/optimized/decoration-floral.webp', alt: 'Floral Decoration' },
  { id: 27, category: 'bento', src: '/optimized/decoration-modern.webp', alt: 'Modern Decoration' },
  { id: 28, category: 'custom', src: '/optimized/decoration-themed.webp', alt: 'Themed Decoration' },
  { id: 29, category: 'birthday', src: '/optimized/decoration-vintage.webp', alt: 'Vintage Decoration' },
  { id: 30, category: 'wedding', src: '/optimized/decoration-whimsical.webp', alt: 'Whimsical Decoration' },
  { id: 31, category: 'custom', src: '/optimized/savory-baked-goods-selection.webp', alt: 'Savory Selection' },
  { id: 32, category: 'bento', src: '/optimized/artisanal-croissants-selection.webp', alt: 'Croissant Selection' },
  { id: 33, category: 'wedding', src: '/optimized/cake-size-two-tier.webp', alt: 'Two Tier Cake' },
  { id: 34, category: 'birthday', src: '/optimized/cake-size-three-tier.webp', alt: 'Three Tier Cake' },
  { id: 35, category: 'custom', src: '/optimized/cake-size-8-inch.webp', alt: '8 Inch Cake' },
  { id: 36, category: 'wedding', src: '/optimized/subtle-cake-pattern.webp', alt: 'Subtle Pattern Cake' },
];

const categories = [
  { id: 'all', name: 'All Creations' },
  { id: 'wedding', name: 'Wedding Cakes' },
  { id: 'birthday', name: 'Birthday Cakes' },
  { id: 'bento', name: 'Bento Cakes' },
  { id: 'custom', name: 'Custom Designs' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] flex items-center justify-center bg-muted">
        <div className="hero-overlay" />
        <Image
          src="/optimized/beautiful-custom-wedding-cake-elegant-design.webp"
          alt="Our Gallery"
          fill
          className="object-cover"
          priority
        />

        <div className="hero-content">
          <h1 className="hero-title">Our Gallery</h1>
          <p className="hero-subtitle">A showcase of our delicious creations</p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-12 bg-background">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                    View Details
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of our delicious creations?
            </p>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://instagram.com/zerethfoods" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Follow us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cake className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 hero-text">Inspired by Our Creations?</h2>
            <p className="text-xl mb-8 hero-text">
              Let&apos;s create something amazing together for your next special occasion!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OrderButton 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Order Now
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </OrderButton>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <a href="tel:+2348060147046" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt=""
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
