import { useRouter } from 'next/dist/client/router'

import { MdQueueMusic } from 'react-icons/md'

import { Link } from '@chakra-ui/layout'

const Queue = () => {
  const { push, back, pathname } = useRouter()

  function handleQueue() {
    if (pathname === '/queue') {
      back()
    } else {
      push('/queue')
    }
  }

  return (
    <Link onClick={handleQueue} ml={5} cursor="pointer">
      <MdQueueMusic size="20" color="currentColor" />
    </Link>
  )
}

export default Queue
