"use client"

import { useState, useMemo } from "react"
import { useI18n } from "@/lib/i18n"
import { filterFrames, products } from "@/lib/products"
import { ProductFilters } from "@/components/shop/product-filters"
import { ProductGrid } from "@/components/shop/product-grid"

export default function ShopPage() {
  const { t } = useI18n()
  const [filters, setFilters] = useState({
    colors: [] as string[],
    shapes: [] as string[],
    inStock: false
  })

  const filteredFrames = useMemo(() => {
    return filterFrames({
      colors: filters.colors.length > 0 ? filters.colors : undefined,
      shapes: filters.shapes.length > 0 ? filters.shapes : undefined,
      inStock: filters.inStock || undefined
    })
  }, [filters])

  return (
    <div className="container py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t.nav.shop}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.products.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductFilters onFiltersChange={setFilters} />
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredFrames.length} of {products.frames.length} frames
                </p>
              </div>
              
              <ProductGrid frames={filteredFrames} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}