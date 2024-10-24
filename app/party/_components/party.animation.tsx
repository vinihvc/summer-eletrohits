import LottiePlayer from '@/components/ui/lottie'
import { usePartyStore } from '../party.store'

export const PartyAnimation = () => {
  const { isAnimating } = usePartyStore()

  return (
    <div className="relative aspect-video w-[450px]">
      <LottiePlayer path="/lottie/parrot.lottie" />
    </div>
  )
}
