'use client'

import Link from 'next/link'

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

export const BackAlbums = ({ ...props }) => {
  return (
    <Link href="/">
      <span
        className="hidden md:inline-flex justify-center items-center gap-2 py-3"
        {...props}
      >
        <ArrowLongLeftIcon className="w-6 h-6" />
        Back to albums
      </span>
    </Link>
  )
}
