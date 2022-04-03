import { useRouter } from 'next/router'

import { RiPlayList2Fill } from 'react-icons/ri'

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
      icon={<RiPlayList2Fill />}
      aria-label="Open Queue"
      onClick={handleQueue}
      {...props}
    />
  )
}
