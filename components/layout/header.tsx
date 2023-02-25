import Link from 'next/link'
import { Heart } from 'lucide-react'

import { ActiveLink } from '@/components/active-link'
import { Logo } from '@/components/logo'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 hidden bg-neutral-900 sm:flex">
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" aria-label="Eletrohits, Back to homepage">
            <Logo />
          </Link>

          <nav>
            <ActiveLink
              href="/likes"
              className="flex items-center gap-2 text-neutral-400"
            >
              Your Likes
              <Heart />
            </ActiveLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
