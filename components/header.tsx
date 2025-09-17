"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
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

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-primary-foreground font-bold text-4xl">Z</span>
            </div>
            <div className="transform group-hover:scale-[1.02] transition-transform duration-300">
              <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Zereth</h1>
              <p className="text-sm md:text-base text-muted-foreground font-medium">Cakes & Foods Hub</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search for cakes, bakers, or occasions..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>

          {/* Navigation and actions */}
          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
                Browse
              </Link>
              <Link href="/custom-cake" className="text-foreground hover:text-primary transition-colors">
                Custom Cake
              </Link>
              <Link href="/bakers" className="text-foreground hover:text-primary transition-colors">
                Bakers
              </Link>
              <Link href="/occasions" className="text-foreground hover:text-primary transition-colors">
                Occasions
              </Link>
            </nav>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                2
              </Badge>
            </Button>

            {/* User account */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search for cakes, bakers..." className="pl-10 pr-4 py-2 w-full" />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
                Browse Categories
              </Link>
              <Link href="/custom-cake" className="text-foreground hover:text-primary transition-colors">
                Custom Cake Designer
              </Link>
              <Link href="/bakers" className="text-foreground hover:text-primary transition-colors">
                Find Bakers
              </Link>
              <Link href="/occasions" className="text-foreground hover:text-primary transition-colors">
                Shop by Occasion
              </Link>
              <Link href="/baker-signup" className="text-primary hover:text-primary/80 transition-colors">
                Become a Baker
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
