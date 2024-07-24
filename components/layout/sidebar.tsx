import { cn } from '@/lib/cn'
import { AudioLines, Disc3, ListMusic, PartyPopper } from 'lucide-react'
import Link from 'next/link'
import { Hub } from '../icons/hub'
import { Button } from '../ui/button'
import { Logo } from '../ui/logo'
import { NavLink } from '../ui/nav-link'
import { ScrollArea } from '../ui/scroll-area'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: SidebarProps) => {
  const { className, ...rest } = props

  return (
    <div className={cn('pb-12', className)} {...rest}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link className="px-4 inline-flex py-2" href="/">
            <Logo />
          </Link>

          <div className="space-y-2 mt-4">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Discover
            </h2>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <NavLink
                href="/"
                className="aria-[current=true]:bg-primary aria-[current=true]:text-white"
              >
                <Hub />
                Browse
              </NavLink>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <NavLink
                href="/party"
                className="aria-[current=true]:bg-primary aria-[current=true]:text-white"
              >
                <PartyPopper className="size-4" />
                Party
              </NavLink>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <div className="space-y-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Library
            </h2>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <NavLink
                href="/queue"
                className="aria-[current=true]:bg-primary aria-[current=true]:text-white"
              >
                <AudioLines className="size-4" />
                Playing
              </NavLink>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <NavLink
                href="/playlist/albums"
                className="aria-[current=true]:bg-primary aria-[current=true]:text-white"
              >
                <Disc3 className="size-4" />
                Albums
              </NavLink>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <NavLink
                href="/playlist/songs"
                className="aria-[current=true]:bg-primary aria-[current=true]:text-white"
              >
                <ListMusic className="size-4" />
                Songs
              </NavLink>
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {/* {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))} */}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
