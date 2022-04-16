import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { MdPlayArrow } from 'react-icons/md'

import { useStore } from 'store'

import { CustomBg } from 'components/custom-bg'
import { SongList } from 'components/song/song.list'

const LikesPage = () => {
  const { liked, play } = useStore()

  return (
    <>
      <NextSeo title="Likes" />

      <CustomBg gradient={['red.500', 'yellow.300']} />

      <Heading as="h1">Your Likes</Heading>

      {liked.length === 0 ? (
        <Box>
          <Text my={5}>No favorite yet.</Text>

          <Link href="/" passHref>
            <Button as="a">Discover</Button>
          </Link>
        </Box>
      ) : (
        <Button
          leftIcon={<MdPlayArrow />}
          mt={5}
          my={5}
          onClick={() => play(liked)}
        >
          Play
        </Button>
      )}

      {liked.length > 0 && <SongList songs={liked} mt={10} />}
    </>
  )
}

export default LikesPage
