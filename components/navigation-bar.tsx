"use client"

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Scissors } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface NavigationLink {
  href: string
  label: string
}

const navigationLinks: NavigationLink[] = [
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Наши Работы" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#prices", label: "Цены" },
  { href: "#contact", label: "Контакты" }
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
          className={`text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors ${className}`}
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
    <Link href="/" className="flex items-center space-x-2">
      <Scissors className="h-6 w-6" />
      <span className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        СтильСтриж
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
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                aria-label="Открыть меню навигации"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle>Меню Навигации</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <div className="flex flex-col gap-2">
                    <NavigationLinks 
                      onClick={() => {}} 
                      className="justify-start text-lg"
                    />
                  </div>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          
          <BrandLogo />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavigationLinks />
        </nav>

        <div className="w-[88px]" />
      </div>
    </header>
  )
}