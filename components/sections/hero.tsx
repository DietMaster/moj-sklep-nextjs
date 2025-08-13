"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            {t.hero.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/shop">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl">
                {t.hero.cta}
              </Button>
            </Link>
            <Link href="/benefits">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl"
              >
                {t.hero.secondary_cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-96 h-96 bg-gradient-to-r from-amber-200/20 to-amber-400/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}