import Link from 'next/link'

import { Github, Twitter } from 'lucide-react'

import { Logo } from '@/components/icon/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { ActiveLink } from '@/components/ui/active-link'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 hidden bg-white dark:bg-black sm:flex">
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" aria-label="Eletrohits, Back to homepage">
            <Logo />
          </Link>

          <nav className="flex space-x-4">
            <ActiveLink
              href="/likes"
              className="font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Songs
            </ActiveLink>

            <ActiveLink
              href="/likes"
              className="font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Playlists
            </ActiveLink>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://viniciusvicentini.com/twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>

            <a
              href="https://github.com/vinihvc/summer-eletrohits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm">
                <Github size={20} />
                <span className="sr-only">Github</span>
              </Button>
            </a>

            <ModeToggle />

            <Link href="/profile">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
