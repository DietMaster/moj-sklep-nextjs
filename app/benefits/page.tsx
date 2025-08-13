"use client"

import { Eye, Zap, Moon, Sun, Shield, Monitor, Clock, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export default function BenefitsPage() {
  const { t } = useI18n()

  const primaryBenefits = [
    {
      icon: Eye,
      title: t.benefits.eye_strain.title,
      description: t.benefits.eye_strain.description,
      details: "Digital eye strain affects up to 90% of people who spend 3+ hours daily on screens. Blue light causes the eye muscles to work harder, leading to fatigue, dryness, and discomfort.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: t.benefits.headaches.title,
      description: t.benefits.headaches.description,
      details: "Blue light exposure can trigger tension headaches by causing eye strain and disrupting natural sleep patterns. Our amber lenses help reduce this strain significantly.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Moon,
      title: t.benefits.sleep.title,
      description: t.benefits.sleep.description,
      details: "Blue light suppresses melatonin production by up to 50%. Our glasses help maintain natural circadian rhythms, especially when worn 2-3 hours before bedtime.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Sun,
      title: t.benefits.glare.title,
      description: t.benefits.glare.description,
      details: "Anti-reflective coating reduces harsh reflections from screens and overhead lighting, making it easier to focus on your work for extended periods.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Shield,
      title: t.benefits.uv.title,
      description: t.benefits.uv.description,
      details: "UV400 protection blocks 99.9% of harmful UVA and UVB rays, providing comprehensive eye protection both indoors and outdoors.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  const additionalBenefits = [
    {
      icon: Monitor,
      title: "Enhanced Productivity",
      description: "Work longer with less fatigue and maintain focus throughout the day.",
    },
    {
      icon: Clock,
      title: "Long-term Eye Health",
      description: "Protect against potential cumulative damage from prolonged screen exposure.",
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Better sleep leads to improved cognitive function and mental sharpness.",
    },
  ]

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{t.benefits.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how EyeKhel blue-light blocking glasses can transform your digital experience and overall well-being.
        </p>
      </div>

      {/* Primary Benefits */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Core Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryBenefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-4`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{benefit.description}</p>
                <p className="text-sm text-muted-foreground border-l-4 border-primary/20 pl-4">
                  {benefit.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Additional Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalBenefits.map((benefit, index) => (
            <Card key={index} className="text-center border-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-muted/50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">The Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Blue light filtered</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">50%</div>
            <div className="text-sm text-muted-foreground">Reduction in eye strain</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">30%</div>
            <div className="text-sm text-muted-foreground">Better sleep quality</div>
          </div>
        </div>
      </div>

      {/* Who Should Use */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Software Developers",
            "Graphic Designers", 
            "Online Teachers",
            "Content Creators",
            "Students",
            "Office Workers",
            "Gamers",
            "Remote Workers"
          ].map((profession) => (
            <Card key={profession} className="text-center p-4">
              <CardContent className="p-0">
                <p className="font-medium">{profession}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}