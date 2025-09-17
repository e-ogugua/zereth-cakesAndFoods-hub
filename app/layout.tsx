import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import ClientOnly from "@/components/ClientOnly"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Zereth Cakes Hub - Where Edible Art Meets Extraordinary Taste",
  description: "Custom cakes and artisanal foods by Joshua Okwukwem Ogugua. Specializing in custom cakes, bento cakes, muffins, and more.",
  keywords: "custom cakes, bento cakes, muffins, small chops, meat pies, artisanal food, Abuja baker, wedding cakes, birthday cakes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <Toaster position="top-center" />
            <ScrollToTop />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
