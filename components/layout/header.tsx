import Link from 'next/link'

import { getUserInitials } from '@/libs/initials'
import { User } from 'next-auth'

import { Logo } from '@/components/icon/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { ActiveLink } from '@/components/ui/active-link'
import { Button } from '@/components/ui/button'

import { ModalLogin } from '../modal-login'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type HeaderProps = {
  user?: User
}

export const Header = ({ user }: HeaderProps) => {
  const hasUser = !!user

  return (
    <header className="sticky top-0 z-50 hidden bg-white dark:bg-black sm:flex">
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" aria-label="Eletrohits, Back to homepage">
            <Logo />
          </Link>

          <nav className="flex items-center space-x-4">
            {hasUser && <ActiveLink href="/library">Library</ActiveLink>}

            <ModeToggle />

            {hasUser ? (
              <Link href="/profile">
                <Avatar>
                  <AvatarImage
                    src={user.image || ''}
                    alt="Profile picture, click to view profile"
                  />
                  <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
                </Avatar>
              </Link>
            ) : (
              <ModalLogin>
                <Button>Login</Button>
              </ModalLogin>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
