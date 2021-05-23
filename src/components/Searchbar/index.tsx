import { useState } from 'react'

import { FiSearch, FiX } from 'react-icons/fi'

import {
  chakra,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'

import { useRouter } from 'next/dist/client/router'

const Searchbar = () => {
  const { push, query } = useRouter()

  const [search, setSearch] = useState(query.search || '')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | null) => {
    if (e) e.preventDefault()

    push(`/search/${search}`)
  }

  return (
    <chakra.form onSubmit={(e) => handleSubmit(e)} w="full">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>

        <Input
          type="text"
          placeholder="Search album, song, singer"
          variant="filled"
          borderRadius="full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <InputRightElement
          width="4rem"
          cursor="pointer"
          onClick={() => {
            setSearch('')
            handleSubmit(null)
          }}
        >
          {search && <FiX />}
        </InputRightElement>
      </InputGroup>
    </chakra.form>
  )
}

export default Searchbar
