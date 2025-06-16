import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/footer'
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: 'ГрузТранс Логистика',
  description: 'Профессиональные услуги грузоперевозок по России и СНГ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}