import { memo, useMemo } from 'react'

import { chakra, Box, Flex, Spacer, Text } from '@chakra-ui/react'

import { useStore } from 'store'

import { LikeButton } from 'components/action-button/like'
import { PlayButton } from 'components/action-button/play'

type SongItemProps = {
  songs: SongType[]
  index: number
}

const SongItemComponent = chakra(
  ({ songs, index, ...props }: SongItemProps) => {
    const { currentSong } = useStore()

    const song = songs[index]

    const isCurrentSong = useMemo(() => {
      return currentSong()?.id === song.id
    }, [currentSong, song])

    return (
      <Flex
        align="center"
        borderBottom="1px solid"
        borderColor="whiteAlpha.300"
        p={4}
        gap={4}
        _hover={{ bg: 'whiteAlpha.50' }}
        {...(isCurrentSong && { bg: 'whiteAlpha.50' })}
        {...props}
      >
        <PlayButton songs={songs} index={index} />

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
          <LikeButton song={song} mr={3} />
        </Flex>
      </Flex>
    )
  }
)

export const SongItem = memo(SongItemComponent)
