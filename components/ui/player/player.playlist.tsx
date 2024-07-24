import { ListVideo } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const PlayerPlaylist = ({ ...props }) => {
  return (
    <Link href="/queue">
      <Button variant="ghost" {...props}>
        <ListVideo className="size-4" />
        <span className="sr-only">Go to Playlist</span>
      </Button>
    </Link>
  )
}
