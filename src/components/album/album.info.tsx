import { Button, Flex, Heading, Text, chakra, Box } from '@chakra-ui/react'

import { MdPlayArrow } from 'react-icons/md'

import { usePlayer } from 'contexts/player'

import { BlurImage } from 'components/blur-image'

type AlbumInfoProps = {
  album: AlbumType
}

export const AlbumInfo = chakra(({ album, ...props }: AlbumInfoProps) => {
  const { playPlayList } = usePlayer()

  return (
    <Flex
      align={{ base: 'center', md: 'initial' }}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 5, md: 10 }}
      {...props}
    >
      <Flex justify={{ base: 'center', md: 'initial' }} boxShadow="lg">
        <BlurImage
          src={album.thumb}
          alt={album.name}
          boxSize={{ base: 150, sm: 250 }}
        />
      </Flex>

      <Flex direction="column" align={{ base: 'center', md: 'initial' }}>
        <Text
          color="primary"
          fontSize="xs"
          textTransform="uppercase"
          fontWeight="medium"
        >
          Album
        </Text>

        <Heading as="h2" size="xl" fontWeight="bold">
          {album.name}
        </Heading>

        <Text mt={1}>{`${album.songs?.length} songs`}</Text>

        <Box>
          <Button
            leftIcon={<MdPlayArrow />}
            borderRadius="full"
            px={6}
            mt={5}
            onClick={() => playPlayList(album.songs!)}
          >
            Play
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
})
