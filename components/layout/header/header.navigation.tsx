'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface HeaderNavigationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { className, ...rest } = props

  const router = useRouter()
  const pathname = usePathname()

  const routesList = React.useRef<string[]>([pathname])
  const currentIndex = React.useRef<number>(0)

  const activeRoute = routesList.current[currentIndex.current]

  React.useEffect(() => {
    routesList.current = [...routesList.current, pathname]
    currentIndex.current = routesList.current.length - 1
  }, [pathname])

  const handlePrev = () => {
    if (currentIndex.current === 0) return

    currentIndex.current -= 1

    router.push(activeRoute)
  }

  const handleNext = () => {
    if (currentIndex.current === routesList.current.length - 1) return

    currentIndex.current += 1

    router.push(activeRoute)
  }

  const isPrevDisabled = currentIndex.current === 0

  const isNextDisabled = currentIndex.current === routesList.current.length - 1

  return (
    <div className={cn('flex gap-2', className)} {...rest}>
      <Button
        variant="inverted"
        size="icon"
        disabled={isPrevDisabled}
        onClick={handlePrev}
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Button
        variant="inverted"
        size="icon"
        disabled={isNextDisabled}
        onClick={handleNext}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  )
}
