import Link from 'next/link'

import { RiPlayList2Fill } from 'react-icons/ri'

import { IconButton } from '@chakra-ui/react'

export const PlayerPlaylist = ({ ...props }) => {
  const title = 'Go to Playlist'

  return (
    <Link href="/playlist" passHref>
      <IconButton
        as="a"
        title={title}
        variant="ghost"
        icon={<RiPlayList2Fill />}
        aria-label={title}
        {...props}
      />
    </Link>
  )
}
