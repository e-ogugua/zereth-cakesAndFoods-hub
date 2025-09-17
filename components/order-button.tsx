'use client';

import { Button } from '@/components/ui/button';
import { Cake, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { ComponentProps, forwardRef } from 'react';

type ButtonProps = ComponentProps<typeof Button>;

interface OrderButtonProps extends Omit<ButtonProps, 'asChild' | 'children'> {
  children?: React.ReactNode;
  showIcon?: boolean;
  iconType?: 'cake' | 'cart';
  iconPosition?: 'left' | 'right';
  href?: string;
}

export const OrderButton = forwardRef<HTMLButtonElement, OrderButtonProps>(
  ({
    variant = 'default',
    size = 'default',
    className = '',
    children = 'Order Now',
    showIcon = true,
    iconType = 'cake',
    iconPosition = 'left',
    href = '/order',
    ...props
  }, ref) => {
    const Icon = iconType === 'cake' ? Cake : ShoppingCart;
    
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={`group relative overflow-hidden transition-all duration-300 ${className}`}
        ref={ref}
        aria-label={typeof children === 'string' ? children : 'Place Order'}
        {...props}
      >
        <Link 
          href={href} 
          className={`flex items-center justify-center gap-2 ${
            iconPosition === 'right' ? 'flex-row-reverse' : ''
          }`}
        >
          {showIcon && (
            <span className="relative z-10">
              <Icon 
                className={`h-4 w-4 transition-transform duration-300 ${
                  iconPosition === 'right' 
                    ? 'group-hover:translate-x-1' 
                    : 'group-hover:-translate-x-0.5'
                }`} 
                aria-hidden="true"
              />
            </span>
          )}
          <span className="relative z-10">
            {children}
          </span>
          
          {/* Hover effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </Button>
    );
  }
);

OrderButton.displayName = 'OrderButton';
