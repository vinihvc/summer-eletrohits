import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import type React from 'react'
import { HeaderNavigation } from './header.navigation'
import { HeaderTheme } from './header.theme'

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn('z-10 sm:absolute top-0 sm:top-5 inset-x-0', className)}
      {...rest}
    >
      <div className="container sm:bg-background/40 sm:dark:bg-background/80 sm:backdrop-blur sm:rounded-xl flex h-14 items-center justify-between">
        <Link
          className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-4 ring-offset-background rounded-full"
          href="/"
        >
          <Logo />

          <span className="sr-only">Eletrohits, Back to home</span>
        </Link>

        <HeaderNavigation />

        <nav className="flex items-center gap-4">
          <HeaderTheme />

          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/vinihvc/summer-eletrohits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="size-4" />

              <span className="sr-only">Visit Github repository</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
