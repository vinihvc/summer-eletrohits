import NextLink from 'next/link'

import Image from 'next/image'

import { MdPlayArrow } from 'react-icons/md'

import { useColorModeValue } from '@chakra-ui/color-mode'

import { Box, Flex, Link, Text } from '@chakra-ui/layout'

export type ThumbnailProps = {
  album: AlbumType
  imageOnly?: boolean
  onClick?: () => void
}

const Thumbnail = ({ album, onClick }: ThumbnailProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    !!onClick && onClick()
  }

  return (
    <Link as={NextLink} href={`/albums/${album.id}`}>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        p={4}
        borderRadius="lg"
        cursor="pointer"
        transition=".3s"
        _hover={{
          bg: useColorModeValue('gray.50', 'gray.700')
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
            <MdPlayArrow size="25" />
          </Flex>
        </Box>

        <Text fontWeight="medium" marginTop="10px">
          {album.name}
        </Text>
      </Box>
    </Link>
  )
}

export default Thumbnail
