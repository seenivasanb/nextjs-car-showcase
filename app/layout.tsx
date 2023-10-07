import { Footer, Header } from "@/components"
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Find or Book a rental car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex overflow-hidden min-h-screen flex-col px-8 xl:px-24 py-16">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
