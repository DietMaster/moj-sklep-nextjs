"use client"

import { Hero } from "@/components/sections/hero"
import { TrustedBy } from "@/components/sections/trusted-by"
import { HowItWorks } from "@/components/sections/how-it-works"
import { BenefitsGrid } from "@/components/sections/benefits-grid"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { Reviews } from "@/components/sections/reviews"
import { CtaBand } from "@/components/sections/cta-band"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <BenefitsGrid />
      <ProductShowcase />
      <Reviews />
      <CtaBand />
    </>
  )
}