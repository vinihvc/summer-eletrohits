'use client'

import { useEffect } from 'react'

import { useStore } from '@/store'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'

type RootProvidersProps = {
  children: React.ReactNode
}

export const RootProviders = ({ children }: RootProvidersProps) => {
  const { initiateLikes } = useStore()

  useEffect(() => {
    initiateLikes()
  }, [initiateLikes])

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>

      <GoogleAnalytics trackPageViews />
    </>
  )
}
