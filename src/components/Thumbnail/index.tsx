import NextLink from 'next/link'

import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import { MdPlayArrow } from 'react-icons/md'
import { useColorModeValue } from '@chakra-ui/color-mode'

export type ThumbnailProps = {
  imageOnly?: boolean
  onClick?: () => void
} & AlbumType

const Thumbnail = ({ id, thumb, name, onClick }: ThumbnailProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    !!onClick && onClick()
  }

  return (
    <Link as={NextLink} href={`/albums/${id}`}>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        p="15px"
        borderRadius="lg"
        cursor="pointer"
        transition=".3s"
        _hover={{
          bg: useColorModeValue('gray.50', 'gray.700')
        }}
      >
        <Box position="relative">
          <Image
            src={thumb}
            alt={name}
            objectFit="cover"
            width="100%"
            height="200px"
            borderRadius="lg"
            transition="0.2s"
            _hover={{
              '&+div': { opacity: 0.8 }
            }}
          />

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
          {name}
        </Text>
      </Box>
    </Link>
  )
}

export default Thumbnail
