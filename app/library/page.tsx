'use client'

import Link from 'next/link'

import { Songs } from '@/components/songs'
import { AlbumInfo } from '@/components/ui/album/album.info'
import { buttonVariants } from '@/components/ui/button'
import { useMusicState } from '@/contexts/music'
import { USER_ALBUM } from './data'

const LibraryPage = () => {
  const { liked } = useMusicState()

  return (
    <div className="space-y-5">
      {liked.length === 0 && (
        <>
          <p>Nothing in your library yet, go discover!</p>

          <Link href="/" className={buttonVariants()}>
            Discover
          </Link>
        </>
      )}

      {liked.length > 0 && (
        <>
          <AlbumInfo album={{ ...USER_ALBUM, songs: liked }} />

          <Songs songs={liked} />
        </>
      )}
    </div>
  )
}

export default LibraryPage
