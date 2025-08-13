"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export default function ContactPage() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+855 12 345 678", "Available Mon-Sat 9AM-6PM"],
      primary: true,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@eyekhel.com", "Response within 24 hours"],
      primary: false,
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Street 240", "Phnom Penh, Cambodia"],
      primary: false,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00AM - 6:00PM", "Sun: Closed"],
      primary: false,
    },
  ]

  const commonSubjects = [
    "Order Inquiry",
    "Product Questions",
    "Shipping & Delivery",
    "Returns & Exchanges", 
    "Technical Support",
    "Wholesale Inquiry",
    "Other"
  ]

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{t.nav.contact}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about our blue light blocking glasses? We're here to help! 
          Reach out and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll respond as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a subject *</option>
                      {commonSubjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message *"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="flex min-h-[120px] w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-2xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="text-muted-foreground">
              Choose your preferred way to reach us.
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <Card key={index} className={method.primary ? "border-primary/50 bg-primary/5" : ""}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      method.primary ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{method.title}</h3>
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-sm ${
                          detailIndex === 0 ? "font-medium" : "text-muted-foreground"
                        }`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Link */}
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="font-semibold">Looking for quick answers?</h3>
              <p className="text-sm text-muted-foreground">
                Check our FAQ page for instant answers to common questions.
              </p>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href="/faq">View FAQ</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-muted/30 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">< 24hr</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">Khmer</div>
            <div className="text-sm text-muted-foreground">Local Language Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">Free</div>
            <div className="text-sm text-muted-foreground">Shipping Nationwide</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">30 Days</div>
            <div className="text-sm text-muted-foreground">Return Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}