import { Box, chakra } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import { motion } from 'framer-motion'

export const BackAlbums = chakra(({ ...props }) => {
  return (
    <Link href="/">
      <Box
        as={motion.span}
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
      </Box>
    </Link>
  )
})
