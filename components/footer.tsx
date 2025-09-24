"use client";

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/optimized/Zereth-logo2.webp"
                  alt="Zereth Cakes Hub"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Zereth</h3>
                <p className="text-sm text-primary-foreground/90">Cakes & Foods Hub</p>
              </div>
            </Link>

            <p className="text-primary-foreground/90 text-sm">
              Creating beautiful, delicious cakes that make your moments special.
            </p>

            <div className="flex gap-3">
              <a
                href="tel:+2348060147046"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:genjoshsnr@gmail.com"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <Link
                href="https://instagram.com/zerethfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/zerethfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-primary-foreground/90 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-primary-foreground/90 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/90 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/90 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+2348060147046" className="hover:text-white transition-colors">+234 806 014 7046</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:genjoshsnr@gmail.com" className="hover:text-white transition-colors">genjoshsnr@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Enugu, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>&copy; {currentYear} Zereth Cakes Hub. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <span className="text-primary-foreground/30">•</span>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
