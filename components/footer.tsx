"use client";

import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Cake } from "lucide-react"
import { getOptimizedImagePath } from '@/lib/image-utils';
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-primary font-bold text-4xl">Z</span>
              </div>
              <div className="transform group-hover:scale-[1.02] transition-transform duration-300">
                <h3 className="font-bold text-3xl text-white">Zereth</h3>
                <p className="text-sm font-medium text-primary-foreground/90">Cakes & Foods Hub</p>
              </div>
            </Link>

            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Creating beautiful, delicious cakes and foods that make your special moments even more memorable.
            </p>
            
            <div className="space-y-3 pt-1">
              <a href="tel:+2348060147046" className="flex items-center gap-3 text-sm font-medium hover:text-white transition-colors">
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+234 806 014 7046</span>
              </a>
              
              <a href="mailto:genjoshsnr@gmail.com" className="flex items-center gap-3 text-sm font-medium hover:text-white transition-colors">
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <span>genjoshsnr@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                </div>
                <span className="text-primary-foreground/90">Enugu, Nigeria</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Link 
                href="https://facebook.com/zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com/zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com/zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link 
                href="https://tiktok.com/@zerethfoods" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
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
            <h4 className="font-semibold text-lg text-white mb-5 pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Baker Services */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-5 pb-2 border-b border-white/10">Baker Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/baker-dashboard" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Baker Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/baker-signup" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Become a Baker</span>
                </Link>
              </li>
              <li>
                <Link href="/bakers" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Our Bakers</span>
                </Link>
              </li>
              <li>
                <Link href="/categories" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="flex items-center text-primary-foreground/90 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3 group-hover:bg-white transition-colors"></span>
                  <span>Checkout</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-5 pb-2 border-b border-white/10">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-white/10 p-1.5 rounded-lg mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-primary-foreground/90">Enugu, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <Link href="tel:+2348060147046" className="text-primary-foreground/90 hover:text-white transition-colors">
                  +234 806 014 7046
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <Link href="mailto:genjoshsnr@gmail.com" className="text-primary-foreground/90 hover:text-white transition-colors">
                  genjoshsnr@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                </div>
                <Link 
                  href="https://instagram.com/zerethfoods" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-white transition-colors"
                >
                  @zerethfoods
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <h5 className="font-semibold text-white mb-3 text-sm">Customer Support</h5>
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground/90">
                <span className="font-medium">Mon-Fri:</span> 8:00 AM - 8:00 PM
              </p>
              <p className="text-sm text-primary-foreground/90">
                <span className="font-medium">Sat-Sun:</span> 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/80 text-center md:text-left">
              &copy; {currentYear} Zereth Cakes Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/30">•</span>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-primary-foreground/30">•</span>
              <Link 
                href="/faq" 
                className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
