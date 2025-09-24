import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Award } from "lucide-react"
import { CustomImage } from "@/components/ui/Image"

const bakers = [
  {
    id: "sarah-baker",
    name: "Sarah Johnson",
    businessName: "Sarah's Sweet Creations",
    bio: "Passionate baker specializing in custom wedding cakes and elegant desserts. Every cake tells a story.",
    specialties: ["Wedding Cakes", "Custom Designs", "Fondant Work"],
    yearsExperience: 8,
    rating: 4.9,
    totalReviews: 127,
    isVerified: true,
    deliveryZones: ["Downtown", "Midtown", "Uptown"],
    avatar: "/baker-Joshua-potrait.png",
    coverImage: "/baker-sarah-workspace.jpg",
    featured: true,
  },
  {
    id: "mike-sweetcakes",
    name: "Mike Chen",
    businessName: "Mike's Sweet Cakes",
    bio: "Fun and creative baker bringing joy through colorful birthday cakes and themed designs.",
    specialties: ["Birthday Cakes", "Themed Cakes", "Character Cakes"],
    yearsExperience: 5,
    rating: 4.7,
    totalReviews: 89,
    isVerified: true,
    deliveryZones: ["Eastside", "Westside", "Central"],
    avatar: "/optimized/baker-mike-portrait.webp",
    coverImage: "/optimized/baker-mike-portrait.webp",
    featured: false,
  },
  {
    id: "emma-delights",
    name: "Emma Williams",
    businessName: "Emma's Delightful Treats",
    bio: "Artisanal baker focused on organic ingredients and beautiful presentation for all occasions.",
    specialties: ["Cupcakes", "Organic Baking", "Gluten-Free"],
    yearsExperience: 6,
    rating: 4.8,
    totalReviews: 156,
    isVerified: true,
    deliveryZones: ["Northside", "Downtown", "Suburbs"],
    avatar: "/optimized/baker-emma-portrait.webp",
    coverImage: "/optimized/baker-emma-portrait.webp",
    featured: true,
  },
]

export default function BakersPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Talented Bakers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with skilled artisan bakers in your area who are passionate about creating beautiful, delicious
            cakes for your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bakers.map((baker) => (
            <Card key={baker.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-32">
                <CustomImage
                  src={baker.coverImage || "/placeholder.jpg"}
                  alt={`${baker.businessName} workspace`}
                  containerClassName="h-full w-full"
                  className="object-cover w-full h-full"
                  static
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                {baker.featured && (
                  <Badge className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm">
                    Featured
                  </Badge>
                )}
                {baker.isVerified && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              {/* Baker Avatar */}
              <div className="absolute -bottom-6 left-6">
                <div className="w-12 h-12 rounded-full border-4 border-background overflow-hidden">
                  <CustomImage
                    src={baker.avatar || "/placeholder-user.jpg"}
                    alt={baker.name}
                    className="object-cover w-full h-full"
                    static
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <CardContent className="pt-8 pb-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {baker.businessName}
                  </h3>
                  <p className="text-sm text-muted-foreground">by {baker.name}</p>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{baker.rating}</span>
                    <span className="text-sm text-muted-foreground">({baker.totalReviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{baker.yearsExperience} years</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 text-pretty">{baker.bio}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {baker.specialties.slice(0, 2).map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {baker.specialties.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{baker.specialties.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>Delivers to {baker.deliveryZones.length} areas</span>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Want to Join Our Baker Community?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Share your passion for baking with customers who appreciate artisanal quality. Join our marketplace and
              grow your business.
            </p>
            <Button size="lg">Apply to Become a Baker</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
