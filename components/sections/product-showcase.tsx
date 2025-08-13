"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { getFeaturedFrames } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

export function ProductShowcase() {
  const { t } = useI18n()
  const featuredFrames = getFeaturedFrames()

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.products.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredFrames.map((frame) => (
            <Card key={frame.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-muted">
                  <Image
                    src={frame.images[0] || "/images/placeholder-glasses.jpg"}
                    alt={frame.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive" className="bg-red-500">
                      {t.products.sale}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{frame.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {frame.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(frame.price)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(frame.originalPrice)}
                    </span>
                  </div>
                  
                  <Link href={`/product/${frame.slug}`} className="block">
                    <Button className="w-full rounded-2xl">
                      {t.products.choose}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button variant="outline" size="lg" className="rounded-2xl px-8">
              {t.common.view_all}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}