"use client"

import { Monitor, Eye, Shield } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const { t } = useI18n()

  const steps = [
    {
      icon: Monitor,
      title: t.how_it_works.step1.title,
      description: t.how_it_works.step1.description,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Eye,
      title: t.how_it_works.step2.title,
      description: t.how_it_works.step2.description,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Shield,
      title: t.how_it_works.step3.title,
      description: t.how_it_works.step3.description,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.how_it_works.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} mx-auto flex items-center justify-center`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}