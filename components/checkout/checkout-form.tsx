"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Truck, Shield, MapPin, Clock } from "lucide-react"
import {
  SUPPORTED_CURRENCIES,
  getAvailablePaymentMethods,
  formatCurrency,
  convertCurrency,
  detectCurrencyByCountry,
} from "@/lib/payments"

interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

interface CheckoutFormProps {
  items: CheckoutItem[]
  subtotal: number
  onPaymentComplete?: (paymentData: any) => void
}

export function CheckoutForm({ items, subtotal, onPaymentComplete }: CheckoutFormProps) {
  const [currency, setCurrency] = useState("USD")
  const [country, setCountry] = useState("US")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("delivery")
  const [isProcessing, setIsProcessing] = useState(false)

  // Auto-detect currency based on user location (simplified)
  useEffect(() => {
    // In a real app, you'd use geolocation API or IP detection
    const detectedCountry = "US" // This would come from geolocation
    const detectedCurrency = detectCurrencyByCountry(detectedCountry)
    setCountry(detectedCountry)
    setCurrency(detectedCurrency)
  }, [])

  const availablePaymentMethods = getAvailablePaymentMethods(currency, country)
  const convertedSubtotal = convertCurrency(subtotal, "USD", currency)
  const deliveryFee = deliveryMethod === "delivery" ? convertCurrency(5, "USD", currency) : 0
  const serviceFee = convertCurrency(2.5, "USD", currency)
  const total = convertedSubtotal + deliveryFee + serviceFee

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const paymentData = {
        method: paymentMethod,
        currency,
        amount: total,
        items,
        deliveryMethod,
      }

      onPaymentComplete?.(paymentData)
    } catch (error) {
      console.error("Payment failed:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Order Summary */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <div className="text-sm font-medium">
                  {formatCurrency(convertCurrency(item.price * item.quantity, "USD", currency), currency)}
                </div>
              </div>
            ))}

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatCurrency(convertedSubtotal, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee:</span>
                <span>{formatCurrency(serviceFee, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span>{deliveryFee > 0 ? formatCurrency(deliveryFee, currency) : "Free"}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-base">
                <span>Total:</span>
                <span className="text-primary">{formatCurrency(total, currency)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Currency Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Currency & Region</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Currency</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(SUPPORTED_CURRENCIES).map(([code, info]) => (
                      <SelectItem key={code} value={code}>
                        <div className="flex items-center gap-2">
                          <span>{info.flag}</span>
                          <span>
                            {code} - {info.name}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Country</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">🇺🇸 United States</SelectItem>
                    <SelectItem value="GB">🇬🇧 United Kingdom</SelectItem>
                    <SelectItem value="NG">🇳🇬 Nigeria</SelectItem>
                    <SelectItem value="CA">🇨🇦 Canada</SelectItem>
                    <SelectItem value="AU">🇦🇺 Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Form */}
      <div className="space-y-6">
        {/* Delivery Method */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Delivery Method</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Home Delivery</div>
                      <div className="text-sm text-muted-foreground">
                        Delivered to your address ({formatCurrency(deliveryFee, currency)})
                      </div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Pickup</div>
                      <div className="text-sm text-muted-foreground">Collect from baker's location (Free)</div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              {availablePaymentMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {method.type === "card" ? (
                          <CreditCard className="h-5 w-5 text-primary" />
                        ) : method.type === "cash" ? (
                          <Clock className="h-5 w-5 text-primary" />
                        ) : (
                          <Shield className="h-5 w-5 text-primary" />
                        )}
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {method.id === "pay-on-delivery"
                              ? "Pay when your order is delivered"
                              : "Secure card payment"}
                          </div>
                        </div>
                      </div>

                      {method.id === "pay-on-delivery" && <Badge variant="secondary">Cash</Badge>}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Card Details (shown when card payment is selected) */}
            {paymentMethod && paymentMethod !== "pay-on-delivery" && (
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-2" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" className="mt-2" />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Delivery Address */}
        {deliveryMethod === "delivery" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Delivery Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" className="mt-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" className="mt-2" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Complete Order */}
        <Button className="w-full" size="lg" onClick={handlePayment} disabled={!paymentMethod || isProcessing}>
          {isProcessing
            ? "Processing..."
            : paymentMethod === "pay-on-delivery"
              ? `Place Order - ${formatCurrency(total, currency)}`
              : `Pay ${formatCurrency(total, currency)}`}
        </Button>

        {/* Security Notice */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
          <Shield className="h-4 w-4" />
          <span>Your payment information is secure and encrypted</span>
        </div>
      </div>
    </div>
  )
}
