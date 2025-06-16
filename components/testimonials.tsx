"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  content: string
  author: string
  role: string
  date: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Отличная транспортная компания! Груз доставили точно в срок, водитель был вежливым и профессиональным. Цены адекватные, качество обслуживания на высоте. Обязательно обратимся снова.",
    author: "Алексей Петров",
    role: "Директор ООО 'Стройматериалы'",
    date: "15 марта, 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "Пользуемся услугами уже второй год. Никогда не подводили! Особенно нравится возможность отслеживать груз онлайн. Менеджеры всегда на связи, решают любые вопросы оперативно.",
    author: "Мария Сидорова",
    role: "Логист ТД 'Альфа'",
    date: "22 марта, 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "Перевозили оборудование из Москвы в Екатеринбург. Все прошло идеально - груз упаковали, довезли без повреждений, разгрузили аккуратно. Рекомендую как надежного партнера.",
    author: "Дмитрий Козлов",
    role: "Снабженец 'ТехПром'",
    date: "5 апреля, 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5
  },
  {
    id: 4,
    content: "Сотрудничаем уже полгода. Очень довольны сервисом! Особенно выручают срочные заказы - всегда находят возможность подать машину быстро. Цены конкурентные, сервис отличный.",
    author: "Елена Волкова",
    role: "Менеджер 'Торговый Дом'",
    date: "12 апреля, 2024",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5
  }
]

interface StarRatingProps {
  rating: number
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} из 5 звезд`}>
      {[...Array(rating)].map((_, i) => (
        <Star 
          key={i} 
          className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm animate-scale-in" 
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div className="relative group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <Card className="relative p-8 glass-effect glass-effect-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Quote className="w-12 h-12 text-blue-500" />
        </div>
        
        <StarRating rating={testimonial.rating} />
        
        <p className="mt-6 mb-8 text-muted-foreground leading-relaxed text-lg relative z-10">
          {testimonial.content}
        </p>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <Avatar className="relative h-14 w-14 border-2 border-white/20 shadow-lg">
              <AvatarImage 
                src={testimonial.avatar} 
                alt={testimonial.author} 
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                {testimonial.author[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-lg">{testimonial.author}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>

          <time className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
            {testimonial.date}
          </time>
        </div>
      </Card>
    </div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(false)
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-purple-50/30 dark:from-purple-950/10 dark:via-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className={`container mx-auto px-4 max-w-7xl relative transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text gradient-text-dark">
            Отзывы Клиентов
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Что говорят наши партнеры о качестве наших услуг
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto mt-6 rounded-full shadow-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="h-12 px-8 border-2 glass-effect glass-effect-dark hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-glow-hover transition-all duration-300 group"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls="testimonials-grid"
          >
            <span className="group-hover:scale-105 transition-transform duration-200">
              {showAll ? "Показать Меньше" : "Смотреть Все Отзывы"}
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}