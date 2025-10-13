'use client';

import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-muted py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href="tel:+2348060147046" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Phone className="h-3 w-3" />
              <span>+234 806 014 7046</span>
            </a>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Free delivery in select areas</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/baker-signup" className="hover:text-foreground transition-colors">
              Become a Baker
            </Link>
            <Link href="/help" className="hover:text-foreground transition-colors">
              Help & Support
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
