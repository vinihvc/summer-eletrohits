'use client'

import { PartyBackground } from '@/components/backgrounds/party-background'
import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(() => import('@/components/ui/lottie'), {
  ssr: false,
})
const Confetti = dynamic(() => import('@/components/ui/confetti'), {
  ssr: false,
})

const PartyPage = () => {
  return (
    <PartyBackground className="fixed inset-0 flex items-center justify-center">
      <div className="relative aspect-video w-[450px]">
        <LottiePlayer path="/lottie/parrot.lottie" />
      </div>

      <Confetti />
    </PartyBackground>
  )
}

export default PartyPage
