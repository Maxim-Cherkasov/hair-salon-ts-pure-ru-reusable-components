import { HeroCarousel } from '@/components/hero-carousel'
import { GalleryGrid } from '@/components/gallery-grid'
import { PriceTable } from '@/components/price-table'
import { ContactForm } from '@/components/contact-form'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroCarousel />
      
      <div className="container mx-auto px-4 py-24 max-w-7xl space-y-32">
        <ServicesSection />

        <Testimonials />

        <section id="gallery" className="relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text gradient-text-dark">
              Наш Автопарк
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Современный и надежный автопарк для любых задач
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full shadow-glow" />
          </div>
          <GalleryGrid />
        </section>

        <section id="prices" className="relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text gradient-text-dark">
              Тарифы
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Прозрачные и конкурентные цены на все виды перевозок
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full shadow-glow" />
          </div>
          <div className="max-w-5xl mx-auto">
            <PriceTable />
          </div>
        </section>

        <section id="contact" className="relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text gradient-text-dark">
              Заказать Перевозку
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Получите персональный расчет стоимости за 15 минут
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full shadow-glow" />
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  )
}