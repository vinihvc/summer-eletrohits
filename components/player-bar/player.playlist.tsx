import Link from 'next/link'

import { RiPlayList2Fill } from 'react-icons/ri'
import { Button } from '../ui/button'

export const PlayerPlaylist = ({ ...props }) => {
  const title = 'Go to Playlist'

  return (
    <Link href="/playlist">
      <Button title={title} variant="ghost" aria-label={title} {...props}>
        <RiPlayList2Fill />
      </Button>
    </Link>
  )
}
