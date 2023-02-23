'use client'

import { Box, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { BlurImage } from '@/components/blur-image'

import { AlbumItemPlay } from './album.item.play'

type AlbumItemProps = {
  album: AlbumType
}

export const AlbumItem = ({ album }: AlbumItemProps) => {
  return (
    <Link
      href={`/albums/${album.id}`}
      _hover={{ textDecor: 'none' }}
      _focus={{ boxShadow: 'none' }}
      aria-label={album.name}
    >
      <Box as="article" cursor="pointer">
        <Box
          pos="relative"
          borderRadius="lg"
          overflow="auto"
          boxShadow="dark-lg"
        >
          <BlurImage src={album.thumb} alt={album.name} />

          <AlbumItemPlay songs={album.songs} />
        </Box>

        <Text fontSize={{ md: 'lg' }} fontWeight="medium" noOfLines={1} mt={3}>
          {album.name}
        </Text>
      </Box>
    </Link>
  )
}
