import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'

const Searchbar = () => (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <FiSearch />
    </InputLeftElement>
    <Input
      type="text"
      placeholder="Search album, song, singer"
      variant="filled"
      borderRadius="full"
    />
  </InputGroup>
)

export default Searchbar
