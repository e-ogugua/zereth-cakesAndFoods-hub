"use client"

import { useState } from "react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Heart, ShoppingCart, SlidersHorizontal } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

const products = [
  {
    id: "1",
    name: "Elegant Three-Tier Wedding Cake",
    baker: "Sarah's Sweet Creations",
    bakerId: "sarah-baker",
    price: 450,
    currency: "USD",
    rating: 4.9,
    reviewCount: 127,
    image: "/elegant-wedding-cake-three-tier.jpg",
    category: "Wedding Cakes",
    preparationTime: "72 hours",
    isCustomizable: true,
    tags: ["wedding", "elegant", "multi-tier"],
  },
  {
    id: "2",
    name: "Rainbow Unicorn Birthday Cake",
    baker: "Mike's Sweet Cakes",
    bakerId: "mike-sweetcakes",
    price: 85,
    currency: "USD",
    rating: 4.7,
    reviewCount: 89,
    image: "/rainbow-unicorn-birthday-cake.jpg",
    category: "Birthday Cakes",
    preparationTime: "24 hours",
    isCustomizable: true,
    tags: ["birthday", "unicorn", "colorful"],
  },
  {
    id: "3",
    name: "Gourmet Cupcake Dozen",
    baker: "Emma's Delightful Treats",
    bakerId: "emma-delights",
    price: 36,
    currency: "USD",
    rating: 4.8,
    reviewCount: 156,
    image: "/gourmet-cupcakes-dozen-assorted.jpg",
    category: "Cupcakes",
    preparationTime: "4 hours",
    isCustomizable: false,
    tags: ["cupcakes", "gourmet", "assorted"],
  },
  {
    id: "4",
    name: "Chocolate Ganache Celebration Cake",
    baker: "Sarah's Sweet Creations",
    bakerId: "sarah-baker",
    price: 125,
    currency: "USD",
    rating: 4.9,
    reviewCount: 203,
    image: "/chocolate-ganache-celebration-cake.jpg",
    category: "Birthday Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
    tags: ["chocolate", "ganache", "celebration"],
  },
  {
    id: "5",
    name: "Corporate Logo Cake",
    baker: "Mike's Sweet Cakes",
    bakerId: "mike-sweetcakes",
    price: 180,
    currency: "USD",
    rating: 4.6,
    reviewCount: 45,
    image: "/corporate-logo-cake-professional.jpg",
    category: "Corporate Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
    tags: ["corporate", "logo", "professional"],
  },
  {
    id: "6",
    name: "Artisanal Croissant Selection",
    baker: "Emma's Delightful Treats",
    bakerId: "emma-delights",
    price: 24,
    currency: "USD",
    rating: 4.7,
    reviewCount: 78,
    image: "/artisanal-croissants-selection.jpg",
    category: "Pastries",
    preparationTime: "6 hours",
    isCustomizable: false,
    tags: ["pastries", "croissants", "artisanal"],
  },
]

const categories = [
  "All Categories",
  "Wedding Cakes",
  "Birthday Cakes",
  "Corporate Cakes",
  "Cupcakes",
  "Pastries",
  "Savory Items",
]

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("popular")
  const [priceRange, setPriceRange] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.baker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "under-50" && product.price < 50) ||
      (priceRange === "50-100" && product.price >= 50 && product.price <= 100) ||
      (priceRange === "100-200" && product.price > 100 && product.price <= 200) ||
      (priceRange === "over-200" && product.price > 200)

    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section relative h-[40vh] flex items-center justify-center bg-muted">
        <div className="hero-overlay" />
        <Image
          src="/optimized/cake-size-12-inch.webp"
          alt="Browse Our Marketplace"
          fill
          className="object-cover"
          priority
        />

        <div className="hero-content">
          <h1 className="hero-title">Browse Our Marketplace</h1>
          <p className="hero-subtitle">Discover amazing cakes and treats from talented local bakers</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 -mt-16 relative z-10">

        {/* Search and Filters */}
        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search cakes, bakers, or occasions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-50">Under $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="over-200">Over $200</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort and Results */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">{filteredProducts.length} products found</div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-background"
            >
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={product.image ? product.image.replace(/^\//, '') : "placeholder.svg"}
                  alt={product.name}
                  containerClassName="h-full w-full"
                  className="group-hover:scale-105 transition-transform duration-300"
                  overlayClassName="bg-gradient-to-t from-black/10 to-transparent"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                {product.isCustomizable && (
                  <Badge variant="secondary" className="absolute bottom-2 left-2 text-xs">
                    Customizable
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    by {product.baker}
                  </p>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-bold text-foreground">${product.price}</div>
                  <div className="text-xs text-muted-foreground">{product.preparationTime}</div>
                </div>

                <Button className="w-full" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No products found matching your criteria</div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All Categories")
                setPriceRange("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
