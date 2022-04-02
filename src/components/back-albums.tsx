import NextLink from 'next/link'

import { chakra, Link } from '@chakra-ui/react'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'

export const BackAlbums = chakra(({ ...props }) => {
  return (
    <NextLink href="/" passHref>
      <Link
        d={{ base: 'flex', md: 'inline-flex' }}
        justifyContent="center"
        alignItems="center"
        gap={2}
        py={3}
        {...props}
      >
        <MdOutlineKeyboardBackspace />
        Back to albums
      </Link>
    </NextLink>
  )
})
