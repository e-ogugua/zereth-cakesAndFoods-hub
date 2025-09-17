'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/custom-input';
import { Textarea } from '@/components/ui/custom-textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  eventDate: z.date({
    required_error: 'Please select a date for your event',
  }),
  cakeType: z.string().min(1, { message: 'Please select a cake type' }),
  servings: z.string().min(1, { message: 'Please select number of servings' }),
  designDescription: z.string().min(10, {
    message: 'Please provide more details about your desired design',
  }),
  specialRequests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      cakeType: '',
      servings: '',
      designDescription: '',
      specialRequests: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Order submitted successfully!', {
        description: 'We will contact you shortly to confirm the details.',
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...form.register('name')}
            error={form.formState.errors.name?.message}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...form.register('email')}
            error={form.formState.errors.email?.message}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+234 806 014 7046"
            {...form.register('phone')}
            error={form.formState.errors.phone?.message}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Event Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !form.watch('eventDate') && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {form.watch('eventDate') ? (
                  format(form.watch('eventDate'), 'PPP')
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={form.watch('eventDate')}
                onSelect={(date) => form.setValue('eventDate', date!)}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {form.formState.errors.eventDate && (
            <p className="text-sm text-destructive">
              {form.formState.errors.eventDate.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cakeType">Cake Type *</Label>
          <select
            id="cakeType"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            {...form.register('cakeType')}
          >
            <option value="">Select a cake type</option>
            <option value="birthday">Birthday Cake</option>
            <option value="wedding">Wedding Cake</option>
            <option value="anniversary">Anniversary Cake</option>
            <option value="custom">Custom Design</option>
            <option value="other">Other</option>
          </select>
          {form.formState.errors.cakeType && (
            <p className="text-sm text-destructive">
              {form.formState.errors.cakeType.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="servings">Number of Servings *</Label>
          <select
            id="servings"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            {...form.register('servings')}
          >
            <option value="">Select number of servings</option>
            <option value="10-15">10-15 people</option>
            <option value="15-25">15-25 people</option>
            <option value="25-50">25-50 people</option>
            <option value="50-100">50-100 people</option>
            <option value="100+">100+ people</option>
          </select>
          {form.formState.errors.servings && (
            <p className="text-sm text-destructive">
              {form.formState.errors.servings.message}
            </p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="designDescription">Design Description *</Label>
        <Textarea
          id="designDescription"
          placeholder="Describe the design, colors, theme, and any specific details you have in mind..."
          rows={4}
          {...form.register('designDescription')}
          error={form.formState.errors.designDescription?.message}
          className={form.formState.errors.designDescription?.message ? 'border-destructive' : ''}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
        <Textarea
          id="specialRequests"
          placeholder="Any dietary restrictions, allergies, or special instructions..."
          rows={3}
          {...form.register('specialRequests')}
        />
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full md:w-auto"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </Button>
        
        <p className="text-sm text-muted-foreground mt-3">
          * Required fields. We'll contact you within 24 hours to confirm your order details and provide a quote.
        </p>
      </div>
    </form>
  );
}
