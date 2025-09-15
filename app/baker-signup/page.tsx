"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Upload, CheckCircle, Star, DollarSign, Users } from "lucide-react"

const onboardingSteps = [
  { id: 1, title: "Personal Info", description: "Tell us about yourself" },
  { id: 2, title: "Business Details", description: "Your bakery information" },
  { id: 3, title: "Menu & Pricing", description: "Upload your products" },
  { id: 4, title: "Delivery & Zones", description: "Set your service areas" },
  { id: 5, title: "Verification", description: "Complete your profile" },
]

const specialtyOptions = [
  "Wedding Cakes",
  "Birthday Cakes",
  "Corporate Cakes",
  "Cupcakes",
  "Pastries",
  "Custom Designs",
  "Fondant Work",
  "Themed Cakes",
  "Character Cakes",
  "Organic Baking",
  "Gluten-Free",
  "Vegan Options",
]

export default function BakerSignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Business Details
    businessName: "",
    bio: "",
    specialties: [] as string[],
    yearsExperience: "",

    // Menu & Pricing
    menuFile: null as File | null,
    sampleImages: [] as File[],

    // Delivery & Zones
    deliveryZones: [] as string[],
    deliveryFee: "",
    freeDeliveryMinimum: "",

    // Verification
    businessLicense: null as File | null,
    agreedToTerms: false,
  })

  const progress = (currentStep / onboardingSteps.length) * 100

  const nextStep = () => {
    if (currentStep < onboardingSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (!files) return

    if (field === "sampleImages") {
      setFormData((prev) => ({
        ...prev,
        sampleImages: [...prev.sampleImages, ...Array.from(files)],
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: files[0] }))
    }
  }

  const toggleSpecialty = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Details</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
                    className="mt-2"
                    placeholder="Sarah's Sweet Creations"
                  />
                </div>

                <div>
                  <Label htmlFor="bio">Business Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                    className="mt-2"
                    rows={4}
                    placeholder="Tell customers about your passion for baking and what makes your creations special..."
                  />
                </div>

                <div>
                  <Label>Years of Experience</Label>
                  <Select
                    value={formData.yearsExperience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, yearsExperience: value }))}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Specialties (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {specialtyOptions.map((specialty) => (
                      <div key={specialty} className="flex items-center space-x-2">
                        <Checkbox
                          id={specialty}
                          checked={formData.specialties.includes(specialty)}
                          onCheckedChange={() => toggleSpecialty(specialty)}
                        />
                        <Label htmlFor={specialty} className="text-sm cursor-pointer">
                          {specialty}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Menu & Portfolio</h3>

              <div className="space-y-6">
                <div>
                  <Label>Upload Menu (CSV or PDF)</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Upload your menu with products and pricing</p>
                    <input
                      type="file"
                      accept=".csv,.pdf"
                      onChange={(e) => handleFileUpload("menuFile", e.target.files)}
                      className="hidden"
                      id="menu-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="menu-upload" className="cursor-pointer">
                        Choose File
                      </label>
                    </Button>
                    {formData.menuFile && (
                      <p className="text-sm text-primary mt-2">Uploaded: {formData.menuFile.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Sample Images (5-10 high-quality photos)</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Showcase your best work with high-quality images
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload("sampleImages", e.target.files)}
                      className="hidden"
                      id="images-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="images-upload" className="cursor-pointer">
                        Choose Images
                      </label>
                    </Button>
                    {formData.sampleImages.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Uploaded Images ({formData.sampleImages.length}):</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {formData.sampleImages.map((file, index) => (
                            <div key={index} className="text-xs bg-muted px-2 py-1 rounded">
                              {file.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Delivery & Service Areas</h3>

              <div className="space-y-4">
                <div>
                  <Label>Delivery Zones</Label>
                  <div className="mt-2 space-y-2">
                    {["Downtown", "Midtown", "Uptown", "Eastside", "Westside", "Northside", "Southside", "Suburbs"].map(
                      (zone) => (
                        <div key={zone} className="flex items-center space-x-2">
                          <Checkbox
                            id={zone}
                            checked={formData.deliveryZones.includes(zone)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({ ...prev, deliveryZones: [...prev.deliveryZones, zone] }))
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  deliveryZones: prev.deliveryZones.filter((z) => z !== zone),
                                }))
                              }
                            }}
                          />
                          <Label htmlFor={zone} className="cursor-pointer">
                            {zone}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryFee">Delivery Fee ($)</Label>
                    <Input
                      id="deliveryFee"
                      type="number"
                      value={formData.deliveryFee}
                      onChange={(e) => setFormData((prev) => ({ ...prev, deliveryFee: e.target.value }))}
                      className="mt-2"
                      placeholder="5.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="freeDeliveryMinimum">Free Delivery Minimum ($)</Label>
                    <Input
                      id="freeDeliveryMinimum"
                      type="number"
                      value={formData.freeDeliveryMinimum}
                      onChange={(e) => setFormData((prev) => ({ ...prev, freeDeliveryMinimum: e.target.value }))}
                      className="mt-2"
                      placeholder="50.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Verification & Agreement</h3>

              <div className="space-y-6">
                <div>
                  <Label>Business License (Optional)</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload your business license or food handler's permit
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload("businessLicense", e.target.files)}
                      className="hidden"
                      id="license-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="license-upload" className="cursor-pointer">
                        Choose File
                      </label>
                    </Button>
                    {formData.businessLicense && (
                      <p className="text-sm text-primary mt-2">Uploaded: {formData.businessLicense.name}</p>
                    )}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">What happens next?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>We'll review your application within 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>You'll receive an email with your dashboard access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Start receiving orders and growing your business</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreedToTerms: !!checked }))}
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Join Our Baker Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Share your passion for baking with customers who appreciate artisanal quality. Let's grow your business
            together.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Reach More Customers</h3>
            <p className="text-sm text-muted-foreground">Connect with cake lovers in your area</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Grow Your Revenue</h3>
            <p className="text-sm text-muted-foreground">Increase orders and build your brand</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Build Your Reputation</h3>
            <p className="text-sm text-muted-foreground">Get reviews and showcase your work</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              Step {currentStep} of {onboardingSteps.length}
            </h2>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>

          <Progress value={progress} className="h-2 mb-4" />

          <div className="flex justify-between">
            {onboardingSteps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center text-xs ${
                  step.id <= currentStep ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-xs font-medium ${
                    step.id < currentStep
                      ? "bg-primary text-primary-foreground"
                      : step.id === currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.id < currentStep ? <CheckCircle className="h-4 w-4" /> : step.id}
                </div>
                <span className="hidden sm:block text-center">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{onboardingSteps[currentStep - 1]?.title}</CardTitle>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
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

          <Button
            onClick={currentStep === onboardingSteps.length ? () => console.log("Submit application") : nextStep}
            disabled={currentStep === onboardingSteps.length && !formData.agreedToTerms}
            className="flex items-center gap-2"
          >
            {currentStep === onboardingSteps.length ? "Submit Application" : "Next"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
