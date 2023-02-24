import { Josefin_Sans as FontSans } from '@next/font/google'

import { BottomNavigation } from '@/components/bottom-navigation'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import PlayerBar from '@/components/player-bar'

import { cn } from '@/utils/cn'

import '@/styles/global.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={cn(
          'dark min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50',
          fontSans.variable
        )}
      >
        <Header />

        <main className="container min-h-screen pt-10">{children}</main>

        {/* Margin bottom for <BottomNavigation */}
        <Footer className="mb-[50px] md:mb-0" />

        <BottomNavigation />

        {/* add analytics */}

        <PlayerBar />
      </body>
    </html>
  )
}

export default RootLayout
