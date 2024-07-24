import { cn } from '@/lib/cn'
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn('absolute top-0 inset-x-0 z-50 hidden sm:flex', className)}
      {...rest}
    >
      <div className="flex w-full h-14 items-center justify-between px-4">
        <div className="space-x-2">
          <Button size="icon">
            <ChevronLeft />
          </Button>

          <Button size="icon">
            <ChevronRight />
          </Button>
        </div>

        <nav className="flex items-center space-x-4">
          <ModeToggle />

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
