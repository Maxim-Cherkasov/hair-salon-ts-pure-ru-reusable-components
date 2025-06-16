"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

interface CarouselImage {
  url: string
  title: string
  description: string
  alt: string
}

const carouselImages: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2070&q=80",
    title: "Междугородние Перевозки",
    description: "Доставка грузов по всей России с гарантией сроков и сохранности",
    alt: "Междугородние грузоперевозки"
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2070&q=80",
    title: "Городские Доставки",
    description: "Быстрая доставка по городу с возможностью срочной подачи транспорта",
    alt: "Городские грузоперевозки"
  },
  {
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=2070&q=80",
    title: "Крупногабаритные Грузы",
    description: "Специализированный транспорт для перевозки негабаритных и тяжелых грузов",
    alt: "Перевозка крупногабаритных грузов"
  },
  {
    url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=2070&q=80",
    title: "Складские Услуги",
    description: "Современные складские комплексы с системой контроля температуры",
    alt: "Складские услуги"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=2070&q=80",
    title: "Экспресс Доставка",
    description: "Срочная доставка грузов в кратчайшие сроки по всей стране",
    alt: "Экспресс доставка грузов"
  },
  {
    url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2070&q=80",
    title: "Международные Перевозки",
    description: "Доставка грузов в страны СНГ и Европы с полным документооборотом",
    alt: "Международные грузоперевозки"
  },
  {
    url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=2070&q=80",
    title: "Рефрижераторные Перевозки",
    description: "Транспортировка скоропортящихся товаров с контролем температуры",
    alt: "Рефрижераторные перевозки"
  },
  {
    url: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=2070&q=80",
    title: "Логистические Решения",
    description: "Комплексные логистические услуги для вашего бизнеса",
    alt: "Логистические решения"
  }
]

interface CarouselSlideProps {
  image: CarouselImage
}

function CarouselSlide({ image }: CarouselSlideProps) {
  return (
    <div className="relative h-[80vh] rounded-3xl overflow-hidden group">
      <img 
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
            {image.title}
          </h3>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed transform transition-all duration-500 delay-100 group-hover:translate-y-[-4px] group-hover:text-white">
            {image.description}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-6 rounded-full transform transition-all duration-500 delay-200 group-hover:w-24 group-hover:shadow-glow" />
        </div>
      </div>
    </div>
  )
}

export function HeroCarousel() {
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

    const element = document.getElementById('hero-carousel')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero-carousel" className="relative mt-16 mb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
      
      <div className={`container mx-auto px-4 max-w-7xl flex items-center min-h-[80vh] transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <Carousel className="w-full" opts={{ loop: true, align: "center" }}>
          <CarouselContent className="-ml-4">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4">
                <CarouselSlide image={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 -translate-y-1/2 glass-effect glass-effect-dark hover:bg-white/30 dark:hover:bg-black/30 border-white/30 dark:border-white/20 shadow-xl hover:shadow-glow-hover transition-all duration-300" />
          <CarouselNext className="right-8 -translate-y-1/2 glass-effect glass-effect-dark hover:bg-white/30 dark:hover:bg-black/30 border-white/30 dark:border-white/20 shadow-xl hover:shadow-glow-hover transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  )
}