"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Truck, Clock, Shield } from "lucide-react"

interface Service {
  name: string
  price: string
  description: string
  icon: typeof Truck | typeof Clock | typeof Shield
}

const services: Service[] = [
  { 
    name: "Городская доставка (до 1т)", 
    price: "от 1500₽", 
    description: "Доставка по городу, включая погрузку/разгрузку",
    icon: Truck
  },
  { 
    name: "Грузовик до 5т", 
    price: "от 2500₽", 
    description: "Перевозка грузов средней тяжести по городу",
    icon: Truck
  },
  { 
    name: "Междугородние перевозки", 
    price: "от 35₽/км", 
    description: "Доставка по России, цена за километр",
    icon: Clock
  },
  { 
    name: "Рефрижератор", 
    price: "от 45₽/км", 
    description: "Перевозка скоропортящихся товаров",
    icon: Shield
  },
  { 
    name: "Негабаритные грузы", 
    price: "по договору", 
    description: "Специальный транспорт и разрешения",
    icon: Shield
  },
  { 
    name: "Складские услуги", 
    price: "от 150₽/м²", 
    description: "Хранение грузов на наших складах",
    icon: Clock
  }
]

function TableTitle() {
  return (
    <div className="p-8 border-b border-border/50">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-glow">
          <Truck className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold gradient-text gradient-text-dark">
          Тарифы на Услуги
        </h3>
      </div>
      <p className="text-muted-foreground text-lg">
        Выберите подходящий тариф для ваших грузоперевозок
      </p>
    </div>
  )
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  
  return (
    <TableRow className="hover:bg-muted/50 group transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <TableCell className="font-medium py-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-300">
            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="group-hover:text-foreground transition-colors duration-300">{service.name}</span>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground py-6 group-hover:text-foreground transition-colors duration-300">
        {service.description}
      </TableCell>
      <TableCell className="text-right font-bold py-6">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg">
          {service.price}
        </span>
      </TableCell>
    </TableRow>
  )
}

export function PriceTable() {
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

    const element = document.getElementById('prices')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-20 blur-sm" />
      <div className="relative rounded-2xl border-0 glass-effect glass-effect-dark shadow-2xl overflow-hidden">
        <TableTitle />
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border/50">
              <TableHead className="w-[300px] font-bold text-lg py-6">Услуга</TableHead>
              <TableHead className="font-bold text-lg py-6">Описание</TableHead>
              <TableHead className="text-right font-bold text-lg w-[120px] py-6">Цена</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service, index) => (
              <ServiceRow key={service.name} service={service} index={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}