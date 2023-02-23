'use client'

import { Box, Button, Text } from '@chakra-ui/react'

import { MdPlayArrow } from 'react-icons/md'

import { useStore } from '@/store'

import { SongList } from '@/components/song/song.list'
import { Link } from '@chakra-ui/next-js'

const LikesPage = () => {
  const { liked, play } = useStore()

  return (
    <>
      {liked.length === 0 ? (
        <Box>
          <Text my={5}>No favorite yet.</Text>

          <Link href="/">Discover</Link>
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
