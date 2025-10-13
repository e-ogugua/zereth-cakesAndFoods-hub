'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <motion.div 
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold font-serif mb-6">Ready to Create Something Special?</h3>
      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        Whether you have a specific design in mind or need help bringing your vision to life, we&apos;d love to be part of your celebration.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="gap-2 group"
          asChild
        >
          <Link href="/contact">
            <Calendar className="h-5 w-5" />
            Book a Consultation
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="gap-2 group"
          asChild
        >
          <a href="tel:08060147046">
            <Phone className="h-5 w-5" />
            Call Us: 08060147046
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
