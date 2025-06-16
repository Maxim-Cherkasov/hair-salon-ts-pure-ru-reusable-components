"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Phone, MessageCircle } from "lucide-react"

interface FormData {
  phone: string
  message: string
  access_key: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })
      
      const data = await response.json()

      if (data.success) {
        toast.success("Спасибо за заявку! Наш менеджер свяжется с вами в ближайшее время для расчета стоимости.")
        e.currentTarget.reset()
      } else {
        throw new Error("Что-то пошло не так")
      }
    } catch (error) {
      toast.error("Извините, что-то пошло не так. Пожалуйста, попробуйте еще раз или позвоните нам.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative animate-scale-in">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-20 blur-sm" />
      <Card className="relative border-0 glass-effect glass-effect-dark shadow-2xl overflow-hidden">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-glow">
              <Send className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold gradient-text gradient-text-dark">
            Заказать Перевозку
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Оставьте заявку и получите расчет стоимости в течение 15 минут.
          </CardDescription>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full shadow-glow" />
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input 
              type="hidden" 
              name="access_key" 
              value="322cc816-d2e8-4dfb-bd3b-72b571d86eba"
            />

            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <label className="text-sm font-medium">Номер телефона</label>
              </div>
              <Input
                type="tel"
                name="phone"
                placeholder="+7 (999) 123-45-67"
                required
                className="h-14 text-lg glass-effect glass-effect-dark border-0 shadow-lg hover:shadow-glow-hover focus:shadow-glow-hover transition-all duration-300"
                aria-label="Номер телефона"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <label className="text-sm font-medium">Описание груза</label>
              </div>
              <Textarea
                name="message"
                placeholder="Опишите ваш груз: откуда-куда, вес, габариты, особенности..."
                required
                minLength={10}
                rows={5}
                className="resize-none text-lg glass-effect glass-effect-dark border-0 shadow-lg hover:shadow-glow-hover focus:shadow-glow-hover transition-all duration-300"
                aria-label="Описание груза"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-glow hover:shadow-glow-hover transition-all duration-300 group"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Отправка заявки..." : "Получить расчет"}
            >
              <span className="group-hover:scale-105 transition-transform duration-200">
                {isSubmitting ? "Отправка..." : "Получить Расчет"}
              </span>
              {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}