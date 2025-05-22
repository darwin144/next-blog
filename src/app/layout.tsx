'use client'

import './globals.css'
import Header from '@/components/Header' // Pastikan path-nya benar
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          { <Header />
          /*<main className="p-6">{children}</main> */}
        </ThemeProvider>
      </body>
    </html>
  )
}

