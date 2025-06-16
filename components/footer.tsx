"use client"

import { useEffect, useRef } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

interface ContactInfo {
  text: string
  href?: string
  icon: typeof Phone | typeof Mail | typeof MapPin
}

const contactInfo: ContactInfo[] = [
  {
    text: "+7 (999) 123-4567",
    href: "tel:+79991234567",
    icon: Phone
  },
  {
    text: "info@gruztrans.ru",
    href: "mailto:info@gruztrans.ru",
    icon: Mail
  },
  {
    text: "ул. Транспортная 45, Москва, 123456",
    icon: MapPin
  }
]

function BusinessHours() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20">
          <Clock className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold gradient-text gradient-text-dark">Режим Работы</h3>
      </div>
      <div className="space-y-3 text-zinc-300">
        <div className="flex justify-between items-center p-3 rounded-lg glass-effect glass-effect-dark">
          <span>Понедельник - Пятница:</span>
          <span className="font-semibold text-blue-400">8:00 - 20:00</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg glass-effect glass-effect-dark">
          <span>Суббота:</span>
          <span className="font-semibold text-blue-400">9:00 - 18:00</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg glass-effect glass-effect-dark">
          <span>Воскресенье:</span>
          <span className="font-semibold text-blue-400">10:00 - 16:00</span>
        </div>
        <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30">
          <p className="text-sm font-medium text-blue-300">Диспетчерская служба 24/7</p>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold gradient-text gradient-text-dark">Адрес и Контакты</h3>
      <div className="space-y-4">
        {contactInfo.map(({ text, href, icon: Icon }) => (
          <div key={text} className="flex items-center gap-4 p-3 rounded-lg glass-effect glass-effect-dark hover:bg-white/10 dark:hover:bg-black/20 transition-all duration-300 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
              <Icon className="w-4 h-4 text-blue-400" />
            </div>
            {href ? (
              <a 
                href={href} 
                className="text-zinc-300 hover:text-white transition-colors duration-300 group-hover:text-blue-300"
              >
                {text}
              </a>
            ) : (
              <span className="text-zinc-300 group-hover:text-blue-300 transition-colors duration-300">{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function BrandSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-glow">
          <span className="text-2xl font-bold text-white">Г</span>
        </div>
        <span className="text-2xl font-bold gradient-text gradient-text-dark">ГрузТранс Логистика</span>
      </div>
      <p className="text-zinc-300 leading-relaxed">
        Профессиональная транспортная компания, предоставляющая полный спектр услуг грузоперевозок по России и СНГ с гарантией качества и соблюдения сроков.
      </p>
      <div className="flex gap-4">
        <div className="text-center p-4 rounded-lg glass-effect glass-effect-dark">
          <div className="text-2xl font-bold text-blue-400">500+</div>
          <div className="text-sm text-zinc-400">Довольных клиентов</div>
        </div>
        <div className="text-center p-4 rounded-lg glass-effect glass-effect-dark">
          <div className="text-2xl font-bold text-purple-400">24/7</div>
          <div className="text-sm text-zinc-400">Поддержка</div>
        </div>
      </div>
    </div>
  )
}

function Map() {
  const mapInitialized = useRef<boolean>(false)

  useEffect(() => {
    if (mapInitialized.current) return
    
    if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      const script = document.createElement("script")
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        // @ts-ignore - Yandex Maps types not available
        ymaps.ready(() => {
          // @ts-ignore
          new ymaps.Map("ymap", {
            center: [55.7558, 37.6173], // Moscow coordinates
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"]
          })
        })
      }
    }

    mapInitialized.current = true

    return () => {
      mapInitialized.current = false
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-20 blur-sm" />
      <div className="relative max-w-[1024px] mx-auto w-full h-[300px] rounded-2xl overflow-hidden glass-effect glass-effect-dark shadow-2xl">
        <div id="ymap" className="w-full h-full" />
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 py-16 max-w-7xl relative">
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <BrandSection />
            <BusinessHours />
            <ContactSection />
          </div>

          <Map />

          <Separator className="bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-400">
              © {new Date().getFullYear()} ГрузТранс Логистика. Все права защищены.
            </div>

            <div className="flex gap-8 text-zinc-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Политика Конфиденциальности</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Условия Перевозки</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}