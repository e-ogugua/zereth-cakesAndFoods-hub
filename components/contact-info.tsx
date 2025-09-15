'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactInfo({
  variant = 'default',
  className = '',
}: {
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}) {
  const contactItems = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Call Us',
      value: '08060147046',
      href: 'tel:08060147046',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email Us',
      value: 'genjoshsnr@gmail.com',
      href: 'mailto:genjoshsnr@gmail.com',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Enugu, Nigeria',
      href: 'https://maps.google.com/maps?q=Enugu,Nigeria',
    },
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="mr-2">{item.icon}</span>
            <span className="sr-only">{item.label}: </span>
            <span>{item.value}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`grid gap-6 ${className}`}>
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-accent rounded-lg text-primary">
                {item.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:underline"
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`space-y-4 ${className}`}>
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0 text-muted-foreground">
            {item.icon}
          </div>
          <div className="ml-3">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
            >
              {item.value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
