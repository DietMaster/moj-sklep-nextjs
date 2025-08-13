import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getFrameBySlug, products } from "@/lib/products"
import { ProductDetailContent } from "./product-detail-content"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const frame = getFrameBySlug(params.slug)

  if (!frame) {
    return {
      title: "Product Not Found - EyeKhel",
    }
  }

  return {
    title: `${frame.name} - Blue Light Blocking Glasses | EyeKhel`,
    description: frame.description,
    openGraph: {
      title: `${frame.name} - EyeKhel`,
      description: frame.description,
      images: [
        {
          url: frame.images[0] || "/images/placeholder-glasses.jpg",
          width: 1200,
          height: 1200,
          alt: frame.name,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return products.frames.map((frame) => ({
    slug: frame.slug,
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const frame = getFrameBySlug(params.slug)

  if (!frame) {
    notFound()
  }

  return <ProductDetailContent frame={frame} />
}