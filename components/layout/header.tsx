"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale, setLocale } = useI18n()
  const totalItems = useCartStore((state) => state.getTotalItems())

  const navigation = [
    { href: "/shop", label: t.nav.shop },
    { href: "/benefits", label: t.nav.benefits },
    { href: "/science", label: t.nav.science },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "km" : "en")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">EK</span>
          </div>
          <span className="font-bold text-xl">EyeKhel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs"
          >
            <Globe className="h-4 w-4 mr-1" />
            {locale === "en" ? "ខ្មែរ" : "EN"}
          </Button>
          
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-background">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-xs"
              >
                <Globe className="h-4 w-4 mr-1" />
                {locale === "en" ? "ខ្មែរ" : "EN"}
              </Button>
              
              <Link href="/cart">
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}