"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"

interface Service {
  name: string
}

interface ServiceType {
  title: string
  description: string
  image: string
  services: Service[]
}

interface ServiceTypes {
  [key: string]: ServiceType
}

const serviceTypes: ServiceTypes = {
  city: {
    title: "Городские Перевозки",
    description: "Быстрая и надежная доставка грузов по городу. Современный автопарк различной грузоподъемности для решения любых транспортных задач в городских условиях.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
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
    <ul className="grid gap-2">
      {services.map((service, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-950 dark:bg-zinc-200" />
          <span className="text-muted-foreground">{service.name}</span>
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
    <Card className="overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
      <CardContent className="p-0">
        <AspectRatio ratio={4/3}>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  )
}

interface ServiceContentProps {
  title: string
  description: string
  services: Service[]
}

function ServiceContent({ title, description, services }: ServiceContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Наши Услуги Включают:</h4>
        <ServiceList services={services} />
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
          Наши Услуги
        </h2>

        <Tabs defaultValue="city" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex flex-col sm:flex-row">
              <TabsTrigger value="city">Городские</TabsTrigger>
              <TabsTrigger value="intercity">Междугородние</TabsTrigger>
              <TabsTrigger value="special">Специальные</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(serviceTypes).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ServiceImage image={section.image} title={section.title} />
                <ServiceContent 
                  title={section.title}
                  description={section.description}
                  services={section.services}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}