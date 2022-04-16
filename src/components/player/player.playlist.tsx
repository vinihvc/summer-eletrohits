import { RiPlayList2Fill } from 'react-icons/ri'

import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'

export const PlayerPlaylist = ({ ...props }) => {
  return (
    <Link href="/playlist" passHref>
      <IconButton
        as="a"
        title="Paylist"
        variant="ghost"
        icon={<RiPlayList2Fill />}
        aria-label="Open Playlist"
        {...props}
      />
    </Link>
  )
}
