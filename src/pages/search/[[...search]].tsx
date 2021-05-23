import { Box } from '@chakra-ui/layout'
import Searchbar from 'components/Searchbar'
import useDevice from 'hooks/useDevice'

const Search = () => {
  const { isMobile } = useDevice()

  return <Box mt={5}>{isMobile && <Searchbar />}</Box>
}

export default Search
