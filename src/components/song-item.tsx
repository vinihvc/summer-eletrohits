import { chakra, Box, Flex, Spacer, Text, Image } from '@chakra-ui/react'

import { FavoriteButton } from 'components/action-button/favorite'
import { PlayButton } from 'components/action-button/play-pause'

type SongItemProps = {
  song: SongType
  index?: number
}

export const SongItem = chakra(({ song, ...props }: SongItemProps) => {
  return (
    <Flex align="center" {...props} p={2} bg="song-item" borderRadius="md">
      <Image
        src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
        width="40px"
        height="40px"
        borderRadius="lg"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/150/000?text="
        mr={{ base: 3, md: 5 }}
      />

      <Box>
        <Text maxW={{ base: 120, md: 'full' }} fontWeight="medium" isTruncated>
          {song.name}
        </Text>

        <Text maxW={{ base: 120, md: 'full' }} isTruncated>
          {song.singer}
        </Text>
      </Box>

      <Spacer />

      <Flex>
        <FavoriteButton song={song} mr={3} />

        <PlayButton song={song} />
      </Flex>
    </Flex>
  )
})
