import Link from 'next/link'

import { ListVideo } from 'lucide-react'

import { Button } from '../ui/button'

export const PlayerPlaylist = ({ ...props }) => {
  const title = 'Go to Playlist'

  return (
    <Link href="/playlist">
      <Button title={title} variant="ghost" aria-label={title} {...props}>
        <ListVideo size={20} />
      </Button>
    </Link>
  )
}
