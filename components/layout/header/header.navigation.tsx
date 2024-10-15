'use client'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'
import React from 'react'

import { useMusicState } from '@/store/app.store'
import { Disc3 } from 'lucide-react'
import { PartyPopper } from 'lucide-react'

interface HeaderNavigationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { className, ...rest } = props

  const { liked } = useMusicState()

  const [likedList, setLikedList] = React.useState(liked)
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    if (liked.length > likedList.length) {
      setAnimate(true)
    }

    const timeout = setTimeout(() => {
      setAnimate(false)
    }, 2000)

    setLikedList(liked)

    return () => clearTimeout(timeout)
  }, [liked, likedList])

  return (
    <nav className={cn('flex gap-4 max-sm:hidden', className)} {...rest}>
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <NavLink
          href="/party"
          className="text-muted-foreground hover:text-foreground [&.active]:bg-primary [&.active]:text-white"
        >
          <PartyPopper className="size-4" />
          Party
        </NavLink>
      </Button>

      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <NavLink
          href="/likes"
          className="group text-muted-foreground hover:text-foreground [&.active]:bg-primary [&.active]:text-white"
        >
          <Disc3
            className={cn('size-4', {
              'text-primary animate-spin group-[&.active]:animate-none group-[&.active]:text-white':
                animate,
            })}
          />
          Likes
        </NavLink>
      </Button>
    </nav>
  )
}
