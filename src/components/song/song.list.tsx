import { Box, chakra } from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'

import { SongItem } from './song.item'

type SongListProps = {
  songs: SongType[]
}

export const SongList = chakra(({ songs, ...props }: SongListProps) => {
  return (
    <Box {...props}>
      <AnimatePresence>
        {songs?.map((song, index) => (
          <Box
            as={motion.div}
            key={index}
            layoutId={song.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <SongItem key={song.id} songs={songs} index={index} />
          </Box>
        ))}
      </AnimatePresence>
    </Box>
  )
})
