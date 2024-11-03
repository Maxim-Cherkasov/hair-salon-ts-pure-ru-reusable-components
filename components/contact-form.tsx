"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
        toast.success("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.")
        e.currentTarget.reset()
      } else {
        throw new Error("Что-то пошло не так")
      }
    } catch (error) {
      toast.error("Извините, что-то пошло не так. Пожалуйста, попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl" />
      <Card className="relative border-0 bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
            Свяжитесь с Нами
          </CardTitle>
          <CardDescription>
            Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="322cc816-d2e8-4dfb-bd3b-72b571d86eba"
            />

            <div className="space-y-2">
              <Input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                required
                className="h-12 bg-background shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.08)]"
                aria-label="Номер телефона"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Ваше сообщение"
                required
                minLength={10}
                rows={4}
                className="resize-none bg-background shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.08)]"
                aria-label="Ваше сообщение"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:to-zinc-800 dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-200 dark:hover:from-zinc-300 dark:hover:to-zinc-300 dark:text-zinc-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Отправка сообщения..." : "Отправить сообщение"}
            >
              {isSubmitting ? "Отправка..." : "Отправить Сообщение"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}