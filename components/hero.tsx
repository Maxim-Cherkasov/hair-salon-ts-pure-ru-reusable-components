"use client"

import { Button } from "@/components/ui/button"
import { Phone, Send, ArrowDown } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"
import { useEffect, useState } from "react"

interface SocialLink {
  icon: typeof BsWhatsapp | typeof Phone | typeof Send
  href: string
  color: string
  label: string
}

const socialLinks: SocialLink[] = [
  {
    icon: BsWhatsapp,
    href: "https://wa.me/79991234567",
    color: "text-emerald-500 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    label: "WhatsApp"
  },
  {
    icon: Send,
    href: "https://t.me/gruztrans_logistics",
    color: "text-sky-500 hover:text-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]",
    label: "Telegram"
  },
  {
    icon: Phone,
    href: "tel:+79991234567",
    color: "text-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    label: "Позвонить"
  }
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container mx-auto px-4 relative max-w-7xl min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Main background image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2070&q=80')] bg-cover bg-center"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      
      <div className={`relative text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-none">
            <span className="block gradient-text gradient-text-dark animate-slide-up">
              Надежные
            </span>
            <span className="block gradient-text gradient-text-dark animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Грузоперевозки
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full shadow-glow" />
        </div>
        
        <p className={`text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          Профессиональные услуги грузоперевозок по России и СНГ. Современный автопарк, опытные водители и гарантия сохранности вашего груза.
        </p>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'animate-bounce' : 'opacity-0'}`}>
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      {/* Enhanced Sticky Contact Navigation */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
          <Button
            key={href}
            variant="ghost"
            size="icon"
            className={`h-14 w-14 rounded-full glass-effect glass-effect-dark hover:bg-white/20 dark:hover:bg-black/20 ${color} transition-all duration-300 hover:scale-110 animate-scale-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => window.open(href, '_blank')}
            aria-label={label}
          >
            <Icon className="h-7 w-7" />
          </Button>
        ))}
      </div>
    </div>
  )
}