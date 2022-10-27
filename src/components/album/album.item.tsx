import NextLink from 'next/link'

import { Box, Link, Text } from '@chakra-ui/react'

import { BlurImage } from 'components/blur-image'

import { AlbumItemPlay } from './album.item.play'
import { memo } from 'react'

type AlbumItemProps = {
  album: AlbumType
}

const AlbumItemComponent = ({ album }: AlbumItemProps) => {
  return (
    <Link
      as={NextLink}
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

export const AlbumItem = memo(AlbumItemComponent)
