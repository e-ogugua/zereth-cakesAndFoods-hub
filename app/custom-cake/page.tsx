"use client"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { CakeConfigurator } from "@/components/cake-configurator"

export default function CustomCakePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section relative h-[40vh] flex items-center justify-center bg-muted">
        <div className="hero-overlay" />
        <Image
          src="/optimized/birthday-cake-colorful-celebration.webp"
          alt="Design Your Perfect Cake"
          fill
          className="object-cover"
          priority
        />

        <div className="hero-content">
          <h1 className="hero-title">Design Your Perfect Cake</h1>
          <p className="hero-subtitle">Create a custom masterpiece with our easy-to-use cake designer</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 -mt-16 relative z-10">
        <CakeConfigurator />
      </main>
      <Footer />
    </div>
  )
}
