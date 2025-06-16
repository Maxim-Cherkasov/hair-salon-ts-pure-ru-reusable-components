"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Service {
  name: string
  price: string
  description: string
}

const services: Service[] = [
  { 
    name: "Городская доставка (до 1т)", 
    price: "от 1500₽", 
    description: "Доставка по городу, включая погрузку/разгрузку" 
  },
  { 
    name: "Грузовик до 5т", 
    price: "от 2500₽", 
    description: "Перевозка грузов средней тяжести по городу" 
  },
  { 
    name: "Междугородние перевозки", 
    price: "от 35₽/км", 
    description: "Доставка по России, цена за километр" 
  },
  { 
    name: "Рефрижератор", 
    price: "от 45₽/км", 
    description: "Перевозка скоропортящихся товаров" 
  },
  { 
    name: "Негабаритные грузы", 
    price: "по договору", 
    description: "Специальный транспорт и разрешения" 
  },
  { 
    name: "Складские услуги", 
    price: "от 150₽/м²", 
    description: "Хранение грузов на наших складах" 
  }
]

function TableTitle() {
  return (
    <div className="p-6 border-b">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
        Тарифы на Услуги
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Выберите подходящий тариф для ваших грузоперевозок
      </p>
    </div>
  )
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">{service.name}</TableCell>
      <TableCell className="text-muted-foreground">{service.description}</TableCell>
      <TableCell className="text-right font-semibold">{service.price}</TableCell>
    </TableRow>
  )
}

export function PriceTable() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl" />
      <div className="relative rounded-xl border bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <TableTitle />
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[300px] font-semibold">Услуга</TableHead>
              <TableHead className="font-semibold">Описание</TableHead>
              <TableHead className="text-right font-semibold w-[100px]">Цена</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <ServiceRow key={service.name} service={service} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}