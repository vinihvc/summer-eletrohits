import NextLink from 'next/link'

import { Box, Link, Text } from '@chakra-ui/react'

import { AlbumItemPlay } from './album.item.play'
import { BlurImage } from 'components/blur-image'

type AlbumItemProps = {
  album: AlbumType
}

export const AlbumItem = ({ album }: AlbumItemProps) => {
  return (
    <Link as={NextLink} href={`/albums/${album.id}`}>
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

        <Text
          fontSize={{ md: 'lg' }}
          fontWeight="medium"
          noOfLines={1}
          mt={3}
          isTruncated
        >
          {album.name}
        </Text>
      </Box>
    </Link>
  )
}
