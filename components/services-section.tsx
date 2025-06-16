"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Truck, MapPin, Package } from "lucide-react"

interface Service {
  name: string
}

interface ServiceType {
  title: string
  description: string
  image: string
  services: Service[]
  icon: typeof Truck | typeof MapPin | typeof Package
}

interface ServiceTypes {
  [key: string]: ServiceType
}

const serviceTypes: ServiceTypes = {
  city: {
    title: "Городские Перевозки",
    description: "Быстрая и надежная доставка грузов по городу. Современный автопарк различной грузоподъемности для решения любых транспортных задач в городских условиях.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: Truck,
    services: [
      { name: "Доставка до 1 тонны" },
      { name: "Грузовики до 5 тонн" },
      { name: "Переезды квартир и офисов" },
      { name: "Срочная подача транспорта" }
    ]
  },
  intercity: {
    title: "Междугородние Перевозки",
    description: "Профессиональная доставка грузов по всей России с гарантией сроков. Опытные водители и современное оборудование для дальних маршрутов.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    icon: MapPin,
    services: [
      { name: "Доставка по России" },
      { name: "Сборные грузы" },
      { name: "Полная загрузка фуры" },
      { name: "Отслеживание груза онлайн" }
    ]
  },
  special: {
    title: "Специальные Перевозки",
    description: "Транспортировка негабаритных, опасных и специфических грузов с соблюдением всех требований безопасности и нормативов.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    icon: Package,
    services: [
      { name: "Негабаритные грузы" },
      { name: "Рефрижераторы" },
      { name: "Опасные грузы ADR" },
      { name: "Автовозы" }
    ]
  }
}

interface ServiceListProps {
  services: Service[]
}

function ServiceList({ services }: ServiceListProps) {
  return (
    <ul className="grid gap-3">
      {services.map((service, index) => (
        <li key={index} className="flex items-center gap-3 group">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-glow group-hover:shadow-glow-hover transition-all duration-300" />
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.name}</span>
        </li>
      ))}
    </ul>
  )
}

interface ServiceImageProps {
  image: string
  title: string
}

function ServiceImage({ image, title }: ServiceImageProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <Card className="relative overflow-hidden border-0 glass-effect glass-effect-dark shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        <CardContent className="p-0">
          <AspectRatio ratio={4/3}>
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  )
}

interface ServiceContentProps {
  title: string
  description: string
  services: Service[]
  icon: typeof Truck | typeof MapPin | typeof Package
}

function ServiceContent({ title, description, services, icon: Icon }: ServiceContentProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-glow">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold gradient-text gradient-text-dark">{title}</h3>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      </div>

      <div className="space-y-6">
        <h4 className="text-xl font-semibold flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
          Наши Услуги Включают:
        </h4>
        <ServiceList services={services} />
      </div>
    </div>
  )
}

export function ServicesSection() {
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

    const element = document.getElementById('services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-blue-50/30 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-blue-950/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className={`container mx-auto px-4 max-w-7xl relative transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text gradient-text-dark">
            Наши Услуги
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-glow" />
        </div>

        <Tabs defaultValue="city" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="glass-effect glass-effect-dark p-2 shadow-xl">
              <TabsTrigger 
                value="city" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-glow transition-all duration-300"
              >
                Городские
              </TabsTrigger>
              <TabsTrigger 
                value="intercity"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-glow transition-all duration-300"
              >
                Междугородние
              </TabsTrigger>
              <TabsTrigger 
                value="special"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-glow transition-all duration-300"
              >
                Специальные
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(serviceTypes).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <ServiceImage image={section.image} title={section.title} />
                <ServiceContent 
                  title={section.title}
                  description={section.description}
                  services={section.services}
                  icon={section.icon}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}