"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export default function ThankYouPage() {
  const { t } = useI18n()
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order")

  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <CheckCircle className="h-16 w-16 mx-auto text-green-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            {t.thank_you.title}
          </h1>
        </div>

        {orderId && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">{t.thank_you.order_number}:</p>
                <p className="font-mono font-semibold text-lg">{orderId}</p>
              </div>
              
              <p className="text-muted-foreground">
                {t.thank_you.confirmation}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{t.thank_you.questions}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <Link href="/shop">
            <Button size="lg" className="rounded-2xl">
              {t.thank_you.continue_shopping}
            </Button>
          </Link>
          
          <div className="text-sm text-muted-foreground">
            <p>Follow up on your order:</p>
            <p>📧 Email: orders@eyekhel.com</p>
            <p>📱 WhatsApp: +855 12 345 678</p>
          </div>
        </div>
      </div>
    </div>
  )
}