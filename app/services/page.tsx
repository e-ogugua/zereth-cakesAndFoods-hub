import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cake, Phone, Calendar, Star } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';

const services = [
  {
    title: 'Custom Cakes',
    description: 'Bespoke cake designs tailored to your special occasion, from elegant weddings to fun birthday celebrations.',
    image: getOptimizedImagePath('/birthday.jpeg'),
    price: 'Starting at ₦25,000',
    features: ['Custom designs', 'All occasions', 'Free consultation', 'Delivery available']
  },
  {
    title: 'Bento Cakes',
    description: 'Adorable single-serve cakes perfect for intimate celebrations or as sweet gifts.',
    image: getOptimizedImagePath('/birthday2.jpeg'),
    price: 'Starting at ₦5,000',
    features: ['Single serving', 'Variety of flavors', 'Custom decorations', 'Perfect for gifts']
  },
  {
    title: 'Muffins',
    description: 'Delicious, freshly baked muffins available in a variety of flavors for any time of day.',
    image: getOptimizedImagePath('/artisanal-croissants-selection.jpg'),
    price: '₦1,500 each',
    features: ['Multiple flavors', 'Freshly baked', 'Great for events', 'Wholesale options']
  },
  {
    title: 'Small Chops',
    description: 'A selection of bite-sized savory treats perfect for your events and gatherings.',
    image: getOptimizedImagePath('/optimized/smallchops.webp'),
    price: 'Contact for pricing',
    features: ['Variety of options', 'Perfect for parties', 'Custom orders', 'Bulk discounts']
  },
  {
    title: 'Meat Pies',
    description: 'Flaky, buttery pastry filled with savory meat and vegetable fillings.',
    image: getOptimizedImagePath('/optimized/meatpie.webp'),
    price: 'Starting at ₦1,200',
    features: ['Freshly baked', 'Perfect for snacks', 'Bulk orders available', 'Special fillings']
  },
  {
    title: 'Dessert Tables',
    description: 'Complete dessert setups for weddings, birthdays, and special events.',
    image: getOptimizedImagePath('/optimized/dessertTable.webp'),
    price: 'Custom quotes',
    features: ['Full setup', 'Variety of desserts', 'Themed designs', 'Professional service']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] flex items-center justify-center bg-muted">
        <div className="hero-overlay" />
        <Image
          src={getOptimizedImagePath("/artisanal-pastries-fresh-baked.jpg")}
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />

        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">Delicious creations for every occasion</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From custom cakes to delightful pastries, we have something special for every taste and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-primary-foreground/80">{service.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      Inquire Now
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-background p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cake className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 hero-text">Custom Orders Welcome</h2>
            <p className="text-muted-foreground mb-8">
              Have something special in mind? We love creating custom orders tailored to your specific needs and preferences. 
              Contact us to discuss your ideas and we'll bring them to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
