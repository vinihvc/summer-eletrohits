import { NextSeo } from 'next-seo'

import { Grid, Heading } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { AlbumItem } from 'components/album/album.item'
import { CustomBg } from 'components/custom-bg'

import api from 'services/api'

export type HomeProps = {
  albums?: AlbumType[]
}

const HomePage = ({ albums }: HomeProps) => {
  return (
    <>
      <NextSeo title="Home" />

      <CustomBg gradient={['pink.400', 'purple.700']} />

      <Heading as="h1" mb={10}>
        Albums
      </Heading>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        //
        transition={{ duration: 0.3 }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(auto-fit, minmax(150px, 1fr))',
            sm: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}
          gap={{ base: 5, sm: 10 }}
        >
          {albums?.map((album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </Grid>
      </motion.div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await api('albums')

  return {
    props: {
      albums: data
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default HomePage
