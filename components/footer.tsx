"use client";

import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Cake } from "lucide-react"
import { getOptimizedImagePath } from '@/lib/image-utils';
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary/90 text-primary-foreground">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={getOptimizedImagePath("/Zereth-logo2.jpeg")}
                alt="Zereth Cakes Hub Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="font-bold text-xl">Zereth Cakes Hub</h3>
                <p className="text-xs text-primary-foreground/70">Where Edible Art Meets Extraordinary Taste</p>
              </div>
            </Link>

            <p className="text-primary-foreground/80 text-sm">
              Creating beautiful, delicious cakes and foods that make your special moments even more memorable.
            </p>

            <div className="flex gap-4">
              <Link 
                href="https://facebook.com/zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com/zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com/zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link 
                href="https://tiktok.com/@zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tiktok"
                >
                  <path d="M16.5 9.5a4.5 4.5 0 0 1-4.5 4.5V6.5a4.5 4.5 0 0 1 4.5 3Z" />
                  <path d="M12 6.5v13a7.5 7.5 0 0 0 7.5-7.5h-7.5Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Services
              </Link>
              </li>
              <li>
                <Link href="/custom-cake" className="text-background/80 hover:text-background transition-colors">
                  Custom Cake Designer
                </Link>
              </li>
              <li>
                <Link href="/bakers" className="text-background/80 hover:text-background transition-colors">
                  Find Bakers
                </Link>
              </li>
              <li>
                <Link href="/occasions" className="text-background/80 hover:text-background transition-colors">
                  Shop by Occasion
                </Link>
              </li>
              <li>
                <Link href="/trending" className="text-background/80 hover:text-background transition-colors">
                  Trending Now
                </Link>
              </li>
            </ul>
          </div>

          {/* For Bakers */}
          <div>
            <h4 className="font-semibold mb-4">For Bakers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </Link>
              </li>
              <li>
                <Link href="/baker-support" className="text-background/80 hover:text-background transition-colors">
                  Baker Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <Link href="tel:+2348123456789" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +234 812 345 6789
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <Link href="mailto:info@zerethcakeshub.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@zerethcakeshub.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </span>
                <Link 
                  href="https://instagram.com/zerethfoods" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  @zerethfoods
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-medium mb-2 text-sm">Customer Support</h5>
            <p className="text-xs text-background/70">
              Mon-Fri: 8AM-8PM
              <br />
              Sat-Sun: 9AM-6PM
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6">
          <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              &copy; {currentYear} Zereth Cakes Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
