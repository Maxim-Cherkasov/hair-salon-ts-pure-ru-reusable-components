"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface GalleryImage {
  url: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    alt: "Современный грузовик для междугородних перевозок"
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Городской грузовик для доставки по городу"
  },
  {
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    alt: "Специализированный транспорт для негабаритных грузов"
  },
  {
    url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    alt: "Рефрижератор для перевозки скоропортящихся товаров"
  },
  {
    url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    alt: "Современный складской комплекс"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    alt: "Экспресс доставка малогабаритных грузов"
  }
]

interface GalleryItemProps {
  image: GalleryImage
  index: number
}

function GalleryItem({ image, index }: GalleryItemProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Card className="relative border-0 rounded-xl overflow-hidden bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
        <CardContent className="p-0">
          <AspectRatio ratio={1}>
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  )
}

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="region" aria-label="Галерея нашего автопарка">
      {galleryImages.map((image, index) => (
        <GalleryItem 
          key={image.url} 
          image={image} 
          index={index} 
        />
      ))}
    </div>
  )
}