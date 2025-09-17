'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { OrderButton } from '@/components/order-button';
import { Cake, Instagram, Facebook, Twitter, ArrowRight, Search, X, Phone, ChevronRight } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';

// Sample gallery items - replace with your actual images
const galleryItems = [
  { id: 1, category: 'wedding', src: getOptimizedImagePath('/beautiful-custom-wedding-cake-elegant-design.jpg'), alt: 'Elegant Wedding Cake' },
  { id: 2, category: 'birthday', src: getOptimizedImagePath('/birthday.jpeg'), alt: 'Colorful Birthday Cake' },
  { id: 3, category: 'bento', src: getOptimizedImagePath('/birthday2.jpeg'), alt: 'Cute Bento Cake' },
  { id: 4, category: 'wedding', src: getOptimizedImagePath('/birthday-cake-2.jpeg'), alt: 'Floral Wedding Cake' },
  { id: 5, category: 'custom', src: getOptimizedImagePath('/birthay-cake-1.jpeg'), alt: 'Custom Design Cake' },
  { id: 6, category: 'birthday', src: getOptimizedImagePath('/cake-size-6-inch.jpg'), alt: 'Kids Birthday Cake' },
  { id: 7, category: 'bento', src: getOptimizedImagePath('/cake-size-10-inch.jpg'), alt: 'Minimalist Bento Cake' },
  { id: 8, category: 'custom', src: getOptimizedImagePath('/cake-size-12-inch.jpg'), alt: 'Themed Custom Cake' },
  { id: 9, category: 'wedding', src: getOptimizedImagePath('/artisanal-croissants-selection.jpg'), alt: 'Rustic Wedding Cake' },
  { id: 10, category: 'bento', src: getOptimizedImagePath('/artisanal-pastries-fresh-baked.jpg'), alt: 'Elegant Bento Cake' },
  { id: 11, category: 'birthday', src: getOptimizedImagePath('/baker-emma-workspace.jpg'), alt: 'Adult Birthday Cake' },
  { id: 12, category: 'custom', src: getOptimizedImagePath('/baker-joshua-workspace.jpg'), alt: 'Special Design Cake' },
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
      <section className="relative h-[50vh] flex items-center justify-center bg-muted">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50" />
          <Image
            src={getOptimizedImagePath("/beautiful-custom-wedding-cake-elegant-design.jpg")}
            alt="Our Gallery"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl">A showcase of our delicious creations</p>
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
            <h2 className="text-3xl font-bold mb-6">Inspired by Our Creations?</h2>
            <p className="text-xl mb-8">
              Let's create something amazing together for your next special occasion!
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
