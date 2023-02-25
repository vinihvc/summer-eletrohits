import Link from 'next/link'

import { HeartIcon } from '@heroicons/react/24/solid'

import { ActiveLink } from '@/components/active-link'
import { Logo } from '@/components/logo'

export const Header = () => {
  return (
    <header className="hidden md:flex bg-gray-900 sticky top-0 border-b border-b-black/50 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-14">
          <Link href="/" aria-label="Eletrohits, Back to homepage">
            <Logo />
          </Link>

          <nav>
            <ActiveLink
              href="/likes"
              className="flex items-center gap-2 text-gray-400"
            >
              Your Likes
              <HeartIcon className="inline" />
            </ActiveLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
