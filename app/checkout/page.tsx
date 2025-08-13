"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/utils"
import { checkoutSchema, type CheckoutFormData, cambodianProvinces } from "@/lib/validation"

export default function CheckoutPage() {
  const { t } = useI18n()
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })

  // Redirect to cart if empty
  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true)
    
    try {
      const orderData = {
        ...data,
        items,
        total: getTotalPrice(),
        orderDate: new Date().toISOString(),
        orderId: `EK-${Date.now()}`,
      }

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (response.ok) {
        const result = await response.json()
        clearCart()
        router.push(`/thank-you?order=${result.orderId}`)
      } else {
        throw new Error("Failed to submit order")
      }
    } catch (error) {
      console.error("Error submitting order:", error)
      alert("There was an error processing your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t.checkout.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.checkout.contact}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input
                      placeholder={t.checkout.name}
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder={t.checkout.phone}
                      {...register("phone")}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder={t.checkout.email}
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.checkout.shipping_address}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input
                      placeholder={t.checkout.address}
                      {...register("address")}
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder={t.checkout.city}
                        {...register("city")}
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <Select onValueChange={(value) => setValue("province", value)}>
                        <SelectTrigger className={errors.province ? "border-red-500" : ""}>
                          <SelectValue placeholder={t.checkout.province} />
                        </SelectTrigger>
                        <SelectContent>
                          {cambodianProvinces.map((province) => (
                            <SelectItem key={province.value} value={province.value}>
                              {province.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.province && (
                        <p className="text-red-500 text-sm mt-1">{errors.province.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder={t.checkout.postal_code}
                      {...register("postalCode")}
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder={t.checkout.notes}
                      {...register("notes")}
                      className="flex min-h-[80px] w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-2xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.checkout.processing : t.checkout.place_order}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24">
            <Card>
              <CardHeader>
                <CardTitle>{t.checkout.order_summary}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.frame.images[0] || "/images/placeholder-glasses.jpg"}
                        alt={item.frame.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium text-sm">{item.frame.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">
                        {formatPrice(item.frame.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}

                <hr />
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}