import {
  chakra,
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import LikeButton from 'components/FavoriteButton'
import PlayButton from 'components/PlayButton'

export type SongItemProps = {
  song: SongType
  index?: number
}

const SongItem = ({ song, ...props }: SongItemProps) => {
  const bg = useColorModeValue('gray.100', 'gray.800')

  return (
    <Flex align="center" {...props} p={2} bg={bg} borderRadius="md">
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
        <LikeButton song={song} size="sm" mr={3} />

        <PlayButton song={song} size="sm" />
      </Flex>
    </Flex>
  )
}

export default chakra(SongItem)
