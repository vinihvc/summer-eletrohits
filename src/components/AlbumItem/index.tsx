import NextLink from 'next/link'

import Image from 'next/image'

import { MdPlayArrow } from 'react-icons/md'

import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'

import { usePlayer } from 'contexts/PlayerContext'

export type AlbumItemProps = {
  album: AlbumType
}

const AlbumItem = ({ album }: AlbumItemProps) => {
  const { playPlayList } = usePlayer()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    playPlayList(album.songs!)
  }

  return (
    <Link as={NextLink} href={`/albums/${album.id}`}>
      <Box
        bg={{
          base: 'transparent',
          md: useColorModeValue('gray.100', 'gray.900')
        }}
        p={{ base: 0, md: 4 }}
        borderRadius="lg"
        cursor="pointer"
        transition=".3s"
        _hover={{
          md: {
            bg: useColorModeValue('gray.50', 'gray.700')
          }
        }}
      >
        <Box position="relative">
          <Box
            borderRadius="lg"
            transition="0.2s"
            overflow="auto"
            _hover={{
              '&+div': { opacity: 0.8 }
            }}
          >
            <Image
              src={album.thumb}
              alt={album.name}
              width={200}
              height={200}
              layout="responsive"
            />
          </Box>

          <Flex
            onClick={handleClick}
            color="white"
            position="absolute"
            bottom="15px"
            right="15px"
            bg="black"
            borderRadius="full"
            cursor="pointer"
            opacity="0"
            transition=".3s"
            boxSize="40px"
            justify="center"
            align="center"
            _hover={{ transform: 'scale(1.2)', opacity: 1 }}
          >
            <Icon as={MdPlayArrow} boxSize="25px" />
          </Flex>
        </Box>

        <Text
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="medium"
          marginTop="10px"
          noOfLines={1}
          isTruncated
        >
          {album.name}
        </Text>
      </Box>
    </Link>
  )
}

export default AlbumItem
