'use client'

import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'

type RootProvidersProps = {
  children: React.ReactNode
}

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>

      <GoogleAnalytics trackPageViews />
    </>
  )
}
