"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Upload, CalendarIcon, Clock, DollarSign, Sparkles } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { OptimizedImage } from "@/components/ui/optimized-image"

interface CakeConfig {
  size: string
  flavor: string
  filling: string
  decoration: string
  message: string
  referenceImages: File[]
  deliveryDate: Date | undefined
  deliveryTime: string
  specialInstructions: string
  baker: string
}

const steps = [
  { id: 1, title: "Size & Servings", description: "Choose your cake size" },
  { id: 2, title: "Flavor", description: "Select your favorite flavor" },
  { id: 3, title: "Filling & Frosting", description: "Pick your filling and frosting" },
  { id: 4, title: "Decoration Style", description: "Choose your decoration theme" },
  { id: 5, title: "Personalization", description: "Add your personal touches" },
  { id: 6, title: "Delivery Details", description: "When do you need it?" },
  { id: 7, title: "Review & Order", description: "Confirm your design" },
]

const sizeOptions = [
  { id: "6-inch", name: "6 inch", servings: "6-8 people", price: 45, image: "/cake-size-6-inch.jpg" },
  { id: "8-inch", name: "8 inch", servings: "12-15 people", price: 65, image: "/cake-size-8-inch.jpg" },
  { id: "10-inch", name: "10 inch", servings: "20-25 people", price: 85, image: "/cake-size-10-inch.jpg" },
  { id: "12-inch", name: "12 inch", servings: "30-35 people", price: 120, image: "/cake-size-12-inch.jpg" },
  { id: "two-tier", name: "Two Tier", servings: "40-50 people", price: 180, image: "/cake-size-two-tier.jpg" },
  { id: "three-tier", name: "Three Tier", servings: "75-100 people", price: 280, image: "/cake-size-three-tier.jpg" },
]

const flavorOptions = [
  { id: "vanilla", name: "Classic Vanilla", description: "Rich vanilla bean cake", price: 0, popular: true },
  { id: "chocolate", name: "Decadent Chocolate", description: "Moist chocolate fudge cake", price: 5, popular: true },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description: "Classic red velvet with cream cheese",
    price: 8,
    popular: false,
  },
  { id: "lemon", name: "Lemon Zest", description: "Fresh lemon cake with citrus notes", price: 6, popular: false },
  { id: "strawberry", name: "Strawberry Delight", description: "Light strawberry cake", price: 7, popular: false },
  { id: "funfetti", name: "Funfetti", description: "Colorful sprinkle celebration cake", price: 5, popular: true },
]

const fillingOptions = [
  { id: "buttercream", name: "Classic Buttercream", description: "Smooth vanilla buttercream", price: 0 },
  { id: "chocolate-ganache", name: "Chocolate Ganache", description: "Rich dark chocolate ganache", price: 10 },
  { id: "cream-cheese", name: "Cream Cheese Frosting", description: "Tangy cream cheese frosting", price: 8 },
  { id: "fruit-preserve", name: "Fruit Preserves", description: "Fresh fruit jam filling", price: 12 },
  { id: "caramel", name: "Salted Caramel", description: "Sweet and salty caramel", price: 15 },
  { id: "peanut-butter", name: "Peanut Butter", description: "Creamy peanut butter frosting", price: 10 },
]

const decorationOptions = [
  {
    id: "elegant",
    name: "Elegant & Minimal",
    description: "Clean lines, sophisticated design",
    price: 20,
    image: "/decoration-elegant.jpg",
  },
  {
    id: "floral",
    name: "Floral Garden",
    description: "Beautiful sugar flowers and leaves",
    price: 45,
    image: "/decoration-floral.jpg",
  },
  {
    id: "themed",
    name: "Custom Theme",
    description: "Personalized theme design",
    price: 60,
    image: "/decoration-themed.jpg",
  },
  {
    id: "vintage",
    name: "Vintage Romance",
    description: "Classic vintage styling",
    price: 35,
    image: "/decoration-vintage.jpg",
  },
  {
    id: "modern",
    name: "Modern Geometric",
    description: "Contemporary geometric patterns",
    price: 40,
    image: "/decoration-modern.jpg",
  },
  {
    id: "whimsical",
    name: "Whimsical Fun",
    description: "Playful and colorful design",
    price: 50,
    image: "/decoration-whimsical.jpg",
  },
]

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
]

