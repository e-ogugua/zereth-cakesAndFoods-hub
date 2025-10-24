import Link from "next/link"
import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

const trendingProducts = [
  {
    id: "1",
    name: "Elegant Three-Tier Wedding Cake",
    baker: "Sarah's Sweet Creations",
    bakerId: "sarah-baker",
    price: { USD: 450, GBP: 350, NGN: 650000 },
    currency: "USD",
    rating: 4.9,
    reviewCount: 127,
    image: "/optimized/elegant-wedding-cake-three-tier.webp",
    category: "Wedding Cakes",
    preparationTime: "72 hours",
    isCustomizable: true,
  },
  {
    id: "2",
    name: "Rainbow Unicorn Birthday Cake",
    baker: "Mike's Sweet Cakes",
    bakerId: "mike-sweetcakes",
    price: { USD: 85, GBP: 65, NGN: 120000 },
    currency: "USD",
    rating: 4.7,
    reviewCount: 89,
    image: "/optimized/rainbow-unicorn-birthday-cake.webp",
    category: "Birthday Cakes",
    preparationTime: "24 hours",
    isCustomizable: true,
  },
  {
    id: "3",
    name: "Gourmet Cupcake Dozen",
    baker: "Emma's Delightful Treats",
    bakerId: "emma-delights",
    price: { USD: 36, GBP: 28, NGN: 52000 },
    currency: "USD",
    rating: 4.8,
    reviewCount: 156,
    image: "/optimized/gourmet-cupcakes-dozen-assorted.webp",
    category: "Cupcakes",
    preparationTime: "4 hours",
    isCustomizable: false,
  },
  {
    id: "4",
    name: "Chocolate Ganache Celebration Cake",
    baker: "Sarah's Sweet Creations",
    bakerId: "sarah-baker",
    price: { USD: 125, GBP: 95, NGN: 180000 },
    currency: "USD",
    rating: 4.9,
    reviewCount: 203,
    image: "/optimized/chocolate-ganache-celebration-cake.webp",
    category: "Birthday Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
  },
  {
    id: "5",
    name: "Beautiful Custom Wedding Cake",
    baker: "Joshua's Masterpiece",
    bakerId: "joshua-masterpiece",
    price: { USD: 380, GBP: 290, NGN: 550000 },
    currency: "USD",
    rating: 4.8,
    reviewCount: 94,
    image: "/optimized/beautiful-custom-wedding-cake-elegant-design.webp",
    category: "Wedding Cakes",
    preparationTime: "72 hours",
    isCustomizable: true,
  },
  {
    id: "6",
    name: "Mother's Day Special Cake",
    baker: "Emma's Delightful Treats",
    bakerId: "emma-delights",
    price: { USD: 95, GBP: 75, NGN: 135000 },
    currency: "USD",
    rating: 4.9,
    reviewCount: 167,
    image: "/optimized/mothers-cake.webp",
    category: "Birthday Cakes",
    preparationTime: "48 hours",
    isCustomizable: true,
  },
  {
    id: "7",
    name: "Corporate Logo Cake",
    baker: "Mike's Sweet Cakes",
    bakerId: "mike-sweetcakes",
    price: { USD: 150, GBP: 115, NGN: 215000 },
    currency: "USD",
    rating: 4.7,
    reviewCount: 78,
    image: "/optimized/corporate-logo-cake-professional.webp",
    category: "Corporate Events",
    preparationTime: "48 hours",
    isCustomizable: true,
  },
  {
    id: "8",
    name: "Artisanal Pastries Selection",
    baker: "Sarah's Sweet Creations",
    bakerId: "sarah-baker",
    price: { USD: 45, GBP: 35, NGN: 65000 },
    currency: "USD",
    rating: 4.6,
    reviewCount: 112,
    image: "/optimized/artisanal-pastries-fresh-baked.webp",
    category: "Pastries",
    preparationTime: "6 hours",
    isCustomizable: false,
  },
  {
    id: "9",
    name: "Bento Cake Collection",
    baker: "Emma's Delightful Treats",
    bakerId: "emma-delights",
    price: { USD: 25, GBP: 20, NGN: 36000 },
    currency: "USD",
    rating: 4.8,
    reviewCount: 89,
    image: "/optimized/birthday2.webp",
    category: "Bento Cakes",
    preparationTime: "12 hours",
    isCustomizable: true,
  },
  {
    id: "10",
    name: "Savory Baked Goods Selection",
    baker: "Joshua's Masterpiece",
    bakerId: "joshua-masterpiece",
    price: { USD: 55, GBP: 42, NGN: 78000 },
    currency: "USD",
    rating: 4.7,
    reviewCount: 134,
    image: "/optimized/savory-baked-goods-selection.webp",
    category: "Savory Items",
    preparationTime: "8 hours",
    isCustomizable: false,
  }
]

// Using React.memo to prevent unnecessary re-renders of trending products
// This component renders static product data and doesn't need frequent updates
export const TrendingProducts = memo(function TrendingProducts() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto container-spacing">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Trending Now</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Most popular cakes and treats loved by our community
            </p>
          </div>

          <Link href="/trending" className="hidden sm:block">
            <Button variant="outline" className="touch-target focus-ring">View All Trending</Button>
          </Link>
        </div>

        {/* Products Grid - Mobile-first responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-background h-full"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="group-hover:scale-105 transition-transform duration-300 object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100 touch-target focus-ring">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  {product.isCustomizable && (
                    <Badge variant="secondary" className="text-xs">
                      Customizable
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex-grow mb-3">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance mb-2">
                      {product.name}
                    </h3>
                  </Link>

                  <Link
                    href={`/bakers/${product.bakerId}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors mb-2 block"
                  >
                    by {product.baker}
                  </Link>

                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-foreground">
                    ${product.price.USD}
                  </div>
                  <div className="text-xs text-muted-foreground">{product.preparationTime}</div>
                </div>

                <Button className="w-full touch-target focus-ring" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/trending">
            <Button variant="outline" className="touch-target focus-ring">View All Trending</Button>
          </Link>
        </div>
      </div>
    </section>
  )
})
