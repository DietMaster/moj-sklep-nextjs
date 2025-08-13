"use client"

import { useI18n } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"

export function TrustedBy() {
  const { t } = useI18n()

  const locations = [
    { name: t.trusted.phnom_penh, count: "2,400+" },
    { name: t.trusted.siem_reap, count: "800+" },
    { name: t.trusted.battambang, count: "600+" },
  ]

  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="container">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">
            {t.trusted.title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {locations.map((location) => (
              <div key={location.name} className="text-center space-y-2">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {location.count}
                </Badge>
                <p className="text-sm text-muted-foreground font-medium">
                  {location.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}