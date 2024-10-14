'use client'

import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import type React from 'react'

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>

      <GoogleAnalytics trackPageViews />
    </>
  )
}
