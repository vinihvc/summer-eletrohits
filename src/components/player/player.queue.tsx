import { useRouter } from 'next/router'

import { MdQueueMusic } from 'react-icons/md'

import { IconButton } from '@chakra-ui/react'

export const Queue = ({ ...props }) => {
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
