import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cake, Heart, Star, Calendar, Phone, Clock, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';
import { Testimonials } from '@/components/testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getOptimizedImagePath("/beautiful-custom-wedding-cake-elegant-design.jpg")}
            alt="Beautiful custom cake"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Where Edible Art Meets Extraordinary Taste
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Custom cakes and artisanal foods crafted with love and creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Cake className="mr-2 h-5 w-5" />
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Signature Creations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handcrafted with the finest ingredients to make your special moments unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Cakes',
                description: 'Personalized designs for all occasions',
                image: getOptimizedImagePath('/birthay-cake-1.jpeg')
              },
              {
                title: 'Bento Cakes',
                description: 'Adorable single-serve delights',
                image: getOptimizedImagePath('/birthday-cake-2.jpeg')
              },
              {
                title: 'Muffins & More',
                description: 'Delicious treats for any time',
                image: getOptimizedImagePath('/artisanal-croissants-selection.jpg')
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/90 mb-4">{item.description}</p>
                  <Button variant="outline" className="w-fit bg-white/10 hover:bg-white/20 border-white/20 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedImagePath("/baker-sarah-portrait.jpg")}
                  alt="Joshua Ogugua - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">5.0</span>
                  <span className="text-sm opacity-80">(200+ Reviews)</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Meet Joshua Ogugua</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm the founder of Zereth Cakes Hub, where my passion for baking meets creativity.
                With years of experience in crafting beautiful and delicious cakes, I take pride
                in creating edible art that makes every celebration special.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                When I'm not in the kitchen, you can find me at the gym, spending time with my
                wife and two beautiful daughters, or serving in my ministry, Jepliggom.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a Consultation
                </Button>
                <Button variant="ghost" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Follow Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order Your Custom Cake?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your vision and let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Order Your Perfect Cake?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your custom cake requirements or visit our bakery to see our delicious creations in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 group">
              Order Now
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 group">
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
