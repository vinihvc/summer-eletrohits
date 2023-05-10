'use client'

import Link from 'next/link'

import { useStore } from '@/store'

import { AlbumInfo } from '@/components/album-info'
import { Songs } from '@/components/songs'
import { buttonVariants } from '@/components/ui/button'

import { USER_ALBUM } from './data'

const LibraryPage = () => {
  const { liked } = useStore()

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
