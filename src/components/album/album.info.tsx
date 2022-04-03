import {
  Button,
  Flex,
  Heading,
  Text,
  chakra,
  Box,
  VStack
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

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
      <Flex
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        justify={{ base: 'center', md: 'initial' }}
        boxShadow="lg"
      >
        <BlurImage
          src={album.thumb}
          alt={album.name}
          boxSize={{ base: 150, sm: 250 }}
        />
      </Flex>

      <VStack
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        direction="column"
        align={{ base: 'center', md: 'initial' }}
      >
        <Text
          color="blue.200"
          fontSize="xs"
          textTransform="uppercase"
          fontWeight="medium"
        >
          Album
        </Text>

        <Heading as="h2" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          {album.name}
        </Heading>

        <Text mt={1}>{`${album.songs?.length} songs`}</Text>

        <Box>
          <Button
            leftIcon={<MdPlayArrow />}
            onClick={() => playPlayList(album.songs!)}
          >
            Play
          </Button>
        </Box>
      </VStack>
    </Flex>
  )
})
