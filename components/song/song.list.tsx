'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { SongItem } from './song.item'

type SongListProps = {
  songs: SongType[]
} & React.HtmlHTMLAttributes<HTMLDivElement>

export const SongList = ({ songs, ...props }: SongListProps) => {
  return (
    <div {...props}>
      <AnimatePresence>
        {songs?.map((song, index) => (
          <motion.div
            key={index}
            layoutId={song.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <SongItem key={song.id} songs={songs} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
