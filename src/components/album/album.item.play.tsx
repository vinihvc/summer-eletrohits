import { MdPlayArrow } from 'react-icons/md'

import { Flex, Icon } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

type AlbumItemProps = {
  songs?: SongType[]
}

export const AlbumItemPlay = ({ songs }: AlbumItemProps) => {
  const { playPlayList } = usePlayer()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    playPlayList(songs!)
  }

  return (
    <Flex
      bg="whiteAlpha.500"
      borderRadius="full"
      cursor="pointer"
      boxSize={16}
      justify="center"
      align="center"
      _hover={{ transform: 'scale(1.1)' }}
      onClick={handleClick}
    >
      <Icon as={MdPlayArrow} color="white" boxSize={10} />
    </Flex>
  )
}
