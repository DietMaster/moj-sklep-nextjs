"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export default function SciencePage() {
  const { t } = useI18n()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const researchSections = [
    {
      id: "blue-light-basics",
      title: "Understanding Blue Light",
      summary: "Blue light is high-energy visible light with wavelengths between 400-490nm. It's naturally present in sunlight but is also emitted by digital screens and LED lighting.",
      details: `Blue light is part of the visible light spectrum and has the shortest wavelengths and highest energy. While some blue light exposure during the day is beneficial for maintaining circadian rhythms and alertness, excessive exposure, especially in the evening, can have negative effects.

The main sources of blue light include:
• The sun (largest source)
• Digital screens (computers, phones, tablets)
• LED and fluorescent lighting
• Energy-efficient light bulbs

The concern arises from our increased screen time - the average person now spends 7+ hours daily looking at screens, exposing their eyes to concentrated blue light at close distances for extended periods.`,
    },
    {
      id: "eye-strain",
      title: "Digital Eye Strain Research",
      summary: "Studies show that 50-90% of computer users experience digital eye strain, with symptoms including dry eyes, headaches, and blurred vision.",
      details: `Computer Vision Syndrome (CVS), also known as Digital Eye Strain, is a group of eye and vision-related problems that result from prolonged computer, tablet, e-reader and cell phone use.

Research findings:
• A 2016 study found that 90% of people who use computers for 3+ hours daily experience some symptoms
• Blue light causes increased flickering and glare, making eyes work harder to maintain focus
• The average person blinks 1/3 less when looking at screens, leading to dry eyes
• Symptoms typically appear after just 2 hours of continuous screen use

The American Optometric Association recognizes CVS as a legitimate condition affecting millions worldwide.`,
    },
    {
      id: "sleep-disruption",
      title: "Circadian Rhythm & Sleep Impact", 
      summary: "Blue light exposure in the evening suppresses melatonin production by up to 50%, disrupting natural sleep patterns.",
      details: `Blue light's impact on sleep is well-documented in scientific literature. The mechanism involves:

1. **Melatonin Suppression**: Blue light signals the brain to stop producing melatonin, the hormone responsible for sleepiness
2. **Circadian Rhythm Disruption**: Evening blue light exposure shifts our internal clock, making it harder to fall asleep
3. **Sleep Quality Reduction**: Even when sleep occurs, blue light exposure can reduce REM sleep quality

Key research findings:
• Harvard study showed blue light suppressed melatonin for about twice as long as green light
• Exposure to blue light 3 hours before bedtime can shift circadian rhythms by 3 hours
• Using blue light filters 2-3 hours before bed can improve sleep onset by 23 minutes on average`,
    },
    {
      id: "amber-lenses",
      title: "Amber Lens Effectiveness",
      summary: "Amber-tinted lenses have been shown to effectively block blue light while maintaining color perception and visual comfort.",
      details: `Research specifically on amber-tinted lenses demonstrates their effectiveness:

**Blue Light Blocking**: Amber lenses can block 85-99% of blue light depending on the tint intensity. Our lenses block 85% while maintaining natural color perception.

**Sleep Improvement Studies**:
• 2009 study: Participants wearing amber glasses 3 hours before bedtime showed improved sleep quality
• 2013 research: Amber lenses improved sleep quality in insomniacs by 20%
• 2017 study: Office workers using amber glasses reported 38% less eye strain

**Visual Comfort**: Unlike clear blue light glasses, amber lenses provide noticeable relief because they block the wavelengths that cause the most strain (400-490nm range).

The amber tint is specifically chosen because it effectively filters harmful blue light while allowing other beneficial wavelengths to pass through.`,
    },
  ]

  const references = [
    {
      title: "The impact of computer use on eye health",
      authors: "Blehm, C., Vishnu, S., Khattak, A., et al.",
      journal: "Survey of Ophthalmology",
      year: "2005",
      url: "#",
    },
    {
      title: "Blue light exposure and sleep quality",
      authors: "Chang, A. M., Aeschbach, D., Duffy, J. F., et al.",
      journal: "Proceedings of the National Academy of Sciences",
      year: "2015",
      url: "#",
    },
    {
      title: "Amber lenses to block blue light and improve sleep",
      authors: "Burkhart, K., & Phelps, J. R.",
      journal: "Chronobiology International",
      year: "2009",
      url: "#",
    },
    {
      title: "Computer vision syndrome: A review",
      authors: "Portello, J. K., Rosenfield, M., Chu, C. A.",
      journal: "Contact Lens and Anterior Eye",
      year: "2013",
      url: "#",
    },
  ]

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{t.science.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t.science.description}
        </p>
      </div>

      {/* Research Sections */}
      <div className="space-y-6">
        {researchSections.map((section) => {
          const isExpanded = expandedSections.has(section.id)
          return (
            <Card key={section.id} className="border-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection(section.id)}
                    className="flex-shrink-0"
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{section.summary}</p>
                {isExpanded && (
                  <div className="pt-4 border-t">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {section.details.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Key Findings Summary */}
      <div className="bg-primary/5 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Research Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">90%</div>
            <div className="text-sm text-muted-foreground">of computer users experience eye strain</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">50%</div>
            <div className="text-sm text-muted-foreground">melatonin suppression from evening blue light</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">blue light blocked by amber lenses</div>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Scientific References</h2>
        <div className="grid gap-4">
          {references.map((ref, index) => (
            <Card key={index} className="border">
              <CardContent className="p-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-medium text-sm">{ref.title}</h3>
                    <p className="text-xs text-muted-foreground">{ref.authors}</p>
                    <p className="text-xs text-muted-foreground italic">
                      {ref.journal}, {ref.year}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="flex-shrink-0">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/50 rounded-2xl p-6">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Disclaimer:</strong> The information provided is for educational purposes only and should not be considered medical advice. While research supports the benefits of blue light filtering, individual results may vary. Consult with an eye care professional for personalized recommendations.
        </p>
      </div>
    </div>
  )
}