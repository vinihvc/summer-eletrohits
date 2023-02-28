import { Inter as FontSans } from '@next/font/google'

import { BottomNavigation } from '@/components/layout/bottom-navigation'
import PlayerBar from '@/components/player-bar'

import { cn } from '@/utils/cn'

import '@/styles/global.css'

import type { Metadata } from 'next'

import { getCurrentUser } from '@/libs/user'

import { Header } from '@/components/layout/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'

import { RootProviders } from './providers'

// Instantiate it

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Eletrohits',
  description: 'The best of electro music.',
  icons: '/favicon.ico',
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const user = await getCurrentUser()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={cn(
          'flex min-h-screen flex-col bg-blue-50 font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50',
          fontSans.variable,
        )}
      >
        <RootProviders>
          <Header user={user} />

          <main className="container flex max-w-6xl flex-1 flex-col py-10">
            {children}
          </main>

          <BottomNavigation />

          <PlayerBar />

          <TailwindIndicator />
        </RootProviders>
      </body>
    </html>
  )
}

export default RootLayout
