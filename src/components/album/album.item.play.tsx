import { useMemo } from 'react'

import { Flex, Icon } from '@chakra-ui/react'

import { MdPlayArrow } from 'react-icons/md'
import { BsPauseFill } from 'react-icons/bs'

import { usePlayer } from 'contexts/player'

type AlbumItemProps = {
  songs?: SongType[]
}

export const AlbumItemPlay = ({ songs }: AlbumItemProps) => {
  const { currentSong, playPlayList, togglePlay, isPlaying } = usePlayer()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    isPlayingAlbum ? togglePlay() : playPlayList(songs!)
  }

  const isPlayingAlbum = useMemo(() => {
    return songs?.some((song) => song.id === currentSong?.id) && isPlaying
  }, [currentSong, songs, isPlaying])

  return (
    <Flex
      pos="absolute"
      bg="blackAlpha.700"
      display={{ base: 'none', md: 'flex' }}
      align="center"
      justify="center"
      left="0"
      top="0"
      w="full"
      h="full"
      opacity="0"
      transition="0.2s"
      {...(!isPlayingAlbum && { _hover: { opacity: 1 } })}
    >
      <Flex
        bg="whiteAlpha.500"
        borderRadius="full"
        boxSize={16}
        justify="center"
        align="center"
        transition="0.2s"
        _hover={{ transform: 'scale(1.1)' }}
        onClick={handleClick}
      >
        <Icon
          as={isPlayingAlbum ? BsPauseFill : MdPlayArrow}
          color="white"
          boxSize={10}
        />
      </Flex>
    </Flex>
  )
}
