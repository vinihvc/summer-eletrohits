'use client'

import { MdPlayArrow } from 'react-icons/md'

import { motion } from 'framer-motion'

import { useStore } from '@/store'

import { BlurImage } from '@/components/blur-image'

type AlbumInfoProps = {
  album: AlbumType
} & React.HTMLAttributes<HTMLDivElement>

export const AlbumInfo = ({ album, ...props }: AlbumInfoProps) => {
  const { play } = useStore()

  return (
    <div
      className="flex items-center md:items-baseline gap-5 md:gap-10 flex-col md:flex-row"
      {...props}
    >
      <motion.div
        className="flex justify-center md:justify-start shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <BlurImage
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
          <button
            className="bg-red-500"
            onClick={() => album.songs && play(album.songs)}
          >
            <MdPlayArrow />
            Play
          </button>
        </div>
      </motion.div>
    </div>
  )
}
