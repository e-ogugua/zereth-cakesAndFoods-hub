"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample checkout items (in a real app, this would come from cart state)
const sampleItems = [
  {
    id: "1",
    name: "Elegant Three-Tier Wedding Cake",
    price: 450,
    quantity: 1,
    image: "/elegant-wedding-cake-three-tier.jpg",
  },
  {
    id: "2",
    name: "Gourmet Cupcake Dozen",
    price: 36,
    quantity: 2,
    image: "/gourmet-cupcakes-dozen-assorted.jpg",
  },
]

export default function CheckoutPage() {
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderData, setOrderData] = useState<any>(null)

  const subtotal = sampleItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePaymentComplete = (paymentData: any) => {
    setOrderData(paymentData)
    setOrderComplete(true)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <Card className="text-center p-8">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Order Confirmed!</h1>
                <p className="text-muted-foreground">
                  Thank you for your order. We'll send you updates via email and SMS.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-left max-w-md mx-auto">
                <h3 className="font-semibold mb-2">Order Details</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Order Number:</span>
                    <span className="font-mono">#ZC{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="capitalize">{orderData?.method?.replace("-", " ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Paid:</span>
                    <span className="font-semibold">
                      {orderData?.amount} {orderData?.currency}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {orderData?.method === "pay-on-delivery"
                    ? "Your baker will contact you within 2 hours to confirm delivery details."
                    : "Your payment has been processed successfully. The baker will start preparing your order."}
                </p>

                <div className="flex gap-4 justify-center">
                  <Button asChild>
                    <Link href="/orders">View Order Status</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          <p className="text-muted-foreground mt-2">Complete your order and get ready for something sweet!</p>
        </div>

        <CheckoutForm items={sampleItems} subtotal={subtotal} onPaymentComplete={handlePaymentComplete} />
      </main>

      <Footer />
    </div>
  )
}
