"use client"

import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          <p className="text-muted-foreground mt-2">Complete your order and get ready for something sweet!</p>
        </div>

        <div className="text-center py-16">
          <h2 className="text-xl font-semibold mb-4">Checkout System</h2>
          <p className="text-muted-foreground mb-6">
            Our checkout system is being prepared for deployment.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
