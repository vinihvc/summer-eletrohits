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
      className={cn(
        'fixed top-0 left-[1px] right-0 ml-64 z-50 hidden sm:flex bg-background/40 backdrop-blur',
        className,
      )}
      {...rest}
    >
      <div className="flex w-full h-14 items-center justify-between px-5">
        <HeaderNavigation />

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
      </div>
    </header>
  )
}
