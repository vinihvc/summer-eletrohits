import Link from 'next/link'

import { Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export type ThumbnailProps = {
  imageOnly?: boolean
  onClick?: () => void
} & AlbumType

const Thumbnail = ({
  id,
  thumb,
  name,
  imageOnly = false,
  onClick
}: ThumbnailProps) => (
  <>
    <Image
      src={thumb}
      alt={name}
      objectFit="cover"
      width="100%"
      minHeight="100px"
      borderRadius="3xl"
      onClick={onClick}
      cursor="pointer"
      transition="0.2s"
      _hover={{ opacity: 0.3 }}
    />

    {!imageOnly && (
      <Box marginTop="10px">
        <Link href={`/albums/${id}`}>
          <Text
            fontWeight="medium"
            _hover={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            {name}
          </Text>
        </Link>
      </Box>
    )}
  </>
)

export default Thumbnail