export function CakeConfigurator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [config, setConfig] = useState<CakeConfig>({
    size: "",
    flavor: "",
    filling: "",
    decoration: "",
    message: "",
    referenceImages: [],
    deliveryDate: undefined,
    deliveryTime: "",
    specialInstructions: "",
    baker: "",
  })

  const progress = (currentStep / steps.length) * 100

  const calculatePrice = () => {
    let basePrice = 0
    let addOns = 0

    // Base price from size
    const sizeOption = sizeOptions.find((s) => s.id === config.size)
    if (sizeOption) basePrice = sizeOption.price

    // Add flavor cost
    const flavorOption = flavorOptions.find((f) => f.id === config.flavor)
    if (flavorOption) addOns += flavorOption.price

    // Add filling cost
    const fillingOption = fillingOptions.find((f) => f.id === config.filling)
    if (fillingOption) addOns += fillingOption.price

    // Add decoration cost
    const decorationOption = decorationOptions.find((d) => d.id === config.decoration)
    if (decorationOption) addOns += decorationOption.price

    return basePrice + addOns
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setConfig((prev) => ({ ...prev, referenceImages: [...prev.referenceImages, ...files] }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Cake Size</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sizeOptions.map((size) => (
                  <Card
                    key={size.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      config.size === size.id ? "ring-2 ring-primary bg-primary/5" : "",
                    )}
                    onClick={() => setConfig((prev) => ({ ...prev, size: size.id }))}
                  >
                    <CardContent className="p-4">
                      <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
                        <OptimizedImage
                          src={(size.image || "placeholder.svg").replace(/^\//, '')}
                          alt={size.name}
                          containerClassName="h-full w-full"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold">{size.name}</h4>
                      <p className="text-sm text-muted-foreground">{size.servings}</p>
                      <p className="text-lg font-bold text-primary mt-2">${size.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Your Flavor</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flavorOptions.map((flavor) => (
                  <Card
                    key={flavor.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      config.flavor === flavor.id ? "ring-2 ring-primary bg-primary/5" : "",
                    )}
                    onClick={() => setConfig((prev) => ({ ...prev, flavor: flavor.id }))}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{flavor.name}</h4>
                        {flavor.popular && (
                          <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{flavor.description}</p>
                      <p className="text-sm font-medium text-primary">
                        {flavor.price === 0 ? "Included" : `+$${flavor.price}`}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose Filling & Frosting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fillingOptions.map((filling) => (
                  <Card
                    key={filling.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      config.filling === filling.id ? "ring-2 ring-primary bg-primary/5" : "",
                    )}
                    onClick={() => setConfig((prev) => ({ ...prev, filling: filling.id }))}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{filling.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{filling.description}</p>
                      <p className="text-sm font-medium text-primary">
                        {filling.price === 0 ? "Included" : `+$${filling.price}`}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Decoration Style</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {decorationOptions.map((decoration) => (
                  <Card
                    key={decoration.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      config.decoration === decoration.id ? "ring-2 ring-primary bg-primary/5" : "",
                    )}
                    onClick={() => setConfig((prev) => ({ ...prev, decoration: decoration.id }))}
                  >
                    <CardContent className="p-4">
                      <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
                        <OptimizedImage
                          src={(decoration.image || "placeholder.svg").replace(/^\//, '')}
                          alt={decoration.name}
                          containerClassName="h-full w-full"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold">{decoration.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{decoration.description}</p>
                      <p className="text-sm font-medium text-primary">+${decoration.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Add Personal Touches</h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="message">Custom Message (Optional)</Label>
                  <Input
                    id="message"
                    placeholder="Happy Birthday, Sarah!"
                    value={config.message}
                    onChange={(e) => setConfig((prev) => ({ ...prev, message: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Reference Images (Optional)</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload inspiration images to help your baker understand your vision
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="image-upload" className="cursor-pointer">
                        Choose Images
                      </label>
                    </Button>
                  </div>

                  {config.referenceImages.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Uploaded Images:</p>
                      <div className="flex flex-wrap gap-2">
                        {config.referenceImages.map((file, index) => (
                          <div key={index} className="text-xs bg-muted px-2 py-1 rounded">
                            {file.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                  <Textarea
                    id="instructions"
                    placeholder="Any specific requests or dietary requirements..."
                    value={config.specialInstructions}
                    onChange={(e) => setConfig((prev) => ({ ...prev, specialInstructions: e.target.value }))}
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Delivery Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal mt-2",
                          !config.deliveryDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {config.deliveryDate ? format(config.deliveryDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={config.deliveryDate}
                        onSelect={(date) => setConfig((prev) => ({ ...prev, deliveryDate: date }))}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Delivery Time</Label>
                  <Select
                    value={config.deliveryTime}
                    onValueChange={(value) => setConfig((prev) => ({ ...prev, deliveryTime: value }))}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mt-6">
                <h4 className="font-semibold mb-2">Delivery Information</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Minimum 48 hours notice required for custom cakes</li>
                  <li>• Same-day delivery available for select items (additional fee applies)</li>
                  <li>• Free delivery within 10 miles of baker location</li>
                  <li>• We'll confirm availability with your chosen baker</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Review Your Design</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Your Custom Cake
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{sizeOptions.find((s) => s.id === config.size)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Flavor:</span>
                        <span className="font-medium">{flavorOptions.find((f) => f.id === config.flavor)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Filling:</span>
                        <span className="font-medium">{fillingOptions.find((f) => f.id === config.filling)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Decoration:</span>
                        <span className="font-medium">
                          {decorationOptions.find((d) => d.id === config.decoration)?.name}
                        </span>
                      </div>
                      {config.message && (
                        <div className="flex justify-between">
                          <span>Message:</span>
                          <span className="font-medium">"{config.message}"</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Delivery:</span>
                        <span className="font-medium">
                          {config.deliveryDate ? format(config.deliveryDate, "MMM dd") : "Not set"} at{" "}
                          {config.deliveryTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Price Breakdown */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Price Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base cake ({sizeOptions.find((s) => s.id === config.size)?.name}):</span>
                        <span>${sizeOptions.find((s) => s.id === config.size)?.price || 0}</span>
                      </div>
                      {flavorOptions.find((f) => f.id === config.flavor)?.price! > 0 && (
                        <div className="flex justify-between">
                          <span>Flavor upgrade:</span>
                          <span>+${flavorOptions.find((f) => f.id === config.flavor)?.price}</span>
                        </div>
                      )}
                      {fillingOptions.find((f) => f.id === config.filling)?.price! > 0 && (
                        <div className="flex justify-between">
                          <span>Filling upgrade:</span>
                          <span>+${fillingOptions.find((f) => f.id === config.filling)?.price}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Decoration:</span>
                        <span>+${decorationOptions.find((d) => d.id === config.decoration)?.price || 0}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">${calculatePrice()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Visual Preview */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cake Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center text-muted-foreground">
                          <Sparkles className="h-12 w-12 mx-auto mb-2" />
                          <p>Visual preview will be generated</p>
                          <p className="text-sm">based on your selections</p>
                        </div>
                      </div>

                      <Button className="w-full" size="lg">
                        Request Quote & Connect with Baker
                      </Button>

                      <p className="text-xs text-muted-foreground text-center mt-2">
                        A baker will contact you within 2 hours to confirm details and provide final pricing
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Step {currentStep} of {steps.length}
            </h2>
            <p className="text-muted-foreground">{steps[currentStep - 1]?.description}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">Estimated Total</div>
            <div className="text-2xl font-bold text-primary">${calculatePrice()}</div>
          </div>
        </div>

        <Progress value={progress} className="h-2" />

        {/* Step indicators */}
        <div className="flex justify-between mt-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={cn(
                "flex flex-col items-center text-xs",
                step.id <= currentStep ? "text-primary" : "text-muted-foreground",
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mb-1 text-xs font-medium",
                  step.id < currentStep
                    ? "bg-primary text-primary-foreground"
                    : step.id === currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                )}
              >
                {step.id}
              </div>
              <span className="hidden sm:block text-center">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="mb-8">
        <CardContent className="p-8">{renderStepContent()}</CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <Button onClick={nextStep} disabled={currentStep === steps.length} className="flex items-center gap-2">
          {currentStep === steps.length ? "Complete Order" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
