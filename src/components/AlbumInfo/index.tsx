import Image from 'next/image'

import { chakra } from '@chakra-ui/system'

import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout'

import { usePlayer } from 'contexts/PlayerContext'
import useDevice from 'hooks/useDevice'

export type AlbumInfoProps = {
  album: AlbumType
}

const AlbumInfo = ({ album, ...props }: AlbumInfoProps) => {
  const { playPlayList } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 4 }}
      spacing={{ base: 2, md: 0 }}
      {...props}
    >
      <Flex justify={{ base: 'center', md: 'initial' }}>
        <Flex borderRadius="lg" overflow="auto">
          <Image
            src={album.thumb}
            alt={album.name}
            width={isMobile ? 150 : 250}
            height={isMobile ? 150 : 250}
            layout="fixed"
          />
        </Flex>
      </Flex>

      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Heading as="h2" size="md" fontWeight="medium">
          {album.name}
        </Heading>

        <Text mt={1}>Total songs: {album.songs?.length}</Text>

        <Button mt={5} onClick={() => playPlayList(album.songs!)}>
          Play songs
        </Button>
      </Box>
    </SimpleGrid>
  )
}

export default chakra(AlbumInfo)
