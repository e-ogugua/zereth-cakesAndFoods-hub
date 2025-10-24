import { Shield, Clock, Award, Users, Truck, Heart, Star } from "lucide-react"
import { memo } from "react"

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

// Using React.memo to prevent unnecessary re-renders of trust indicators
// This component renders static data and doesn't need frequent updates
export const TrustIndicators = memo(function TrustIndicators() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto container-spacing">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of cake lovers and talented bakers creating sweet memories together
          </p>
        </div>

        {/* Stats Grid - Responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="font-semibold text-foreground text-xs sm:text-sm">{stat.label}</div>
                <div className="text-xs text-muted-foreground hidden sm:block">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Mobile-optimized layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-background rounded-lg p-4 sm:p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              &ldquo;The custom wedding cake met all our expectations. The design was well-executed and the flavor was excellent. Our clients were very satisfied.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-full"></div>
              <div>
                <div className="font-semibold text-sm">Emily & James</div>
                <div className="text-xs text-muted-foreground">Wedding Couple</div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-4 sm:p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              &ldquo;We regularly order cakes for corporate events from Zereth Cakes. The quality is consistent and they deliver on time with professional presentation.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-full"></div>
              <div>
                <div className="font-semibold text-sm">David Chen</div>
                <div className="text-xs text-muted-foreground">Event Manager</div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-4 sm:p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              &ldquo;I have ordered several birthday cakes from Zereth Cakes. The quality and service have been consistently good.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-full"></div>
              <div>
                <div className="font-semibold text-sm">Maria Rodriguez</div>
                <div className="text-xs text-muted-foreground">Parent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
