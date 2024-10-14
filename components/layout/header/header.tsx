import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { RemoveScroll } from 'react-remove-scroll'

import { Github } from 'lucide-react'
import { HEADER_NAV_LINKS } from './header.data'

const HeaderTheme = dynamic(() => import('./header.theme'), {
  ssr: false,
  loading: () => <Button variant="ghost" size="icon" />,
})

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn(
        'sm:fixed container top-0 sm:top-5 inset-x-0 z-50 max-sm:shadow-[0px_1px_1px_rgba(240,240,240,.60),0px_0px_1px_inset_#fffbed3c] dark:max-sm:shadow-[0px_1px_1px_rgba(0,0,0,.95),0px_0px_1px_inset_#fffbed3c] bg-background/40 dark:bg-background/80 backdrop-blur sm:rounded-xl flex h-14 items-center justify-between',
        RemoveScroll.classNames.zeroRight,
        className,
      )}
      {...rest}
    >
      <Link
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-4 ring-offset-background rounded-full"
        href="/"
      >
        <Logo />
      </Link>

      <nav className="flex gap-4 max-sm:hidden">
        {HEADER_NAV_LINKS.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            size="sm"
            className="gap-2"
            asChild
          >
            <NavLink
              href={link.href}
              className="text-muted-foreground hover:text-foreground [&.active]:bg-primary [&.active]:text-white"
            >
              {React.createElement(link.icon, { className: 'size-4' })}
              {link.label}
            </NavLink>
          </Button>
        ))}
      </nav>

      <nav className="flex items-center gap-4">
        <HeaderTheme />

        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://github.com/vinihvc/summer-eletrohits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-4" />
          </Link>
        </Button>
      </nav>
    </header>
  )
}
