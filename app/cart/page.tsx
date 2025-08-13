"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { t } = useI18n()
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container py-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
          <h1 className="text-2xl font-bold">{t.cart.empty}</h1>
          <Link href="/shop">
            <Button size="lg" className="rounded-2xl">
              {t.cart.continue_shopping}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">{t.cart.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.frame.images[0] || "/images/placeholder-glasses.jpg"}
                        alt={item.frame.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.frame.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.frame.colors.join(", ")}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {formatPrice(item.frame.price * item.quantity)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-muted-foreground">
                              {formatPrice(item.frame.price)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Order Summary</h2>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.cart.subtotal}:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.cart.shipping}:</span>
                    <span className="text-green-600">{t.cart.free}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>{t.cart.total}:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Link href="/checkout" className="block">
                    <Button size="lg" className="w-full rounded-2xl">
                      {t.cart.checkout}
                    </Button>
                  </Link>
                  <Link href="/shop" className="block">
                    <Button variant="outline" size="lg" className="w-full rounded-2xl">
                      {t.cart.continue_shopping}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}