"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <div className="relative h-[80vh] rounded-2xl overflow-hidden">
      <img 
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {image.title}
        </h3>
        <p className="text-zinc-200 text-sm md:text-base max-w-2xl">
          {image.description}
        </p>
      </div>
    </div>
  )
}

export function HeroCarousel() {
  return (
    <section className="relative mt-16 mb-24">
      <div className="container mx-auto px-4 max-w-7xl flex items-center min-h-[80vh]">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <CarouselSlide image={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 -translate-y-1/2" />
          <CarouselNext className="right-8 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  )
}