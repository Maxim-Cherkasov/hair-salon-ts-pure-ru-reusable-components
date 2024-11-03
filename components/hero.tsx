"use client"

import { Button } from "@/components/ui/button"
import { Phone, Send } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"

interface SocialLink {
  icon: typeof BsWhatsapp | typeof Phone | typeof Send
  href: string
  color: string
  label: string
}

const socialLinks: SocialLink[] = [
  {
    icon: BsWhatsapp,
    href: "https://wa.me/1234567890",
    color: "text-emerald-500 hover:text-emerald-600",
    label: "WhatsApp"
  },
  {
    icon: Send,
    href: "https://t.me/yourusername",
    color: "text-sky-500 hover:text-sky-600",
    label: "Telegram"
  },
  {
    icon: Phone,
    href: "tel:+1234567890",
    color: "text-blue-500 hover:text-blue-600",
    label: "Позвонить"
  }
]

export function Hero() {
  return (
    <div className="container mx-auto px-4 relative max-w-7xl min-h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=2070&q=80')] bg-cover bg-center"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative text-center max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent">
          Преобразите Свой Образ
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Испытайте роскошный стайлинг волос в его лучшем проявлении. Наши мастера-стилисты создают индивидуальные образы, соответствующие вашему уникальному стилю.
        </p>
      </div>

      {/* Sticky Contact Navigation */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        {socialLinks.map(({ icon: Icon, href, color, label }) => (
          <Button
            key={href}
            variant="ghost"
            size="icon"
            className={`h-14 w-14 rounded-full hover:bg-transparent ${color}`}
            onClick={() => window.open(href, '_blank')}
            aria-label={label}
          >
            <Icon className="h-8 w-8" />
          </Button>
        ))}
      </div>
    </div>
  )
}