import { MetadataRoute } from 'next'
import { products } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eyekhel.com'

  // Static pages
  const staticPages = [
    '',
    '/shop',
    '/benefits', 
    '/science',
    '/reviews',
    '/faq',
    '/contact',
    '/cart',
    '/checkout',
    '/thank-you',
  ]

  // Product pages
  const productPages = products.frames.map((frame) => `/product/${frame.slug}`)

  const allPages = [...staticPages, ...productPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: page === '' ? 1 : page.startsWith('/product') ? 0.8 : 0.7,
  }))
}