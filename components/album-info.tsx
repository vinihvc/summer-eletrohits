'use client'

import { PlayIcon } from '@heroicons/react/24/solid'

import { motion } from 'framer-motion'

import { useStore } from '@/store'

import { Image } from '@/components/image'
import { Button } from './ui/button'

type AlbumInfoProps = {
  album: AlbumType
} & React.HTMLAttributes<HTMLDivElement>

export const AlbumInfo = ({ album, ...props }: AlbumInfoProps) => {
  const { play } = useStore()

  return (
    <div
      className="flex items-center gap-5 md:gap-10 flex-col md:flex-row"
      {...props}
    >
      <motion.div
        className="flex justify-center md:justify-start"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          src={album.thumb}
          alt={album.name}
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
        />
      </motion.div>

      <motion.div
        className="space-y-4 flex-col items-center md:items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="text-blue-200 text-xs uppercase font-medium">Album</div>

        <h2 className="text-lg md:text-xl font-bold">{album.name}</h2>

        <div className="mt-1">{`${album.songs?.length} songs`}</div>

        <div>
          <Button
            className="space-x-2"
            onClick={() => album.songs && play(album.songs)}
          >
            <PlayIcon className="w-5 h-5" />
            <span>Play</span>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
