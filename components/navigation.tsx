'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Phone, User, Cake, Mail, Sun, Moon } from 'lucide-react';
import { OrderButton } from './order-button';
import { Logo } from './logo';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode toggle using theme provider
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDarkMode = theme === 'dark';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Browse', href: '/categories' },
    { name: 'Custom Cake', href: '/custom-cake' },
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
        ? 'bg-white/95 backdrop-blur-md border-b border-red-200 shadow-lg'
        : 'bg-white/80 backdrop-blur-sm border-b border-red-100'
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Logo variant="nav" size="lg" className="mr-4" />
          <div className="flex flex-col leading-tight">
            <h1 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Zereth
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground font-medium -mt-1">
              Cakes & Foods Hub
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <div key={item.href} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    className={cn(
                      'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      pathname.startsWith('/baker')
                        ? 'text-white bg-red-600 shadow-md'
                        : 'text-foreground hover:text-red-600 hover:bg-red-50'
                    )}
                    aria-expanded="false"
                  >
                    {item.name}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-1 w-56 rounded-lg shadow-lg bg-white border border-red-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-red-50 hover:text-red-600 transition-colors"
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
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    pathname === item.href
                      ? 'text-white bg-red-600 shadow-md'
                      : 'text-foreground hover:text-red-600 hover:bg-red-50'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full text-foreground hover:bg-red-50 hover:text-red-600"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-foreground hover:bg-red-50 hover:text-red-600"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-50" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>
          <div className="hidden lg:block">
            <OrderButton className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200" />
          </div>
        </div>

        <div className="flex items-center md:hidden space-x-2">
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-red-50 hover:text-red-600">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:bg-red-50 hover:text-red-600"
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
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-[60] transition-all duration-300 ease-in-out overflow-y-auto',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
          'pt-20 pb-8 px-4'
        )}
      >
        <div className="bg-background rounded-xl p-6 shadow-xl border border-red-200 max-h-[80vh] overflow-y-auto">
          {/* Brand Section */}
          <div className="flex items-center justify-center mb-6 pb-6 border-b border-red-200">
            <Logo variant="nav" size="lg" className="mr-3" />
            <div className="flex flex-col leading-tight">
              <h1 className="font-bold text-xl bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Zereth
              </h1>
              <p className="text-xs text-muted-foreground font-medium -mt-1">
                Cakes & Foods Hub
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button asChild size="sm" className="gap-2 bg-red-600 hover:bg-red-700">
              <a href="tel:+2348060147046">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="gap-2 border-red-200 text-red-600 hover:bg-red-50">
              <a href="mailto:genjoshsnr@gmail.com?subject=Cake%20Inquiry">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              onClick={toggleDarkMode}
              className="gap-2 border-red-200 text-red-600 hover:bg-red-50"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2.5 text-base font-medium text-foreground rounded-lg">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            'block px-4 py-2 text-sm rounded-lg transition-all',
                            'hover:bg-red-50 hover:text-red-600',
                            pathname === subItem.href
                              ? 'bg-red-600 text-white font-medium'
                              : 'text-foreground hover:text-red-600',
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
                      'hover:bg-red-50 hover:text-red-600',
                      pathname === item.href
                        ? 'bg-red-600 text-white font-semibold'
                        : 'text-foreground hover:text-red-600',
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-red-200 space-y-4">
            <div className="space-y-3">
              <Button asChild className="w-full bg-red-600 hover:bg-red-700" size="lg" variant="default">
                <Link href="/contact">
                  <User className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild className="w-full bg-red-600 hover:bg-red-700" size="lg">
                <Link href="/custom-cake">
                  <Cake className="mr-2 h-4 w-4" />
                  Order Now
                </Link>
              </Button>
              <a
                href="tel:+2348060147046"
                className="inline-flex items-center justify-center w-full rounded-md bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us: +234 806 014 7046
              </a>
              <a
                href="mailto:genjoshsnr@gmail.com?subject=Cake%20Inquiry"
                className="inline-flex items-center justify-center w-full rounded-md border border-red-200 bg-white px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </div>
            <div className="mt-4 text-sm text-muted-foreground text-center">
              <p>Enugu, Nigeria</p>
              <a href="mailto:genjoshsnr@gmail.com" className="hover:underline hover:text-red-600">
                genjoshsnr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
