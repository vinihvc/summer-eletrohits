import Link from 'next/link'

import { Button } from '../ui/button'
import { QueueListIcon } from '@heroicons/react/24/solid'

export const PlayerPlaylist = ({ ...props }) => {
  const title = 'Go to Playlist'

  return (
    <Link href="/playlist">
      <Button title={title} variant="ghost" aria-label={title} {...props}>
        <QueueListIcon className="w-5 h-5" />
      </Button>
    </Link>
  )
}
