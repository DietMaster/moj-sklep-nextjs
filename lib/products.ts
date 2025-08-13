import productsData from "@/config/products.json"

export interface Lens {
  name: string
  tint: string
  features: string[]
  copy: string
  blueLight: {
    blockingPercentage: number
    wavelengthRange: string
  }
}

export interface Frame {
  id: string
  name: string
  slug: string
  price: number
  originalPrice: number
  description: string
  colors: string[]
  shapes: string[]
  materials: string[]
  sizes: {
    width: string
    bridge: string
    temple: string
  }
  weight: string
  images: string[]
  inStock: boolean
  featured: boolean
}

export interface ProductData {
  lens: Lens
  frames: Frame[]
}

export const products: ProductData = productsData as ProductData

export function getFrameBySlug(slug: string): Frame | undefined {
  return products.frames.find(frame => frame.slug === slug)
}

export function getFeaturedFrames(): Frame[] {
  return products.frames.filter(frame => frame.featured)
}

export function getAvailableColors(): string[] {
  return [...new Set(products.frames.flatMap(frame => frame.colors))]
}

export function getAvailableShapes(): string[] {
  return [...new Set(products.frames.flatMap(frame => frame.shapes))]
}

export function filterFrames(filters: {
  colors?: string[]
  shapes?: string[]
  inStock?: boolean
}): Frame[] {
  return products.frames.filter(frame => {
    if (filters.inStock && !frame.inStock) return false
    if (filters.colors && !filters.colors.some(color => frame.colors.includes(color))) return false
    if (filters.shapes && !filters.shapes.some(shape => frame.shapes.includes(shape))) return false
    return true
  })
}