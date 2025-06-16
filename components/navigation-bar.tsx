"use client"

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Truck } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface NavigationLink {
  href: string
  label: string
}

const navigationLinks: NavigationLink[] = [
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Автопарк" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#prices", label: "Тарифы" },
  { href: "#contact", label: "Заказать" }
]

function scrollToSection(sectionId: string) {
  const element = document.querySelector(sectionId)
  if (element) {
    const header = document.querySelector('header')
    const headerHeight = header?.offsetHeight || 0
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

function NavigationLinks({ onClick, className = "" }: { onClick?: () => void, className?: string }) {
  return (
    <>
      {navigationLinks.map(({ href, label }) => (
        <Button
          key={href}
          variant="ghost"
          className={`text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300 ${className}`}
          onClick={() => {
            scrollToSection(href)
            if (onClick) onClick()
          }}
        >
          {label}
        </Button>
      ))}
    </>
  )
}

function BrandLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-glow group-hover:shadow-glow-hover transition-all duration-300 group-hover:scale-105">
        <Truck className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold gradient-text gradient-text-dark">
        ГрузТранс
      </span>
    </Link>
  )
}

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect glass-effect-dark shadow-xl border-b border-white/20 dark:border-white/10' 
        : 'bg-background/80 backdrop-blur-sm border-b border-border/50'
    }`}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300"
                aria-label="Открыть меню навигации"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="glass-effect glass-effect-dark border-r border-white/20 dark:border-white/10">
              <SheetTitle className="gradient-text gradient-text-dark">Меню Навигации</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <div className="flex flex-col gap-2">
                    <NavigationLinks 
                      onClick={() => {}} 
                      className="justify-start text-lg h-12"
                    />
                  </div>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          
          <BrandLogo />
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <NavigationLinks />
        </nav>

        <div className="w-[88px]" />
      </div>
    </header>
  )
}