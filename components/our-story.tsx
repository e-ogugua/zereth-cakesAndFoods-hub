'use client';

import { motion } from 'framer-motion';
import { Cake, Heart, Star, Sparkles } from 'lucide-react';
import { AuthorImage } from '@/components/author-image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function OurStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <motion.div 
              className="md:w-1/3 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <AuthorImage size="lg" />
            </motion.div>
            <motion.div 
              className="md:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeInUp,
                visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } }
              }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  Zereth Cakes Hub was born out of a passion for creating beautiful, delicious cakes that make every occasion special. 
                  What started as a small home-based bakery has grown into a beloved local institution, known for our commitment to 
                  quality, creativity, and exceptional customer service.
                </p>
                <p>
                  Every cake we create is made with the finest ingredients, from locally-sourced dairy and eggs to premium chocolate 
                  and vanilla. Our team of talented bakers and decorators pour their hearts into every creation, ensuring that each 
                  cake is as beautiful as it is delicious.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-muted p-8 rounded-2xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Quality Ingredients</h4>
                <p className="text-muted-foreground">We use only the finest, freshest ingredients in all our creations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Made with Love</h4>
                <p className="text-muted-foreground">Every cake is crafted with care and attention to detail.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Creative Designs</h4>
                <p className="text-muted-foreground">Custom creations to make your celebration truly special.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
