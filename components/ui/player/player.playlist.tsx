import Link from 'next/link'
import { ListVideo } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const PlayerPlaylist = ({ ...props }) => {
  const title = 'Go to Playlist'

  return (
    <Link href="/queue">
      <Button title={title} variant="ghost" aria-label={title} {...props}>
        <ListVideo size={20} />
      </Button>
    </Link>
  )
}
