'use client'

import { MusicProvider } from '@/contexts/music'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import type React from 'react'

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MusicProvider>{children}</MusicProvider>
      </ThemeProvider>

      <GoogleAnalytics trackPageViews />
    </>
  )
}
