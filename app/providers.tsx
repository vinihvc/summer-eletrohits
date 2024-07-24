'use client'

import { useStore } from '@/store'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import React from 'react'

export const Providers = ({ children }: React.PropsWithChildren) => {
  React.useEffect(() => {
    useStore.persist.rehydrate()
  }, [])

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>

      <GoogleAnalytics trackPageViews />
    </>
  )
}
