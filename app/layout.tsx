import { BottomNavigation } from '@/components/layout/bottom-navigation'
import { cn } from '@/lib/cn'

import '@/styles/global.css'

import type { Metadata } from 'next'

import { MediaQuery } from '@/components/debug/media-query'
import { Sidebar } from '@/components/layout/sidebar'

import { Header } from '@/components/layout/header'
import { Player } from '@/components/ui/player'
import { SEO } from '@/constants/seo'
import { fontSans } from '@/lib/font'
import type React from 'react'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { default: SEO.title, template: `%s | ${SEO.title}` },
  applicationName: SEO.title,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    siteName: SEO.title,
    type: 'website',
    url: SEO.url,
    images: [
      {
        url: '/img/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Eletrohits cover',
      },
    ],
  },
  twitter: {
    creator: SEO.twitter,
    card: 'summary_large_image',
  },
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
            <Sidebar className="fixed top-0 left-0 w-full max-w-64 shrink-0 hidden lg:block" />

            <div className="relative w-full lg:border-l ml-64">
              <Header />

              <main className="flex flex-col flex-1 min-h-dvh">{children}</main>
            </div>
          </div>

          <Player />

          <BottomNavigation />

          <MediaQuery />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
