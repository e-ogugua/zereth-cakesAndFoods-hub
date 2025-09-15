"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CakeConfigurator } from "@/components/cake-configurator"

export default function CustomCakePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Design Your Perfect Cake</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Create a custom masterpiece with our easy-to-use cake designer. Choose every detail to make your celebration
            unforgettable.
          </p>
        </div>

        <CakeConfigurator />
      </main>
      <Footer />
    </div>
  )
}
