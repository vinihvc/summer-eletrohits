import { NextSeo } from 'next-seo'

import { Box } from '@chakra-ui/layout'

import Searchbar from 'components/Searchbar'

const Search = () => {
  return (
    <>
      <NextSeo title="Search" />

      <Box mt={{ base: 0, md: 5 }} maxW={{ base: '100%', md: 300 }}>
        <Searchbar />
      </Box>
    </>
  )
}

export default Search
