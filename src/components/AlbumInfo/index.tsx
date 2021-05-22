import Image from 'next/image'

import { chakra } from '@chakra-ui/system'

import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

import { usePlayer } from 'contexts/PlayerContext'

export type AlbumInfoProps = {
  album: AlbumType
}

const AlbumInfo = ({ album }: AlbumInfoProps) => {
  const { playPlayList } = usePlayer()

  return (
    <Flex>
      <Flex borderRadius="lg" overflow="auto" mr="20px">
        <Image
          src={album.thumb}
          alt={album.name}
          width={250}
          height={250}
          layout="fixed"
        />
      </Flex>

      <Box>
        <Heading as="h2" size="md">
          {album.name}
        </Heading>

        <Text mt="15px">
          Release date:{' '}
          {new Intl.DateTimeFormat('pt-BR').format(new Date(album.releaseDate))}
        </Text>

        <Text mt="5px">Total songs: {album.songs?.length}</Text>

        <Button mt="30px" onClick={() => playPlayList(album.songs!)}>
          Play songs
        </Button>
      </Box>
    </Flex>
  )
}

export default chakra(AlbumInfo)
