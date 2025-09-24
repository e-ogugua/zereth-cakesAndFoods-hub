import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cake, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { OrderForm } from './order-form';

export const metadata: Metadata = {
  title: 'Order a Custom Cake | Zereth Cakes Hub',
  description: 'Place an order for a custom cake with Zereth Cakes Hub. We create beautiful, delicious cakes for all occasions in Enugu, Nigeria.',
};

export default function OrderPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="bg-card rounded-2xl shadow-sm border p-6 md:p-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Order Your Custom Cake</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to place your order. We'll get back to you within 24 hours to confirm the details.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Order Details</h2>
                <OrderForm />
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 h-fit sticky top-6">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help you create the perfect cake for your special occasion.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+2348060147046" 
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>+234 806 014 7046</span>
                  </a>
                  
                  <a 
                    href="mailto:genjoshsnr@gmail.com" 
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>genjoshsnr@gmail.com</span>
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3">Our Location</h4>
                  <p className="text-muted-foreground">Enugu, Nigeria</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We serve customers across Nigeria with delivery options available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
