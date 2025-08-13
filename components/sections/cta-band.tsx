"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function CtaBand() {
  const { t } = useI18n()

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-amber-50 to-primary/10 border-y">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {t.cta_band.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t.cta_band.subtitle}
          </p>
          
          <div className="pt-6">
            <Link href="/shop">
              <Button size="lg" className="text-lg px-12 py-6 rounded-2xl">
                {t.cta_band.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}