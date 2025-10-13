import { Shield, Clock, Award, Users, Truck, Heart, Star } from "lucide-react"

const trustStats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Happy Customers",
    description: "Celebrating life's moments",
  },
  {
    icon: Shield,
    number: "500+",
    label: "Verified Bakers",
    description: "Skilled artisan partners",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Customer Support",
    description: "Always here to help",
  },
  {
    icon: Truck,
    number: "Same Day",
    label: "Delivery Available",
    description: "In select areas",
  },
  {
    icon: Award,
    number: "4.9/5",
    label: "Average Rating",
    description: "From verified reviews",
  },
  {
    icon: Heart,
    number: "99%",
    label: "Satisfaction Rate",
    description: "Customer happiness guaranteed",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our community of cake lovers and talented bakers creating sweet memories together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="font-semibold text-foreground text-sm">{stat.label}</div>
                <div className="text-xs text-muted-foreground text-pretty">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-pretty">
              &ldquo;The custom wedding cake exceeded our expectations. Sarah&apos;s attention to detail was incredible!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full"></div>
              <div>
                <div className="font-semibold text-sm">Emily & James</div>
                <div className="text-xs text-muted-foreground">Wedding Couple</div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-pretty">
              &ldquo;Fast delivery and amazing taste! My daughter&apos;s unicorn cake was perfect for her birthday.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full"></div>
              <div>
                <div className="font-semibold text-sm">Maria Rodriguez</div>
                <div className="text-xs text-muted-foreground">Parent</div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-pretty">
              &ldquo;Professional service for our corporate event. The presentation was flawless and delicious.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full"></div>
              <div>
                <div className="font-semibold text-sm">David Chen</div>
                <div className="text-xs text-muted-foreground">Event Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
