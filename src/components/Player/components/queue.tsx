import { useRouter } from 'next/router'

import { MdQueueMusic } from 'react-icons/md'

import { chakra, IconButton } from '@chakra-ui/react'

const Queue = ({ ...props }) => {
  const { push, back, pathname } = useRouter()

  const handleQueue = () => {
    if (pathname === '/queue') {
      back()
    } else {
      push('/queue')
    }
  }

  return (
    <IconButton
      icon={<MdQueueMusic />}
      borderRadius="full"
      aria-label="Open Queue"
      onClick={handleQueue}
      {...props}
    />
  )
}

export default chakra(Queue)
