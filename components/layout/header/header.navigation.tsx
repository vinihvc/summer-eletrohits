'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface HeaderNavigationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { className, ...rest } = props

  const pathname = usePathname()

  const routesList = React.useRef<string[]>([pathname])
  const currentIndex = React.useRef<number>(0)

  React.useEffect(() => {
    routesList.current = [...routesList.current, pathname]
    currentIndex.current = routesList.current.length - 1
  }, [pathname])

  const getPrevRoute = () => {
    if (currentIndex.current === 0) return

    return routesList.current[currentIndex.current - 1]
  }

  const getNextRoute = () => {
    if (currentIndex.current === routesList.current.length - 1) return

    return routesList.current[currentIndex.current + 1]
  }

  const isPrevDisabled = currentIndex.current === 0

  const isNextDisabled = currentIndex.current === routesList.current.length - 1

  return (
    <div className={cn('flex gap-2', className)} {...rest}>
      <Button size="icon" disabled={isPrevDisabled} asChild>
        <Link href={getPrevRoute() || ''}>
          <ChevronLeft className="size-4" />

          <span className="sr-only">Go to previous page</span>
        </Link>
      </Button>

      <Button size="icon" disabled={isNextDisabled} asChild>
        <Link href={getNextRoute() || ''}>
          <ChevronRight className="size-4" />

          <span className="sr-only">
            Go to {isNextDisabled ? 'next' : 'previous'}
          </span>
        </Link>
      </Button>
    </div>
  )
}
