"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import en from "@/i18n/en.json"
import km from "@/i18n/km.json"

export type Locale = "en" | "km"
export type Translations = typeof en

const translations: Record<Locale, Translations> = { en, km }

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "en" || savedLocale === "km")) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function getNestedTranslation(obj: any, path: string) {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}