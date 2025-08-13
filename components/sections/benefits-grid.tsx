"use client"

import { Eye, Zap, Moon, Sun, Shield } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"

export function BenefitsGrid() {
  const { t } = useI18n()

  const benefits = [
    {
      icon: Eye,
      title: t.benefits.eye_strain.title,
      description: t.benefits.eye_strain.description,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: t.benefits.headaches.title,
      description: t.benefits.headaches.description,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Moon,
      title: t.benefits.sleep.title,
      description: t.benefits.sleep.description,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Sun,
      title: t.benefits.glare.title,
      description: t.benefits.glare.description,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Shield,
      title: t.benefits.uv.title,
      description: t.benefits.uv.description,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.benefits.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-2xl ${benefit.bgColor} flex items-center justify-center`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}