import LottiePlayer from '@/components/ui/lottie'

export const PartyAnimation = () => {
  return (
    <div className="relative aspect-video w-[450px]">
      <LottiePlayer path="/lottie/parrot.lottie" />
    </div>
  )
}
