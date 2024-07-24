import { BottomNavigation } from '@/components/layout/bottom-navigation'
import { cn } from '@/lib/cn'

import '@/styles/global.css'

import type { Metadata } from 'next'

import { MediaQuery } from '@/components/debug/media-query'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
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
          <div className="flex">
            <Sidebar className="max-w-80 shrink-0 hidden lg:block" />

            <div className="relative w-full lg:border-l">
              <Header />

              <main className="flex flex-col flex-1 min-h-dvh">{children}</main>

              <Footer />
            </div>
          </div>

          {/* <PlayerBar /> */}

          <BottomNavigation />

          <MediaQuery />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
