"use client"
import Image from "next/image"
import { CakeConfigurator } from "@/components/cake-configurator"

export default function CustomCakePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20" />
        <div className="absolute inset-0 bg-[url('/optimized/birthday-cake-colorful-celebration.webp')] bg-cover bg-center opacity-30" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Design Your Perfect Cake
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
            Create a custom masterpiece with our easy-to-use cake designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              Start Designing
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-200">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Custom Cake Designer
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto">
            Use our step-by-step configurator to design your perfect cake. Choose from various sizes,
            flavors, fillings, and decorations to create a truly unique masterpiece.
          </p>
        </div>
        <CakeConfigurator />
      </main>
    </div>
  )
}
