import { RiPlayList2Fill } from 'react-icons/ri'

import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'

export const Playlist = ({ ...props }) => {
  return (
    <Link href="/playlist" passHref>
      <IconButton
        as="a"
        icon={<RiPlayList2Fill />}
        aria-label="Open Playlist"
        {...props}
      />
    </Link>
  )
}
