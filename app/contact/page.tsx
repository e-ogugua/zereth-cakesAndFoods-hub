'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

  const onSubmit = async (data: FormData) => {
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
      <section className="relative h-[50vh] flex items-center justify-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <Image 
            src={getOptimizedImagePath("/baker-mike-workspace.jpg")} 
            alt="Contact Us" 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif tracking-tight">Let's Create Something Sweet</h1>
            <p className="text-xl md:text-2xl text-gray-200">Get in touch to discuss your custom cake order</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-6 md:p-8 rounded-xl shadow-sm border"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2 font-serif">Send Us a Message</h2>
                <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Your name"
                      {...register('name')}
                      className={cn({
                        'border-destructive': errors.name,
                      })}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email')}
                      className={cn({
                        'border-destructive': errors.email,
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="e.g., 08060147046"
                    {...register('phone')}
                    className={cn({
                      'border-destructive': errors.phone,
                    })}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Occasion (Optional)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {occasions.map((occasion) => (
                      <button
                        key={occasion.id}
                        type="button"
                        onClick={() => {
                          setSelectedOccasion(occasion.id);
                          setValue('occasion', occasion.id);
                        }}
                        className={cn(
                          'text-sm px-3 py-2 rounded-md border transition-colors',
                          selectedOccasion === occasion.id
                            ? 'bg-primary/10 border-primary text-primary font-medium'
                            : 'border-input hover:bg-accent hover:text-accent-foreground'
                        )}
                      >
                        {occasion.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Event Date (Optional)
                  </label>
                  <Input
                    type="date"
                    {...register('date')}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your cake requirements..."
                    {...register('message')}
                    className={cn({
                      'border-destructive': errors.message,
                    })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border h-full">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 font-serif">Contact Information</h2>
                    <p className="text-muted-foreground">We're here to help with any questions</p>
                  </div>
                  
                  <ContactInfo variant="detailed" />
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Monday - Saturday</p>
                        <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
                        <p className="font-medium mt-3">Sunday</p>
                        <p className="text-muted-foreground">Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      <a 
                        href="https://facebook.com/zerethfoods" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://instagram.com/zerethfoods" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
