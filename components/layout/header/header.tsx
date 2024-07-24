import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { HeaderNavigation } from './header.navigation'
import { HeaderTheme } from './header.theme'

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn('absolute top-0 inset-x-0 z-50 hidden sm:flex', className)}
      {...rest}
    >
      <div className="flex w-full h-14 items-center justify-between px-4">
        <HeaderNavigation />

        <nav className="flex items-center gap-4">
          <HeaderTheme />

          <Button size="icon">
            <Link
              href="https://github.com/vinihvc/summer-eletrohits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
