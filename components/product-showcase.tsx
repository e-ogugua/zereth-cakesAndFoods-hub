'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, Grid, List, ChevronDown, ChevronUp } from 'lucide-react';

const allProducts = [
  // Wedding Cakes
  {
    id: "wedding-1",
    name: "Elegant Three-Tier Wedding Cake",
    price: { USD: 450, GBP: 350, NGN: 650000 },
    rating: 4.9,
    reviewCount: 127,
    image: "/optimized/elegant-wedding-cake-three-tier.webp",
    category: "Wedding Cakes",
    preparationTime: "72 hours",
    isCustomizable: true,
    description: "A stunning three-tier wedding cake with elegant floral decorations"
  },
  {
    id: "wedding-2",
    name: "Beautiful Custom Wedding Cake",
    price: { USD: 380, GBP: 290, NGN: 550000 },
    rating: 4.8,
    reviewCount: 94,
    image: "/optimized/beautiful-custom-wedding-cake-elegant-design.webp",
    category: "Wedding Cakes",
    preparationTime: "72 hours",
    isCustomizable: true,
    description: "Custom designed wedding cake with intricate details"
  },
  {
    id: "wedding-3",
    name: "Wedding Cake Elegant Multi-Tier",
    price: { USD: 520, GBP: 400, NGN: 750000 },
    rating: 4.9,
    reviewCount: 156,
    image: "/optimized/wedding-cake-elegant-multi-tier.webp",
    category: "Wedding Cakes",
    preparationTime: "96 hours",
    isCustomizable: true,
    description: "Multi-tier wedding cake with sophisticated design"
  },
  {
    id: "wedding-4",
    name: "Wedding Cake Design",
    price: { USD: 320, GBP: 250, NGN: 460000 },
    rating: 4.7,
    reviewCount: 78,
    image: "/optimized/wedding-cake1.webp",
    category: "Wedding Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Classic wedding cake with modern twist"
  },
  {
    id: "wedding-5",
    name: "Elegant Wedding Cake",
    price: { USD: 280, GBP: 220, NGN: 400000 },
    rating: 4.6,
    reviewCount: 112,
    image: "/optimized/weddingcake.webp",
    category: "Wedding Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Elegant single-tier wedding cake"
  },

  // Birthday Cakes
  {
    id: "birthday-1",
    name: "Rainbow Unicorn Birthday Cake",
    price: { USD: 85, GBP: 65, NGN: 120000 },
    rating: 4.7,
    reviewCount: 89,
    image: "/optimized/rainbow-unicorn-birthday-cake.webp",
    category: "Birthday Cakes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Magical unicorn cake for birthday celebrations"
  },
  {
    id: "birthday-2",
    name: "Colorful Birthday Cake",
    price: { USD: 75, GBP: 58, NGN: 108000 },
    rating: 4.8,
    reviewCount: 134,
    image: "/optimized/birthday.webp",
    category: "Birthday Cakes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Vibrant birthday cake with colorful decorations"
  },
  {
    id: "birthday-3",
    name: "Mother's Day Special Cake",
    price: { USD: 95, GBP: 75, NGN: 135000 },
    rating: 4.9,
    reviewCount: 167,
    image: "/optimized/mothers-cake.webp",
    category: "Birthday Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Special cake for Mother's Day celebrations"
  },
  {
    id: "birthday-4",
    name: "Birthday Cake Colorful Celebration",
    price: { USD: 65, GBP: 50, NGN: 93000 },
    rating: 4.6,
    reviewCount: 98,
    image: "/optimized/birthday-cake-colorful-celebration.webp",
    category: "Birthday Cakes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Fun and colorful birthday cake"
  },

  // Cupcakes
  {
    id: "cupcake-1",
    name: "Gourmet Cupcake Dozen",
    price: { USD: 36, GBP: 28, NGN: 52000 },
    rating: 4.8,
    reviewCount: 156,
    image: "/optimized/gourmet-cupcakes-dozen-assorted.webp",
    category: "Cupcakes",
    preparationTime: "4 hours",
    isCustomizable: false,
    description: "Assorted gourmet cupcakes in various flavors"
  },
  {
    id: "cupcake-2",
    name: "Gourmet Cupcakes Assorted Flavors",
    price: { USD: 42, GBP: 32, NGN: 60000 },
    rating: 4.7,
    reviewCount: 89,
    image: "/optimized/gourmet-cupcakes-assorted-flavors.webp",
    category: "Cupcakes",
    preparationTime: "4 hours",
    isCustomizable: false,
    description: "Premium assorted flavor cupcakes"
  },

  // Corporate Cakes
  {
    id: "corporate-1",
    name: "Corporate Logo Cake",
    price: { USD: 150, GBP: 115, NGN: 215000 },
    rating: 4.7,
    reviewCount: 78,
    image: "/optimized/corporate-logo-cake-professional.webp",
    category: "Corporate Events",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Professional cake with company logo"
  },
  {
    id: "corporate-2",
    name: "Corporate Cake Professional Design",
    price: { USD: 120, GBP: 92, NGN: 172000 },
    rating: 4.8,
    reviewCount: 145,
    image: "/optimized/corporate-cake-professional-design.webp",
    category: "Corporate Events",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Elegant corporate event cake"
  },

  // Pastries
  {
    id: "pastry-1",
    name: "Artisanal Pastries Selection",
    price: { USD: 45, GBP: 35, NGN: 65000 },
    rating: 4.6,
    reviewCount: 112,
    image: "/optimized/artisanal-pastries-fresh-baked.webp",
    category: "Pastries",
    preparationTime: "6 hours",
    isCustomizable: false,
    description: "Fresh baked artisanal pastries"
  },
  {
    id: "pastry-2",
    name: "Artisanal Croissants Selection",
    price: { USD: 32, GBP: 25, NGN: 46000 },
    rating: 4.5,
    reviewCount: 67,
    image: "/optimized/artisanal-croissants-selection.webp",
    category: "Pastries",
    preparationTime: "6 hours",
    isCustomizable: false,
    description: "Fresh croissants and pastries"
  },

  // Bento Cakes
  {
    id: "bento-1",
    name: "Bento Cake Collection",
    price: { USD: 25, GBP: 20, NGN: 36000 },
    rating: 4.8,
    reviewCount: 89,
    image: "/optimized/birthday2.webp",
    category: "Bento Cakes",
    preparationTime: "12 hours",
    isCustomizable: true,
    description: "Adorable mini bento cakes"
  },

  // Savory Items
  {
    id: "savory-1",
    name: "Savory Baked Goods Selection",
    price: { USD: 55, GBP: 42, NGN: 78000 },
    rating: 4.7,
    reviewCount: 134,
    image: "/optimized/savory-baked-goods-selection.webp",
    category: "Savory Items",
    preparationTime: "8 hours",
    isCustomizable: false,
    description: "Delicious savory baked goods"
  },

  // Cake Sizes
  {
    id: "size-1",
    name: "6 Inch Cake",
    price: { USD: 40, GBP: 30, NGN: 57000 },
    rating: 4.6,
    reviewCount: 78,
    image: "/optimized/cake-size-6-inch.webp",
    category: "Cake Sizes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Perfect for small gatherings"
  },
  {
    id: "size-2",
    name: "8 Inch Cake",
    price: { USD: 55, GBP: 42, NGN: 78000 },
    rating: 4.7,
    reviewCount: 112,
    image: "/optimized/cake-size-8-inch.webp",
    category: "Cake Sizes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Ideal for medium celebrations"
  },
  {
    id: "size-3",
    name: "10 Inch Cake",
    price: { USD: 75, GBP: 58, NGN: 108000 },
    rating: 4.8,
    reviewCount: 145,
    image: "/optimized/cake-size-10-inch.webp",
    category: "Cake Sizes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Great for larger parties"
  },
  {
    id: "size-4",
    name: "12 Inch Cake",
    price: { USD: 95, GBP: 75, NGN: 135000 },
    rating: 4.7,
    reviewCount: 167,
    image: "/optimized/cake-size-12-inch.webp",
    category: "Cake Sizes",
    preparationTime: "24 hours",
    isCustomizable: true,
    description: "Perfect for big celebrations"
  },
  {
    id: "size-5",
    name: "Two Tier Cake",
    price: { USD: 180, GBP: 140, NGN: 258000 },
    rating: 4.8,
    reviewCount: 89,
    image: "/optimized/cake-size-two-tier.webp",
    category: "Cake Sizes",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Elegant two-tier design"
  },
  {
    id: "size-6",
    name: "Three Tier Cake",
    price: { USD: 280, GBP: 220, NGN: 400000 },
    rating: 4.9,
    reviewCount: 134,
    image: "/optimized/cake-size-three-tier.webp",
    category: "Cake Sizes",
    preparationTime: "72 hours",
    isCustomizable: true,
    description: "Stunning three-tier masterpiece"
  },

  // Decorations
  {
    id: "decoration-1",
    name: "Elegant Decoration",
    price: { USD: 15, GBP: 12, NGN: 22000 },
    rating: 4.5,
    reviewCount: 67,
    image: "/optimized/decoration-elegant.webp",
    category: "Decorations",
    preparationTime: "1 hour",
    isCustomizable: false,
    description: "Elegant cake topper"
  },
  {
    id: "decoration-2",
    name: "Floral Decoration",
    price: { USD: 18, GBP: 14, NGN: 26000 },
    rating: 4.6,
    reviewCount: 89,
    image: "/optimized/decoration-floral.webp",
    category: "Decorations",
    preparationTime: "1 hour",
    isCustomizable: false,
    description: "Beautiful floral decorations"
  },
  {
    id: "decoration-3",
    name: "Modern Decoration",
    price: { USD: 12, GBP: 9, NGN: 17000 },
    rating: 4.4,
    reviewCount: 56,
    image: "/optimized/decoration-modern.webp",
    category: "Decorations",
    preparationTime: "1 hour",
    isCustomizable: false,
    description: "Contemporary cake decorations"
  },
  {
    id: "decoration-4",
    name: "Themed Decoration",
    price: { USD: 20, GBP: 15, NGN: 29000 },
    rating: 4.7,
    reviewCount: 78,
    image: "/optimized/decoration-themed.webp",
    category: "Decorations",
    preparationTime: "1 hour",
    isCustomizable: false,
    description: "Custom themed decorations"
  },
  {
    id: "decoration-5",
    name: "Vintage Decoration",
    price: { USD: 16, GBP: 12, NGN: 23000 },
    rating: 4.5,
    reviewCount: 67,
    image: "/optimized/decoration-vintage.webp",
    category: "Decorations",
    preparationTime: "1 hour",
    isCustomizable: false,
    description: "Vintage style decorations"
  },
  {
    id: "decoration-6",
    name: "Whimsical Decoration",
    price: { USD: 14, GBP: 11, NGN: 20000 },
    rating: 4.6,
    reviewCount: 89,
    image: "/optimized/decoration-whimsical.webp",
    category: "Decorations",
    preparationTime: "1 hour",
    isCustomizable: false,
    description: "Fun and whimsical decorations"
  },

  // Other Designs
  {
    id: "other-1",
    name: "Chocolate Ganache Celebration Cake",
    price: { USD: 125, GBP: 95, NGN: 180000 },
    rating: 4.9,
    reviewCount: 203,
    image: "/optimized/chocolate-ganache-celebration-cake.webp",
    category: "Custom Designs",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Rich chocolate ganache cake"
  },
  {
    id: "other-2",
    name: "Subtle Cake Pattern",
    price: { USD: 90, GBP: 70, NGN: 130000 },
    rating: 4.7,
    reviewCount: 112,
    image: "/optimized/subtle-cake-pattern.webp",
    category: "Custom Designs",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Elegant subtle pattern design"
  },
  {
    id: "other-3",
    name: "Custom Design Cake",
    price: { USD: 110, GBP: 85, NGN: 158000 },
    rating: 4.8,
    reviewCount: 145,
    image: "/optimized/other-designs.webp",
    category: "Custom Designs",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Unique custom cake design"
  },
  {
    id: "other-4",
    name: "Specialty Cake",
    price: { USD: 95, GBP: 75, NGN: 135000 },
    rating: 4.6,
    reviewCount: 98,
    image: "/optimized/other2.webp",
    category: "Custom Designs",
    preparationTime: "48 hours",
    isCustomizable: true,
    description: "Specialty custom creation"
  }
];

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAllProducts, setShowAllProducts] = useState(false);

  const categories = ['all', ...Array.from(new Set(allProducts.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  // Show only first 8 products initially, or all if showAllProducts is true
  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Complete Product Catalog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our full range of delicious creations with multi-currency pricing
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category === 'all' ? 'All Products' : category}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}>
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-background">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100">
                      <Heart className="h-4 w-4" />
                    </Button>
                    {product.isCustomizable && (
                      <Badge variant="secondary" className="text-xs">
                        Customizable
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm product-description line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm muted-text">({product.reviewCount})</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-bold text-foreground">
                      ${product.price.USD}
                      <span className="text-sm muted-text ml-1">
                        (${product.price.GBP} GBP | ₦{product.price.NGN.toLocaleString()} NGN)
                      </span>
                    </div>
                    <div className="text-xs muted-text">{product.preparationTime}</div>
                  </div>

                  <Button className="w-full btn-text" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProducts.length > 8 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="gap-2 btn-text"
            >
              {showAllProducts ? (
                <>
                  Show Less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More Products ({filteredProducts.length - 8} more)
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="muted-text mb-4">
            Showing {displayedProducts.length} of {filteredProducts.length} products
          </p>
          <p className="text-sm muted-text">
            All prices include USD, GBP, and Nigerian Naira (NGN) options
          </p>
        </div>
      </div>
    </section>
  );
}
