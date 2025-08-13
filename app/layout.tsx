import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EyeKhel - Blue Light Blocking Glasses for Cambodia",
  description: "Premium blue-light blocking glasses designed for Cambodia's digital professionals. Reduce eye strain, improve sleep, and boost productivity.",
  keywords: "blue light glasses, eye strain, digital eye protection, Cambodia, Phnom Penh, computer glasses",
  authors: [{ name: "EyeKhel" }],
  creator: "EyeKhel",
  metadataBase: new URL("https://eyekhel.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "km_KH",
    url: "https://eyekhel.com",
    title: "EyeKhel - Blue Light Blocking Glasses for Cambodia",
    description: "Premium blue-light blocking glasses designed for Cambodia's digital professionals. Reduce eye strain, improve sleep, and boost productivity.",
    siteName: "EyeKhel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EyeKhel Blue Light Blocking Glasses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeKhel - Blue Light Blocking Glasses for Cambodia",
    description: "Premium blue-light blocking glasses designed for Cambodia's digital professionals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}