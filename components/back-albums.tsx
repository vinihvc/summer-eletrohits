'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import { Button } from './ui/button'

export const BackAlbums = ({ ...props }) => {
  return (
    <Link href="/">
      <Button
        className="hidden items-center justify-center gap-2 py-3 sm:inline-flex"
        {...props}
      >
        <ChevronLeft className="h-6 w-6" />
        Back to albums
      </Button>
    </Link>
  )
}
