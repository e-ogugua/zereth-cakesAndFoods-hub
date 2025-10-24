'use client';

import { motion } from 'framer-motion';
import { Cake, Heart, Sparkles } from 'lucide-react';
import { memo } from 'react';
import { AuthorImage } from '@/components/author-image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Using React.memo to prevent unnecessary re-renders of our story section
// This component contains static content and doesn't need frequent updates
export const OurStory = memo(function OurStory() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto container-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-8 sm:mb-16">
            <motion.div
              className="lg:w-1/3 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <AuthorImage size="lg" />
            </motion.div>
            <motion.div
              className="lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeInUp,
                visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } }
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Our Story</h2>
              <div className="prose prose-base sm:prose-lg text-foreground/90">
                <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Zereth Cakes Hub provides professional cake design and baking services. Our team specializes in creating
                  custom cakes and baked goods for all types of events and celebrations.
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  We use quality ingredients and maintain high standards in our baking process. Our experienced team
                  delivers consistent results for both individual customers and businesses.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-muted p-4 sm:p-6 lg:p-8 rounded-2xl mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-foreground">Our Philosophy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center p-4 sm:p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Cake className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">Quality Ingredients</h4>
                <p className="text-foreground/80 text-xs sm:text-sm">We use only the finest, freshest ingredients in all our creations.</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">Attention to Detail</h4>
                <p className="text-foreground/80 text-xs sm:text-sm">Every cake is crafted with care and attention to detail.</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">Creative Designs</h4>
                <p className="text-foreground/80 text-xs sm:text-sm">Custom designs tailored to your specific requirements.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
})
