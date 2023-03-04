'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils/cn'

import { SongItem } from './song.item'

type SongListProps = {
  songs: SongType[]
} & React.HtmlHTMLAttributes<HTMLDivElement>

export const SongList = (props: SongListProps) => {
  const { songs, className, ...rest } = props

  return (
    <div className={cn(className)} {...rest}>
      <AnimatePresence>
        {songs?.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="transition-colors duration-200 odd:bg-black/10 hover:bg-black/5 odd:dark:bg-black/40 dark:hover:bg-white/5"
            viewport={{ once: true }}
          >
            <SongItem key={song.id} songs={songs} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
