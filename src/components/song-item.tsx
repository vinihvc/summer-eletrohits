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
      _hover={{ bg: 'whiteAlpha.50' }}
      p={4}
      gap={4}
      {...(song.id === currentSong?.id && { bg: 'whiteAlpha.50' })}
      {...props}
    >
      <PlayButton song={song} />

      <Box>
        <Text maxW={{ base: 140, md: 'full' }} fontWeight="bold" isTruncated>
          {song.name}
        </Text>

        <Text maxW={{ base: 140, md: 'full' }} isTruncated>
          {song.singer}
        </Text>
      </Box>

      <Spacer />

      <Flex>
        <FavoriteButton song={song} mr={3} />
      </Flex>
    </Flex>
  )
})
