import Link from 'next/link'

import { Logo } from '@/components/icon/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { ActiveLink } from '@/components/ui/active-link'

import { cn } from '@/utils/cn'

type HeaderProps = React.HtmlHTMLAttributes<HTMLDivElement>

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn(
        'sticky top-0 z-50 hidden bg-white dark:bg-black sm:flex',
        className,
      )}
      {...rest}
    >
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" aria-label="Eletrohits, Back to homepage">
            <Logo />
          </Link>

          <nav className="flex items-center space-x-4">
            <ActiveLink href="/library">Library</ActiveLink>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
