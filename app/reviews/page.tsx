"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"

export default function ReviewsPage() {
  const { t } = useI18n()

  const detailedReviews = [
    {
      id: 1,
      name: "Sophea Chen",
      location: "Phnom Penh",
      role: "Software Developer",
      rating: 5,
      date: "2024-11-15",
      title: "Game changer for my programming work",
      review: "I spend 10+ hours daily coding, and these glasses have been a lifesaver. The eye strain that used to plague me by afternoon is completely gone. The amber tint took a day to get used to, but now I barely notice it. My sleep has improved dramatically since I started wearing them in the evening. Worth every riel!",
      helpful: 24,
      verified: true,
    },
    {
      id: 2,
      name: "Virak Nou",
      location: "Siem Reap",
      role: "Graphic Designer",
      rating: 5,
      date: "2024-11-10",
      title: "Perfect for design work",
      review: "As a designer, I was worried about color accuracy, but these glasses maintain excellent color perception while eliminating the harsh glare from my monitors. The build quality is impressive - they feel premium and durable. Customer service was also excellent when I had questions about sizing.",
      helpful: 18,
      verified: true,
    },
    {
      id: 3,
      name: "Malis Sou",
      location: "Battambang",
      role: "Online Teacher",
      rating: 5,
      date: "2024-11-08",
      title: "Essential for online teaching",
      review: "Teaching online means I'm constantly looking at screens during lessons. These glasses have eliminated the headaches I used to get after long teaching days. My students haven't noticed any difference in my appearance, which was important to me. The shipping to Battambang was fast and secure.",
      helpful: 15,
      verified: true,
    },
    {
      id: 4,
      name: "Dara Kim",
      location: "Phnom Penh",
      role: "Marketing Manager",
      rating: 4,
      date: "2024-11-05",
      title: "Noticeable improvement in comfort",
      review: "I was skeptical about blue light glasses, but decided to try them due to increasing eye strain from long work hours. The difference is real - my eyes feel much more comfortable throughout the day. The only minor issue is that they can feel slightly heavy after many hours, but the comfort improvement outweighs this.",
      helpful: 12,
      verified: true,
    },
    {
      id: 5,
      name: "Rith Lim",
      location: "Phnom Penh",
      role: "Photographer",
      rating: 5,
      date: "2024-11-02",
      title: "Stylish and functional",
      review: "I needed glasses that looked good for client meetings but also protected my eyes during long editing sessions. These fit the bill perfectly. The classic black frame is professional, and the blue light protection is very effective. Several clients have complimented the style.",
      helpful: 21,
      verified: true,
    },
    {
      id: 6,
      name: "Sreypov Tan",
      location: "Siem Reap",
      role: "Content Creator",
      rating: 5,
      date: "2024-10-28",
      title: "Boosted my productivity",
      review: "Creating content means hours of screen time for editing and planning. Since wearing these glasses, I can work longer without fatigue, and my content quality has improved because I'm not constantly dealing with tired eyes. The investment has already paid for itself in increased productivity.",
      helpful: 19,
      verified: true,
    },
    {
      id: 7,
      name: "Pisach Hor",
      location: "Phnom Penh",
      role: "Data Analyst",
      rating: 5,
      date: "2024-10-25",
      title: "Perfect for data work",
      review: "Working with spreadsheets and dashboards all day was causing serious eye strain. These glasses have made a huge difference. The clarity is excellent, and I no longer get the burning sensation in my eyes by the end of the day. Highly recommend for anyone in a data-heavy role.",
      helpful: 13,
      verified: true,
    },
    {
      id: 8,
      name: "Channary Meas",
      location: "Kampong Cham",
      role: "Student",
      rating: 5,
      date: "2024-10-20",
      title: "Essential for online studies",
      review: "As a university student taking online courses, I spend countless hours on my laptop. These glasses have eliminated the headaches and made studying much more comfortable. The price is very reasonable for students, and the quality exceeds expectations. My grades have even improved since I can study for longer periods!",
      helpful: 17,
      verified: true,
    },
    {
      id: 9,
      name: "Sovan Ly",
      location: "Phnom Penh",
      role: "Financial Advisor",
      rating: 4,
      date: "2024-10-18",
      title: "Good investment for eye health",
      review: "I spend most of my day reviewing financial data on multiple monitors. The eye strain was affecting my work quality. These glasses have significantly reduced the strain, though I wish they came in more frame styles. The amber tint is subtle enough for professional settings.",
      helpful: 9,
      verified: true,
    },
    {
      id: 10,
      name: "Raksmey Chhorn",
      location: "Siem Reap",
      role: "Web Developer",
      rating: 5,
      date: "2024-10-15",
      title: "Must-have for developers",
      review: "Coding late into the night was ruining my sleep schedule. These glasses have been a game-changer - I can work evening hours without affecting my ability to fall asleep. The build quality is excellent, and they're comfortable for all-day wear. Every developer should have a pair.",
      helpful: 26,
      verified: true,
    },
  ]

  const stats = {
    totalReviews: 1247,
    averageRating: 4.8,
    ratingDistribution: {
      5: 78,
      4: 18,
      3: 3,
      2: 1,
      1: 0,
    }
  }

  const renderStars = (rating: number, size = "h-4 w-4") => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`${size} ${
              i < rating 
                ? "fill-amber-400 text-amber-400" 
                : "text-gray-300"
            }`} 
          />
        ))}
      </div>
    )
  }

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{t.reviews.title}</h1>
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-4">
            {renderStars(5, "h-6 w-6")}
            <span className="text-2xl font-bold">{stats.averageRating}</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Based on {stats.totalReviews.toLocaleString()} verified reviews
          </p>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Rating Distribution</h2>
            <div className="space-y-2">
              {Object.entries(stats.ratingDistribution).reverse().map(([rating, percentage]) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-sm w-8">{rating}★</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-amber-400 h-2 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="grid gap-6">
          {detailedReviews.map((review) => (
            <Card key={review.id} className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{review.name}</h3>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {review.role}
                      </Badge>
                      <span>•</span>
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  {renderStars(review.rating)}
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">{review.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    <Quote className="h-4 w-4 inline mr-1 opacity-50" />
                    {review.review}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-xs text-muted-foreground">
                    {review.helpful} people found this helpful
                  </span>
                  <div className="flex gap-2">
                    <button className="text-xs text-muted-foreground hover:text-foreground">
                      Helpful
                    </button>
                    <button className="text-xs text-muted-foreground hover:text-foreground">
                      Report
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Highlights */}
      <div className="bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Quote className="h-8 w-8 mx-auto text-primary" />
              <p className="italic">"Game changer for my programming work"</p>
              <p className="text-sm text-muted-foreground">- Software Developer</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Quote className="h-8 w-8 mx-auto text-primary" />
              <p className="italic">"Boosted my productivity significantly"</p>
              <p className="text-sm text-muted-foreground">- Content Creator</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Quote className="h-8 w-8 mx-auto text-primary" />
              <p className="italic">"Essential for online studies"</p>
              <p className="text-sm text-muted-foreground">- University Student</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}