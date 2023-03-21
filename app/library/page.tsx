'use client'

import Link from 'next/link'

import { useStore } from '@/store'

import { Songs } from '@/components/songs'
import { Button } from '@/components/ui/button'

const LibraryPage = () => {
  const { liked } = useStore()

  return (
    <>
      {liked.length === 0 && (
        <div>
          <div className="my-5">No favorite yet.</div>

          <Link href="/">
            <Button>Discover</Button>
          </Link>
        </div>
      )}

      {liked.length > 0 && <Songs className="mt-10" songs={liked} />}
    </>
  )
}

export default LibraryPage
