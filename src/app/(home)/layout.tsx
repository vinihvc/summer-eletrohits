'use client'

import { motion } from 'framer-motion'

import { Grid, Heading } from '@chakra-ui/react'

import { CustomBg } from '@/components/custom-bg'

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <CustomBg gradient={['pink.400', 'purple.700']} />

      <Heading as="h1" mb={10}>
        Albums
      </Heading>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(auto-fit, minmax(150px, 1fr))',
            sm: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}
          gap={{ base: 5, sm: 10 }}
        >
          {children}
        </Grid>
      </motion.div>
    </>
  )
}

export default HomeLayout
