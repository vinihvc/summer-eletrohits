import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

import { usePlayer } from 'contexts/PlayerContext'

export type AlbumInfoProps = {
  album: AlbumType
}

const AlbumInfo = ({ album }: AlbumInfoProps) => {
  const { playPlayList } = usePlayer()

  return (
    <Flex>
      <Image src={album.thumb} borderRadius="5px" maxHeight="250px" />

      <Box marginLeft="20px">
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

export default AlbumInfo
