import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from '@/components/theme-provider'
import { CurrencyProvider } from '@/lib/currency-context'
import { Toaster } from "sonner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CurrencyProvider>
            <div className="relative min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1 bg-gradient-to-br from-background via-red-50/30 to-green-50/20">
                {children}
              </main>
              <Footer />
              <Toaster
                position="top-center"
                toastOptions={{
                  style: {
                    background: 'hsl(0 0% 100%)',
                    border: '1px solid hsl(0 84% 60%)',
                    color: 'hsl(0 0% 3.9%)',
                  },
                }}
              />
              <ScrollToTop />
            </div>
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
