'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Cake, Instagram, Facebook } from 'lucide-react';
import { getOptimizedImagePath } from '@/lib/image-utils';
import Image from 'next/image';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      toast.success('Message sent! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center bg-muted">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50" />
          <Image src={getOptimizedImagePath("/baker-mike-workspace.jpg")} alt="Contact Us" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" placeholder="Your name" {...register('name', { required: true })} />
                {errors.name && <p className="mt-1 text-sm text-destructive">Name is required</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" 
                    {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} 
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">Valid email is required</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <Input id="phone" type="tel" placeholder="+234 800 000 0000" 
                    {...register('phone', { required: true })} 
                  />
                  {errors.phone && <p className="mt-1 text-sm text-destructive">Phone is required</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" rows={5} placeholder="Your message..." 
                  {...register('message', { required: true, minLength: 10 })} 
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">Message is too short</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-muted-foreground">Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+2348000000000" className="text-muted-foreground hover:text-primary">
                      +234 800 000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@zerethcakeshub.com" className="text-muted-foreground hover:text-primary">
                      info@zerethcakeshub.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/zerethfoods" target="_blank" rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/zerethfoods" target="_blank" rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
