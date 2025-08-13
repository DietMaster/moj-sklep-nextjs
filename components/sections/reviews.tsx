"use client"

import { Star } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Reviews() {
  const { t } = useI18n()

  const reviews = [
    {
      name: "Sophea Chen",
      location: "Phnom Penh",
      rating: 5,
      text: "These glasses completely changed my work life. No more eye strain after long coding sessions!",
      role: "Software Developer"
    },
    {
      name: "Virak Nou",
      location: "Siem Reap", 
      rating: 5,
      text: "I sleep so much better now. The amber tint is perfect - not too strong but very effective.",
      role: "Graphic Designer"
    },
    {
      name: "Malis Sou",
      location: "Battambang",
      rating: 5,
      text: "Great quality frames and fast delivery. Customer service was excellent too.",
      role: "Online Teacher"
    },
    {
      name: "Dara Kim",
      location: "Phnom Penh",
      rating: 4,
      text: "Very comfortable to wear all day. My headaches have reduced significantly.",
      role: "Marketing Manager"
    },
    {
      name: "Rith Lim",
      location: "Phnom Penh", 
      rating: 5,
      text: "Stylish and functional. I get compliments on them regularly!",
      role: "Photographer"
    },
    {
      name: "Sreypov Tan",
      location: "Siem Reap",
      rating: 5,
      text: "Worth every dollar. My productivity has increased since I can work longer without eye fatigue.",
      role: "Content Creator"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.reviews.title}
          </h2>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">{t.reviews.rating}</span>
            </div>
            <p className="text-muted-foreground">{t.reviews.total_reviews}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < review.rating 
                          ? "fill-amber-400 text-amber-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  "{review.text}"
                </p>
                
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {review.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {review.location}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}