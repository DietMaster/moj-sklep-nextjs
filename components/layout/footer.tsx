"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EK</span>
              </div>
              <span className="font-bold text-xl">EyeKhel</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.shop}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.shop}
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.benefits}
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.science}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.reviews}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.shipping_policy}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.return_policy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 EyeKhel. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground max-w-md text-center md:text-right">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}