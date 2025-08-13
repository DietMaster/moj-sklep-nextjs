"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { formatPrice } from "@/lib/utils"
import { Frame } from "@/lib/products"

interface ProductGridProps {
  frames: Frame[]
}

export function ProductGrid({ frames }: ProductGridProps) {
  const { t } = useI18n()

  if (frames.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-muted-foreground text-lg">No frames match your current filters.</p>
        <p className="text-sm text-muted-foreground mt-2">Try adjusting your search criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {frames.map((frame) => (
        <Card key={frame.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-muted">
              <Image
                src={frame.images[0] || "/images/placeholder-glasses.jpg"}
                alt={frame.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {frame.originalPrice > frame.price && (
                  <Badge variant="destructive" className="bg-red-500">
                    {t.products.sale}
                  </Badge>
                )}
                {!frame.inStock && (
                  <Badge variant="secondary" className="bg-gray-500 text-white">
                    Sold Out
                  </Badge>
                )}
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
                {frame.originalPrice > frame.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(frame.originalPrice)}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1">
                {frame.colors.map((color) => (
                  <Badge key={color} variant="outline" className="text-xs">
                    {color}
                  </Badge>
                ))}
              </div>
              
              <Link href={`/product/${frame.slug}`} className="block">
                <Button 
                  className="w-full rounded-2xl" 
                  disabled={!frame.inStock}
                >
                  {frame.inStock ? t.products.choose : "Out of Stock"}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}