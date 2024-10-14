import { ListVideo } from 'lucide-react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { NavLink } from '../ui/nav-link'

interface PlayerPlaylistProps extends ButtonProps {}

export const PlayerPlaylist = (props: PlayerPlaylistProps) => {
  return (
    <Button variant="ghost" size="icon" asChild {...props}>
      <NavLink
        href="/queue"
        className="[&.active]:bg-primary [&.active]:text-primary-foreground"
      >
        <ListVideo className="size-4" />
        <span className="sr-only">Go to Playlist</span>
      </NavLink>
    </Button>
  )
}
