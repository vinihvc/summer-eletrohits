'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

export const BackAlbums = ({ ...props }) => {
  return (
    <Link href="/">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ x: -5 }}
        transition={{ duration: 0.1 }}
        className="hidden md:inline-flex justify-center items-center gap-2 py-3"
        {...props}
      >
        <ArrowLongLeftIcon className="w-6 h-6" />
        Back to albums
      </motion.span>
    </Link>
  )
}
