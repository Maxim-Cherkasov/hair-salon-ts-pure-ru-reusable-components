"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useEffect, useState } from "react"

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
    <div className="relative group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <Card className="relative border-0 rounded-2xl overflow-hidden glass-effect glass-effect-dark shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        <CardContent className="p-0">
          <AspectRatio ratio={1}>
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  )
}

export function GalleryGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('gallery')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} role="region" aria-label="Галерея нашего автопарка">
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