import { BottomNavigation } from '@/components/layout/bottom-navigation'
import { PlayerBar } from '@/components/player/player'
import { cn } from '@/lib/cn'

import '@/styles/global.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { fontSans } from '@/lib/font'
import type React from 'react'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: { default: 'Eletrohits', template: '%s | Eletrohits' },
  description: 'The Best of Electro Music',
}

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background text-foreground font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <Header />

          <main className="container flex flex-col flex-1 min-h-dvh py-10">
            {children}
          </main>

          <Footer />

          <PlayerBar />

          <BottomNavigation />

          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
