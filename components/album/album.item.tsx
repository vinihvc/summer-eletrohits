import Link from 'next/link'

import { BlurImage } from '@/components/blur-image'

import { AlbumItemPlay } from './album.item.play'

type AlbumItemProps = {
  album: AlbumType
} & React.HTMLAttributes<HTMLDivElement>

export const AlbumItem = ({ album }: AlbumItemProps) => {
  return (
    <Link
      href={`/albums/${album.id}`}
      className="hover:no-underline focus:shadow-none cursor-pointer"
      aria-label={album.name}
    >
      <div className="relative rounded-lg overflow-auto shadow-lg">
        <BlurImage src={album.thumb} alt={album.name} />

        <AlbumItemPlay songs={album.songs} />
      </div>

      <div className="md:text-lg font-medium mt-3 text-ellipsis">
        {album.name}
      </div>
    </Link>
  )
}
