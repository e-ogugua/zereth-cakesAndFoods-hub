import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

const trendingProducts = [
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
  },
]

export function TrendingProducts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Trending Now</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Most popular cakes and treats loved by our community
            </p>
          </div>

          <Link href="/trending" className="hidden md:block">
            <Button variant="outline">View All Trending</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-background"
            >
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={product.image.replace(/^\//, '') || "placeholder.svg"}
                  alt={product.name}
                  containerClassName="h-full w-full"
                  className="group-hover:scale-105 transition-transform duration-300"
                  overlayClassName="bg-gradient-to-t from-black/10 to-transparent"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100">
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

              <CardContent className="p-4">
                <div className="mb-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance">
                      {product.name}
                    </h3>
                  </Link>

                  <Link
                    href={`/bakers/${product.bakerId}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    by {product.baker}
                  </Link>
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

        <div className="text-center mt-8 md:hidden">
          <Link href="/trending">
            <Button variant="outline">View All Trending</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
