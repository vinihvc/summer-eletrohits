import Image from 'next/image'

import { Button, chakra, Box, Flex, Heading, Text } from '@chakra-ui/react'

import { usePlayer } from 'contexts/PlayerContext'

import useDevice from 'hooks/use-device'

export type AlbumInfoProps = {
  album: AlbumType
}

const AlbumInfo = ({ album, ...props }: AlbumInfoProps) => {
  const { playPlayList } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <Flex {...props}>
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

      <Box textAlign={{ base: 'center', md: 'left' }} ml={5}>
        <Heading as="h2" size="md" fontWeight="medium">
          {album.name}
        </Heading>

        <Text mt={1}>Total songs: {album.songs?.length}</Text>

        <Button mt={5} onClick={() => playPlayList(album.songs!)}>
          Play songs
        </Button>
      </Box>
    </Flex>
  )
}

export default chakra(AlbumInfo)
