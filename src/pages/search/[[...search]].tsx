import { NextSeo } from 'next-seo'

import { Box } from '@chakra-ui/layout'

import useDevice from 'hooks/useDevice'

import Searchbar from 'components/Searchbar'

const Search = () => {
  const { isMobile } = useDevice()

  return (
    <>
      <NextSeo title="Search" />

      <Box mt={5}>{isMobile && <Searchbar />}</Box>
    </>
  )
}

export default Search
