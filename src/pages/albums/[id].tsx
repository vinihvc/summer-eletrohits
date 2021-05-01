import { GetStaticPaths, GetStaticProps } from 'next'

import { FiPlayCircle } from 'react-icons/fi'

import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'

import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'

import { usePlayer } from 'contexts/PlayerContext'

import Base from 'templates/Base'

import api from 'services/api'

export type AlbumsProps = {
  album: AlbumType
}

function Albums({ album }: AlbumsProps) {
  const { setSong } = usePlayer()

  return (
    <Base>
      <Flex>
        <Image src={album.thumb} borderRadius="5px" maxHeight="250px" />

        <Box marginLeft="20px">
          <Heading as="h2" size="md">
            {album.name}
          </Heading>

          <Text mt="15px">
            Release date:{' '}
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date(album.releaseDate)
            )}
          </Text>

          <Text mt="5px">Total songs: {album.songs?.length}</Text>

          <Button mt="30px" onClick={() => setSong(album)}>
            Play songs
          </Button>
        </Box>
      </Flex>

      <Box mt="50px">
        {album.songs?.map((song: SongType, index: number) => (
          <Box key={song.id} my="10px">
            <Flex mb="10px">
              <Flex flex="6 1 0" mr="20px" fontWeight="bold">
                {song.name}
              </Flex>

              <Flex flex="9 1 0">{song.singer}</Flex>

              <Box
                onClick={() =>
                  setSong({
                    thumb: '',
                    name: `${song.name} - ${song.singer}`,
                    videoUrl: song.videoUrl
                  } as AlbumType)
                }
                _hover={{ cursor: 'pointer' }}
              >
                <FiPlayCircle size="20px" />
              </Box>
            </Flex>

            {index < album.songs.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Base>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api('albums')

  const paths = data.map((album: AlbumType) => {
    return {
      params: { id: String(album.id) }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api(`albums/${params?.id}`)

  return {
    props: {
      album: data
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default Albums
