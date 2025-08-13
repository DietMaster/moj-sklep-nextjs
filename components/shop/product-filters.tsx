"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { getAvailableColors, getAvailableShapes } from "@/lib/products"

interface ProductFiltersProps {
  onFiltersChange: (filters: {
    colors: string[]
    shapes: string[]
    inStock: boolean
  }) => void
}

export function ProductFilters({ onFiltersChange }: ProductFiltersProps) {
  const { t } = useI18n()
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedShapes, setSelectedShapes] = useState<string[]>([])
  const [showInStock, setShowInStock] = useState(false)

  const availableColors = getAvailableColors()
  const availableShapes = getAvailableShapes()

  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color]
    
    setSelectedColors(newColors)
    updateFilters(newColors, selectedShapes, showInStock)
  }

  const toggleShape = (shape: string) => {
    const newShapes = selectedShapes.includes(shape)
      ? selectedShapes.filter(s => s !== shape)
      : [...selectedShapes, shape]
    
    setSelectedShapes(newShapes)
    updateFilters(selectedColors, newShapes, showInStock)
  }

  const toggleInStock = () => {
    const newShowInStock = !showInStock
    setShowInStock(newShowInStock)
    updateFilters(selectedColors, selectedShapes, newShowInStock)
  }

  const updateFilters = (colors: string[], shapes: string[], inStock: boolean) => {
    onFiltersChange({
      colors: colors.length > 0 ? colors : [],
      shapes: shapes.length > 0 ? shapes : [],
      inStock
    })
  }

  const clearFilters = () => {
    setSelectedColors([])
    setSelectedShapes([])
    setShowInStock(false)
    onFiltersChange({ colors: [], shapes: [], inStock: false })
  }

  const hasFilters = selectedColors.length > 0 || selectedShapes.length > 0 || showInStock

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Colors */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Frame Color
          </h4>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <Badge
                key={color}
                variant={selectedColors.includes(color) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => toggleColor(color)}
              >
                {color}
              </Badge>
            ))}
          </div>
        </div>

        {/* Shapes */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Frame Shape
          </h4>
          <div className="flex flex-wrap gap-2">
            {availableShapes.map((shape) => (
              <Badge
                key={shape}
                variant={selectedShapes.includes(shape) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors capitalize"
                onClick={() => toggleShape(shape)}
              >
                {shape}
              </Badge>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Availability
          </h4>
          <div>
            <Badge
              variant={showInStock ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={toggleInStock}
            >
              In Stock Only
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}