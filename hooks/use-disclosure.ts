import React, { useCallback, useState } from 'react'

export type UseDisclosureProps = {
  defaultIsOpen?: boolean
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const [isOpenState, setIsOpen] = useState(props.defaultIsOpen || false)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  const onToggle = useCallback(() => {
    setIsOpen((e) => !e)
  }, [])

  return {
    isOpen: !!isOpenState,
    onOpen,
    onClose,
    onToggle,
  }
}
