"use client"

import Link from "next/link"
import { ArrowLeft, Eye, Zap, Moon, Sun, Shield, Package, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductGallery } from "@/components/product/product-gallery"
import { AddToCartButton } from "@/components/product/add-to-cart-button"
import { useI18n } from "@/lib/i18n"
import { formatPrice } from "@/lib/utils"
import { Frame, products } from "@/lib/products"

interface ProductDetailContentProps {
  frame: Frame
}

export function ProductDetailContent({ frame }: ProductDetailContentProps) {
  const { t } = useI18n()
  const lens = products.lens

  const features = [
    {
      icon: Eye,
      title: t.benefits.eye_strain.title,
      description: t.benefits.eye_strain.description,
    },
    {
      icon: Zap,
      title: t.benefits.headaches.title,
      description: t.benefits.headaches.description,
    },
    {
      icon: Moon,
      title: t.benefits.sleep.title,
      description: t.benefits.sleep.description,
    },
    {
      icon: Sun,
      title: t.benefits.glare.title,
      description: t.benefits.glare.description,
    },
    {
      icon: Shield,
      title: t.benefits.uv.title,
      description: t.benefits.uv.description,
    },
  ]

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          href="/shop" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div>
          <ProductGallery frame={frame} />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">{frame.name}</h1>
              <p className="text-lg text-muted-foreground">{frame.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(frame.price)}
                </span>
                {frame.originalPrice > frame.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(frame.originalPrice)}
                  </span>
                )}
              </div>
              
              {frame.originalPrice > frame.price && (
                <Badge variant="destructive" className="bg-red-500">
                  Save {formatPrice(frame.originalPrice - frame.price)}
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {frame.colors.map((color) => (
                <Badge key={color} variant="outline">
                  {color}
                </Badge>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <AddToCartButton frame={frame} />

          {/* Product Details */}
          <div className="space-y-6 pt-8 border-t">
            <div>
              <h3 className="font-semibold mb-4">Frame Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Width:</span>
                  <span className="ml-2 font-medium">{frame.sizes.width}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bridge:</span>
                  <span className="ml-2 font-medium">{frame.sizes.bridge}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Temple:</span>
                  <span className="ml-2 font-medium">{frame.sizes.temple}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="ml-2 font-medium">{frame.weight}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Lens Technology</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{lens.copy}</p>
                <div className="flex flex-wrap gap-2">
                  {lens.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          {t.benefits.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Shipping & Returns */}
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Package className="h-5 w-5 text-primary" />
                {t.in_the_box.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <p>• {t.in_the_box.glasses}</p>
                <p>• {t.in_the_box.case}</p>
                <p>• {t.in_the_box.cloth}</p>
                <p>• {t.in_the_box.guide}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Truck className="h-5 w-5 text-primary" />
                Shipping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <p>• {t.shipping.free_shipping}</p>
                <p>• {t.shipping.delivery}</p>
                <p>• Tracking provided</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <RotateCcw className="h-5 w-5 text-primary" />
                Returns
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <p>• {t.shipping.returns}</p>
                <p>• Free return shipping</p>
                <p>• Easy return process</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}