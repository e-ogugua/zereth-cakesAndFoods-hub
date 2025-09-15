'use client';

'use client';

import { motion } from 'framer-motion';
import { Cake, Heart, Star } from 'lucide-react';

export function AboutStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      <motion.div 
        className="bg-card p-8 rounded-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Cake className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="text-4xl font-bold mb-2">5,000+</h3>
        <p className="text-muted-foreground">Cakes Baked</p>
      </motion.div>
      
      <motion.div 
        className="bg-card p-8 rounded-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="text-4xl font-bold mb-2">2,500+</h3>
        <p className="text-muted-foreground">Happy Clients</p>
      </motion.div>
      
      <motion.div 
        className="bg-card p-8 rounded-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="text-4xl font-bold mb-2">10+</h3>
        <p className="text-muted-foreground">Years Experience</p>
      </motion.div>
    </div>
  );
}
