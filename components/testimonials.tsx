'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Planner',
    content: 'The wedding cake Zereth Cakes created was absolutely stunning and tasted even better than it looked! Our clients were thrilled with both the design and flavor.',
    rating: 5,
    image: '/optimized/baker-sarah-portrait.webp'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Event Coordinator',
    content: 'We order cakes for all our corporate events from Zereth Cakes. The quality is consistently excellent, and they always deliver on time with beautiful presentation.',
    rating: 5,
    image: '/optimized/baker-mike-workspace.webp'
  },
  {
    id: 3,
    name: 'Amina Okafor',
    role: 'Satisfied Customer',
    content: 'I\'ve ordered multiple birthday cakes from Zereth Cakes, and they never disappoint. The attention to detail and the taste are always exceptional.',
    rating: 4,
    image: '/optimized/baker-emma-workspace.webp'
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Food Critic',
    content: 'As someone who has tasted cakes from all over the world, I can confidently say Zereth Cakes stands out for their perfect balance of flavors and textures.',
    rating: 5,
    image: '/optimized/beautiful-custom-wedding-cake-elegant-design.webp'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
        />
      ))}
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground/90 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their experience with Zereth Cakes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm muted-text/90">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-5">
                <StarRating rating={testimonial.rating} />
              </div>

              <blockquote className="relative">
                <div className="absolute -top-3 -left-3 text-5xl text-primary/10 font-serif leading-none">&ldquo;</div>
                <p className="text-foreground/90 relative z-10 leading-relaxed">
                  {testimonial.content}
                </p>
              </blockquote>

              <div className="mt-6 pt-4 border-t border-border/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {testimonial.rating.toFixed(1)}/5.0
                  </span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3.5 w-3.5 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
