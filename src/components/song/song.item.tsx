import { chakra, Box, Flex, Spacer, Text } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { FavoriteButton } from 'components/action-button/favorite'
import { PlayButton } from 'components/action-button/play'

type SongItemProps = {
  song: SongType
}

export const SongItem = chakra(({ song, ...props }: SongItemProps) => {
  const { currentSong } = usePlayer()

  return (
    <Flex
      align="center"
      borderBottom="1px solid"
      borderColor="whiteAlpha.300"
      p={4}
      gap={4}
      _hover={{ bg: 'whiteAlpha.50' }}
      {...(song.id === currentSong?.id && { bg: 'whiteAlpha.50' })}
      {...props}
    >
      <PlayButton song={song} />

      <Box
        maxW={{ base: 140, sm: 250, md: 'full' }}
        fontSize={{ base: 'sm', sm: 'md' }}
      >
        <Text fontWeight="bold" isTruncated>
          {song.name}
        </Text>

        <Text isTruncated>{song.singer}</Text>
      </Box>

      <Spacer />

      <Flex>
        <FavoriteButton song={song} mr={3} />
      </Flex>
    </Flex>
  )
})
