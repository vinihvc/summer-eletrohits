import NextLink from 'next/link'

import { chakra, Link } from '@chakra-ui/react'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import { motion } from 'framer-motion'

export const BackAlbums = chakra(({ ...props }) => {
  return (
    <NextLink href="/" passHref>
      <Link
        as={motion.a}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        display={{ base: 'none', md: 'inline-flex' }}
        justifyContent="center"
        alignItems="center"
        _hover={{ textDecor: 'none' }}
        gap={2}
        py={3}
        {...props}
      >
        <MdOutlineKeyboardBackspace />
        Back to albums
      </Link>
    </NextLink>
  )
})
