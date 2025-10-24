'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, ChevronRight } from 'lucide-react';
import { memo } from 'react';
import Link from 'next/link';

// Using React.memo to prevent unnecessary re-renders of final CTA section
// This component contains static call-to-action content
export const FinalCTA = memo(function FinalCTA() {
  return (
    <motion.div
      className="text-center section-spacing"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4 sm:mb-6">Ready to Place Your Order?</h3>
      <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto">
        Contact us to discuss your requirements or place an order. We provide custom cake design and baking services.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="gap-2 group touch-target focus-ring"
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
          className="gap-2 group touch-target focus-ring"
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
})
