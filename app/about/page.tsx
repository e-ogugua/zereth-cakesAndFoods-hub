import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Cake, Heart, Star, Calendar, Phone, Instagram } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-muted">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50" />
          <Image
            src={getOptimizedImagePath("/baker-sarah-workspace.jpg")}
            alt="About Zereth Cakes Hub"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl">From passion to profession, one cake at a time</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Welcome to Zereth Cakes Hub</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Hello, I'm Joshua Okwukwem Ogugua, the heart and soul behind Zereth Cakes Hub. What began as a passionate hobby has blossomed into a thriving bakery that specializes in creating edible works of art that delight both the eyes and the palate.
                </p>
                <p className="mb-4">
                  My journey in baking started in my home kitchen, where I discovered the joy of transforming simple ingredients into beautiful, delicious creations. Over the years, I've honed my skills and developed a unique style that combines traditional baking techniques with innovative designs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
                <p className="text-muted-foreground mb-6">
                  At Zereth Cakes Hub, we believe that every cake tells a story. Whether it's a birthday, wedding, or any special occasion, we pour our hearts into creating cakes that not only look stunning but taste incredible too.
                </p>
                <p className="text-muted-foreground">
                  We use only the finest ingredients, sourced locally whenever possible, to ensure that every bite is a moment of pure delight.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedImagePath("/baker-emma-workspace.jpg")}
                  alt="Our Bakery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-muted p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Meet Joshua</h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={getOptimizedImagePath("/baker-sarah-portrait.jpg")}
                      alt="Joshua Ogugua"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-4">
                    "Baking has always been more than just a profession for me—it's my passion and creative outlet. When I'm not in the kitchen, you can find me at the gym, spending quality time with my two beautiful daughters, or serving in my ministry, Jepliggom."
                  </p>
                  <p className="font-medium">- Joshua Okwukwem Ogugua</p>
                  <p className="text-sm text-muted-foreground">Founder & Head Baker</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Create Something Special?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a specific design in mind or need help bringing your vision to life, we'd love to be part of your celebration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Instagram className="h-5 w-5" />
                  Follow Our Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help you create the perfect cake for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
              <Phone className="h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
