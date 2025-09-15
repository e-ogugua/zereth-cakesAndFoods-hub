'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Phone, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from './logo';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { 
      name: 'Bakers', 
      href: '#',
      dropdown: [
        { name: 'Our Bakers', href: '/bakers' },
        { name: 'Baker Dashboard', href: '/baker-dashboard' },
        { name: 'Become a Baker', href: '/baker-signup' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-300',
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b shadow-sm' 
        : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Logo size="lg" className="mr-4" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <div key={item.href} className="relative group">
              {item.dropdown ? (
                <>
                  <button className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors text-foreground/60 hover:text-foreground hover:bg-accent/50">
                    {item.name}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent/50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    pathname === item.href
                      ? 'text-foreground bg-primary/10'
                      : 'text-foreground/60 hover:text-foreground hover:bg-accent/50',
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <a href="tel:08060147046" className="ml-2">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-4 w-4" />
              Order Now
            </Button>
          </a>
        </div>

        <div className="flex items-center md:hidden space-x-2">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
          'pt-24 px-4'
        )}
      >
        <div className="bg-card rounded-xl p-6 shadow-xl border">
          <nav className="space-y-2">
            {navigation.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-4 py-3 text-base font-medium text-foreground/90">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            'block px-4 py-2 text-sm rounded-lg transition-all',
                            'hover:bg-accent hover:text-accent-foreground',
                            pathname === subItem.href
                              ? 'bg-accent text-accent-foreground font-medium'
                              : 'text-foreground/80 hover:text-foreground',
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 text-base font-medium rounded-lg transition-all',
                      'hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground font-semibold'
                        : 'text-foreground/90 hover:text-foreground',
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-border">
            <div className="space-y-3">
              <Button className="w-full" size="lg" variant="outline">
                <User className="mr-2 h-4 w-4" />
                My Account
              </Button>
              <a 
                href="tel:08060147046" 
                className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us: 08060147046
              </a>
            </div>
            <div className="mt-4 text-sm text-muted-foreground text-center">
              <p>Enugu, Nigeria</p>
              <a href="mailto:genjoshsnr@gmail.com" className="hover:underline hover:text-foreground">
                genjoshsnr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
