import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    id: "wedding-cakes",
    name: "Wedding Cakes",
    description: "Elegant multi-tier masterpieces",
    image: "/optimized/wedding-cake-elegant-multi-tier.webp",
    productCount: 45,
    trending: true,
  },
  {
    id: "birthday-cakes",
    name: "Birthday Cakes",
    description: "Fun celebrations for all ages",
    image: "/optimized/birthday-cake-colorful-celebration.webp",
    productCount: 78,
    trending: false,
  },
  {
    id: "corporate-cakes",
    name: "Corporate Events",
    description: "Professional designs for business",
    image: "/optimized/corporate-cake-professional-design.webp",
    productCount: 23,
    trending: false,
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Individual treats & assortments",
    image: "/optimized/gourmet-cupcakes-assorted-flavors.webp",
    productCount: 156,
    trending: true,
  },
  {
    id: "pastries",
    name: "Pastries",
    description: "Fresh baked daily delights",
    image: "/optimized/artisanal-pastries-fresh-baked.webp",
    productCount: 89,
    trending: false,
  },
  {
    id: "savory-items",
    name: "Savory Items",
    description: "Delicious baked savory goods",
    image: "/optimized/savory-baked-goods-selection.webp",
    productCount: 34,
    trending: false,
  },
  {
    id: "custom-cakes",
    name: "Custom Designs",
    description: "Unique creations for special occasions",
    image: "/optimized/chocolate-ganache-celebration-cake.webp",
    productCount: 67,
    trending: true,
  },
  {
    id: "bento-cakes",
    name: "Bento Cakes",
    description: "Adorable mini cakes for sharing",
    image: "/optimized/birthday2.webp",
    productCount: 92,
    trending: false,
  },
  {
    id: "decorations",
    name: "Cake Decorations",
    description: "Beautiful toppers and decorations",
    image: "/optimized/decoration-elegant.webp",
    productCount: 45,
    trending: false,
  }
]

export function FeaturedCategories() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Explore Our Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From elegant wedding cakes to fun birthday treats, discover the perfect creation for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-background">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  {category.trending && (
                    <Badge className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm">
                      Trending
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-muted-foreground mb-3 text-pretty">{category.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{category.productCount} products</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
