"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Frame } from "@/lib/products"

interface ProductGalleryProps {
  frame: Frame
}

export function ProductGallery({ frame }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === frame.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? frame.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden group">
        <Image
          src={frame.images[currentImage] || "/images/placeholder-glasses.jpg"}
          alt={`${frame.name} - View ${currentImage + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Navigation Arrows */}
        {frame.images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline" 
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {frame.images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {frame.images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {frame.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {frame.images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden border-2 transition-colors ${
                currentImage === index ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image || "/images/placeholder-glasses.jpg"}
                alt={`${frame.name} thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}