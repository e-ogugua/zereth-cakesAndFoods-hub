import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Clock, Shield, Phone, Mail } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <OptimizedImage 
          src="subtle-cake-pattern.jpg"
          alt=""
          aria-hidden="true"
          className="opacity-5"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">Premium Artisanal Marketplace</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Create Sweet
                <span className="text-primary"> Memories</span>
                <br />
                One Cake at a Time
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">
                Discover beautiful custom cakes, connect with talented local bakers, and make every celebration
                unforgettable with our premium marketplace.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/custom-cake">
                  Design Your Cake
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="tel:+2348060147046" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                <a href="mailto:genjoshsnr@gmail.com?subject=Cake%20Consultation%20Request" className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Book Consultation
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/categories">Browse Marketplace</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Verified Bakers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Custom Designs</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <OptimizedImage
              src="beautiful-custom-wedding-cake-elegant-design.jpg"
              alt="Beautiful custom wedding cake with elegant design"
              containerClassName="h-full"
              overlayClassName="bg-gradient-to-t from-background/90 via-background/50 to-transparent"
              priority
            />
            <p className="absolute bottom-4 left-4 text-sm text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
              Made just for you
            </p>
            
            <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">Same day available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
