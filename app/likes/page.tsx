'use client'

import Link from 'next/link'

import { BlurBackground } from '@/components/backgrounds/blur-background'
import { AlbumInfo } from '@/components/ui/album/album.info'
import { buttonVariants } from '@/components/ui/button'
import { Songs } from '@/components/ui/songs'
import { useMusicState } from '@/store/app.store'
import { USER_ALBUM } from './data'

const LibraryPage = () => {
  const { liked } = useMusicState()

  const hasLiked = liked.length > 0

  return (
    <>
      <BlurBackground src={USER_ALBUM.thumb} />

      <div className="container py-20 sm:py-40 space-y-10">
        {!hasLiked && (
          <>
            <AlbumInfo
              album={{
                id: 0,
                name: 'Albums',
                songs: liked,
                thumb: '/img/albums/library.webp',
                releaseDate: new Date('2020-01-01').toDateString(),
              }}
            />

            <div className="space-y-5">
              <div className="text-2xl font-semibold">
                Nothing in your library yet, go discover!
              </div>

              <Link href="/" className={buttonVariants()}>
                Discover
              </Link>
            </div>
          </>
        )}

        {hasLiked && (
          <>
            <AlbumInfo album={{ ...USER_ALBUM, songs: liked }} />

            <Songs songs={liked} />
          </>
        )}
      </div>
    </>
  )
}

export default LibraryPage
