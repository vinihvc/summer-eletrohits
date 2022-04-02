import NextLink from 'next/link'

import { Box, Flex, Link, Text } from '@chakra-ui/react'

import { AlbumItemPlay } from './album.item.play'
import { BlurImage } from 'components/blur-image'

type AlbumItemProps = {
  album: AlbumType
}

export const AlbumItem = ({ album }: AlbumItemProps) => {
  return (
    <Link as={NextLink} href={`/albums/${album.id}`}>
      <Box as="article" cursor="pointer">
        <Box pos="relative">
          <Box borderRadius="lg" overflow="auto">
            <BlurImage src={album.thumb} alt={album.name} />
          </Box>

          <Flex
            pos="absolute"
            opacity="0"
            bg="blackAlpha.700"
            display="flex"
            align="center"
            justify="center"
            left="0"
            top="0"
            w="full"
            h="full"
            _hover={{ opacity: 1 }}
          >
            <AlbumItemPlay songs={album.songs} />
          </Flex>
        </Box>

        <Text fontWeight="medium" noOfLines={1} mt={3} isTruncated>
          {album.name}
        </Text>
      </Box>
    </Link>
  )
}
