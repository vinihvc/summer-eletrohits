import { Flex } from '@chakra-ui/layout'

import Slider from 'components/Slider'

import { usePlayer } from 'contexts/PlayerContext'

const Progress = () => {
  const { progress, handleProgress } = usePlayer()

  return (
    <Flex flex="6 1" ml={5}>
      <Slider value={progress} onChange={handleProgress} />
    </Flex>
  )
}
export default Progress
