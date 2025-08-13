"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { useCartStore } from "@/lib/cart-store"
import { Frame } from "@/lib/products"

interface AddToCartButtonProps {
  frame: Frame
}

export function AddToCartButton({ frame }: AddToCartButtonProps) {
  const { t } = useI18n()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = async () => {
    if (!frame.inStock) return

    setIsAdding(true)
    
    // Simulate a brief loading state
    await new Promise(resolve => setTimeout(resolve, 300))
    
    addItem(frame, quantity)
    setIsAdding(false)
    
    // Reset quantity to 1 after adding
    setQuantity(1)
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  if (!frame.inStock) {
    return (
      <Button 
        size="lg" 
        disabled 
        className="w-full rounded-2xl text-lg py-6"
      >
        Out of Stock
      </Button>
    )
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm font-medium text-muted-foreground">Quantity:</span>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="h-8 w-8 rounded-full"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={incrementQuantity}
            className="h-8 w-8 rounded-full"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button 
        size="lg" 
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full rounded-2xl text-lg py-6"
      >
        {isAdding ? (
          <>
            <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Adding...
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5 mr-2" />
            {t.common.add_to_cart}
          </>
        )}
      </Button>
    </div>
  )
}