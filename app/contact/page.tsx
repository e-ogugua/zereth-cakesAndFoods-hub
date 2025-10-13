'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Clock, Instagram, Facebook } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';
import Image from 'next/image';
import { ContactInfo } from '@/components/contact-info';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  occasion: z.string().optional(),
  date: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      occasion: '',
      date: '',
    },
  });

  const occasions = [
    { id: 'birthday', label: 'Birthday' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'corporate', label: 'Corporate Event' },
    { id: 'other', label: 'Other' },
  ];

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent! We\'ll get back to you soon.');
      reset();
      setSelectedOccasion('');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/30 to-primary/90" />
          <Image 
            src={getOptimizedImagePath("/baker-mike-workspace.webp")} 
            alt="Contact Us - Zereth Cakes Hub" 
            fill 
            className="object-cover mix-blend-overlay" 
            priority 
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="container relative z-10 text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-medium text-yellow-100">Get in Touch</span>
            </div>
            <h1 className="hero-title">
              Let&apos;s Create Something <span className="hero-accent">Sweet Together</span>
            </h1>
            <p className="hero-subtitle">
              Have questions or special requests? Our team is here to help bring your vision to life.
            </p>
            <p className="hero-subtitle">
              Get in touch to discuss your custom cake order
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 bg-card p-6 md:p-10 rounded-2xl shadow-sm border border-border/50"
            >
              <div className="mb-10 text-center">
                <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Send Us a Message</h2>
                <p className="text-foreground/90 max-w-2xl mx-auto">
                  Have questions or special requests? Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/90">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register('name')}
                        className={cn(
                          'h-12 px-4 text-foreground bg-background border-border/70 hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-primary/50',
                          {
                            'border-destructive focus-visible:ring-destructive/50': errors.name,
                          }
                        )}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1.5 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/90">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register('email')}
                        className={cn(
                          'h-12 px-4 text-foreground bg-background border-border/70 hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-primary/50',
                          {
                            'border-destructive focus-visible:ring-destructive/50': errors.email,
                          }
                        )}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1.5 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2.5">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground/90">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="e.g., 08060147046"
                      {...register('phone')}
                      className={cn(
                        'h-12 px-4 text-foreground bg-background border-border/70 hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-primary/50',
                        {
                          'border-destructive focus-visible:ring-destructive/50': errors.phone,
                        }
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1.5 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2.5">
                  <span className="text-sm font-medium text-foreground/90 block">
                    Occasion <span className="text-foreground/60">(Optional)</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {occasions.map((occasion) => (
                      <button
                        key={occasion.id}
                        type="button"
                        onClick={() => {
                          setSelectedOccasion(occasion.id);
                          setValue('occasion', occasion.id);
                        }}
                        className={cn(
                          'text-sm px-3 py-2.5 rounded-lg border transition-all duration-200',
                          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1',
                          selectedOccasion === occasion.id
                            ? 'bg-primary/10 border-primary/60 text-primary font-medium shadow-sm'
                            : 'border-input/70 bg-background hover:bg-accent/70 hover:border-foreground/20 text-foreground/90 hover:text-foreground'
                        )}
                        aria-pressed={selectedOccasion === occasion.id}
                      >
                        {occasion.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2.5">
                  <label htmlFor="event-date" className="text-sm font-medium text-foreground/90">
                    Event Date <span className="text-foreground/60">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="event-date"
                      type="date"
                      {...register('date')}
                      min={new Date().toISOString().split('T')[0]}
                      className="h-12 px-4 text-foreground bg-background border-border/70 hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/90">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Tell us about your cake requirements, dietary restrictions, design ideas, and any other details..."
                      rows={5}
                      {...register('message')}
                      className={cn(
                        'px-4 py-3 text-foreground bg-background border-border/70 hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-primary/50 min-h-[120px]',
                        {
                          'border-destructive focus-visible:ring-destructive/50': errors.message,
                        }
                      )}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1.5 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full md:w-auto h-12 px-8 text-base font-medium rounded-lg',
                      'bg-primary hover:bg-primary/90 text-white',
                      'transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg',
                      'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
                      'disabled:opacity-70 disabled:cursor-not-allowed',
                      {
                        'animate-pulse': isSubmitting,
                      }
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="mb-8">
                  <span className="inline-block text-primary font-medium mb-3 text-sm uppercase tracking-wider">Get in Touch</span>
                  <h3 className="text-2xl font-bold font-serif text-foreground">
                    Contact Information
                  </h3>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 p-2.5 rounded-xl text-primary flex-shrink-0 mt-0.5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground/90 mb-1.5">Opening Hours</h4>
                      <div className="space-y-1.5 text-foreground/90">
                        <p className="flex items-center gap-2">
                          <span className="inline-block w-24 font-medium">Mon - Sat:</span>
                          <span>9:00 AM - 9:00 PM</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="inline-block w-24 font-medium">Sunday:</span>
                          <span>10:00 AM - 6:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <ContactInfo />
                  
                  <div className="pt-2">
                    <h4 className="font-semibold text-foreground/90 mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com/zerethcakes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-background border border-border/50 hover:bg-primary/5 hover:border-primary/30 text-foreground/80 hover:text-primary transition-all duration-200"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://facebook.com/zerethcakes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-background border border-border/50 hover:bg-primary/5 hover:border-primary/30 text-foreground/80 hover:text-primary transition-all duration-200"
                        aria-label="Follow us on Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-serif text-foreground">
                    Visit Our Bakery
                  </h3>
                  <p className="text-foreground/90 mt-2">
                    Stop by and experience our delicious treats in person!
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-foreground/90">Our Location</p>
                      <p className="text-foreground/90">
                        Jesus Power Crescent/Nwoye Crescent New Haven Extension
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://maps.app.goo.gl/example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1.5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 1 1 0 001.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-muted border border-border/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.521260322283!2d3.37985741523178!3d6.4653266453267715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae67880c5%3A0x8a1a8fcb3c1bfb5d!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    aria-label="Our location on Google Maps"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
