'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { getOptimizedImagePath } from '@/lib/image-utils';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Planner',
    content: 'The wedding cake Zereth Cakes created was absolutely stunning and tasted even better than it looked! Our clients were thrilled with both the design and flavor.',
    rating: 5,
    image: '/baker-sarah-portrait.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Event Coordinator',
    content: 'We order cakes for all our corporate events from Zereth Cakes. The quality is consistently excellent, and they always deliver on time with beautiful presentation.',
    rating: 5,
    image: '/baker-mike-workspace.jpg'
  },
  {
    id: 3,
    name: 'Amina Okafor',
    role: 'Satisfied Customer',
    content: 'I\'ve ordered multiple birthday cakes from Zereth Cakes, and they never disappoint. The attention to detail and the taste are always exceptional.',
    rating: 4,
    image: '/artisanal-croissants-selection.jpg'
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Food Critic',
    content: 'As someone who has tasted cakes from all over the world, I can confidently say Zereth Cakes stands out for their perfect balance of flavors and textures.',
    rating: 5,
    image: '/artisanal-pastries-fresh-baked.jpg'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with Zereth Cakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={getOptimizedImagePath(testimonial.image)}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-muted-foreground">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
