import Link from 'next/link'

import { FiHeart } from 'react-icons/fi'

import { Logo } from './logo'
import { ActiveLink } from './active-link'

export const Header = () => {
  return (
    <header className="hidden md:flex bg-gray-900 sticky top-0 border-b border-b-black/50 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            className="hover:no-underline"
            aria-label="Eletrohits, Back to homepage"
          >
            <Logo />
          </Link>

          <nav>
            <ActiveLink
              href="/likes"
              className="flex items-center hover:no-underline gap-2 text-gray-400 &[aria-current=page]:text-white &[aria-current=page]>svg:fill-white"
            >
              Your Likes
              <FiHeart />
            </ActiveLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
