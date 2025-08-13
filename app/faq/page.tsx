"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export default function FAQPage() {
  const { t } = useI18n()
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const faqCategories = [
    {
      category: "Product & Benefits",
      items: [
        {
          id: "what-is-blue-light",
          question: "What is blue light and why is it harmful?",
          answer: "Blue light is high-energy visible light with wavelengths between 400-490nm. It's naturally present in sunlight but is also emitted by digital screens and LED lighting. While some blue light exposure is beneficial during the day, excessive exposure from screens can cause eye strain, headaches, and disrupt sleep patterns by suppressing melatonin production."
        },
        {
          id: "how-do-glasses-work",
          question: "How do blue light blocking glasses work?",
          answer: "Our amber-tinted lenses filter out 85% of harmful blue light wavelengths (400-490nm) while allowing other beneficial wavelengths to pass through. The amber tint specifically targets the wavelengths most responsible for eye strain and sleep disruption, providing relief without significantly affecting color perception."
        },
        {
          id: "sleep-benefits",
          question: "Do they really help with sleep?",
          answer: "Yes! Research shows that blue light exposure in the evening can suppress melatonin production by up to 50%. By wearing our glasses 2-3 hours before bedtime, you help maintain your natural circadian rhythm. Many customers report falling asleep faster and experiencing better sleep quality within the first week of use."
        },
        {
          id: "daytime-use",
          question: "Can I use them during the day?",
          answer: "Absolutely! Our glasses are designed for all-day comfort. While some blue light exposure during the day is beneficial for alertness, the filtered light from our lenses still provides these benefits while reducing eye strain from screens. Many customers wear them throughout their workday for maximum comfort."
        },
        {
          id: "color-perception",
          question: "Will they affect how I see colors?",
          answer: "The amber tint provides a slight warm shift that most users adapt to within 24-48 hours. While there is a subtle change in color perception, it's designed to be minimal and non-intrusive. For most tasks, including professional design work, the difference is negligible compared to the comfort benefits gained."
        }
      ]
    },
    {
      category: "Ordering & Shipping",
      items: [
        {
          id: "shipping-time",
          question: "How long does shipping take?",
          answer: "We offer free shipping within Cambodia. Orders typically arrive in 2-3 business days in Phnom Penh and 3-5 business days in other provinces. You'll receive a tracking number once your order ships so you can monitor its progress."
        },
        {
          id: "shipping-cost",
          question: "Is shipping really free?",
          answer: "Yes! We provide completely free shipping to all provinces in Cambodia. There are no minimum order requirements or hidden fees. We believe everyone should have access to eye protection without additional shipping costs."
        },
        {
          id: "payment-methods",
          question: "What payment methods do you accept?",
          answer: "Currently, we accept cash on delivery (COD) for all orders within Cambodia. We'll contact you within 24 hours of placing your order to confirm details and arrange delivery. Online payment options are coming soon!"
        },
        {
          id: "order-tracking",
          question: "How can I track my order?",
          answer: "After placing your order, we'll contact you with a confirmation and provide tracking information. You can also call or WhatsApp us at +855 12 345 678 for real-time updates on your order status."
        }
      ]
    },
    {
      category: "Product Care & Returns",
      items: [
        {
          id: "returns-policy",
          question: "What's your return policy?",
          answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your EyeKhel glasses, you can return them for a full refund within 30 days of purchase. The glasses should be in original condition with all included accessories."
        },
        {
          id: "cleaning-care",
          question: "How do I clean and care for my glasses?",
          answer: "Clean your glasses daily with the included microfiber cloth. For deeper cleaning, use lukewarm water and a small amount of dish soap, then dry with the microfiber cloth. Avoid paper towels or clothing which can scratch the lenses. Store in the provided hard case when not in use."
        },
        {
          id: "durability",
          question: "How long will my glasses last?",
          answer: "With proper care, your EyeKhel glasses should last for years. The frames are made from high-quality materials, and the lens coatings are designed to withstand daily use. We also offer a 1-year warranty against manufacturing defects."
        },
        {
          id: "prescription-lenses",
          question: "Can I get prescription lenses?",
          answer: "Currently, we only offer our blue light blocking lenses in non-prescription form. However, many customers wear contact lenses with our glasses, or you can take our frames to a local optometrist to have prescription lenses made with blue light filtering technology."
        }
      ]
    },
    {
      category: "Health & Safety",
      items: [
        {
          id: "side-effects",
          question: "Are there any side effects?",
          answer: "Our glasses are completely safe for daily use. Some users may experience a brief adjustment period (1-2 days) as their eyes adapt to the amber tint. This is normal and temporary. There are no known negative side effects from wearing blue light blocking glasses."
        },
        {
          id: "children-safe",
          question: "Are they safe for children?",
          answer: "Yes, our glasses are safe for children and teens. However, our current frames are designed for adult sizing. We're working on youth sizes for the future. If you have concerns about your child's screen time and eye health, consult with a pediatric optometrist."
        },
        {
          id: "medical-conditions",
          question: "Can I wear them with existing eye conditions?",
          answer: "While our glasses are generally safe for people with common eye conditions, we recommend consulting with your eye care professional before use if you have any specific medical conditions or concerns. They can provide personalized advice based on your situation."
        },
        {
          id: "all-day-wear",
          question: "Is it safe to wear them all day?",
          answer: "Yes, our glasses are designed for comfortable all-day wear. Many customers wear them throughout their entire workday and into the evening. The materials are lightweight and breathable, making them suitable for extended use."
        }
      ]
    }
  ]

  return (
    <div className="container py-16 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about EyeKhel blue light blocking glasses.
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-12">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h2 className="text-2xl font-bold border-b pb-2">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((item) => {
                const isExpanded = expandedItems.has(item.id)
                return (
                  <Card key={item.id} className="border-2">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-muted/50 transition-colors"
                        onClick={() => toggleItem(item.id)}
                      >
                        <h3 className="font-semibold text-lg">{item.question}</h3>
                        <div className="flex-shrink-0 mt-1">
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-muted/30 rounded-2xl p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">Still Have Questions?</h2>
        <p className="text-muted-foreground">
          Our customer service team is here to help! Reach out through any of these channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-1">
            <p className="font-medium">📧 Email</p>
            <p className="text-muted-foreground">support@eyekhel.com</p>
          </div>
          <div className="space-y-1">
            <p className="font-medium">📱 WhatsApp</p>
            <p className="text-muted-foreground">+855 12 345 678</p>
          </div>
          <div className="space-y-1">
            <p className="font-medium">🕐 Hours</p>
            <p className="text-muted-foreground">Mon-Sat: 9AM-6PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}