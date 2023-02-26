import Link from 'next/link'

import { ChevronLeft } from 'lucide-react'

import { AlbumInfo } from '@/components/album-info'
import { SongList } from '@/components/song/song.list'
import { Button } from '@/components/ui/button'

type ClientAlbumPageProps = {
  album: AlbumType
}

export const ClientAlbumPage = ({ album }: ClientAlbumPageProps) => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex justify-center sm:justify-start">
          <Link href="/" className="hidden sm:inline-flex">
            <Button className="space-x-1 text-xs">
              <ChevronLeft size={20} />

              <span>Back to albums</span>
            </Button>
          </Link>
        </div>

        <AlbumInfo album={album} />
      </div>

      {album.songs && <SongList songs={album.songs} />}
    </div>
  )
}
