"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Mail className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Sweet Deals & Updates</h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Get exclusive offers, seasonal cake ideas, and be the first to know about new bakers joining our marketplace
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="bg-background rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Gift className="h-5 w-5" />
              <span className="font-semibold">Welcome to the family!</span>
            </div>
            <p className="text-sm text-muted-foreground">Check your email for a special welcome offer</p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span>Exclusive offers</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Weekly recipes</span>
          </div>
          <div className="flex items-center gap-2">
            <span>No spam, unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
