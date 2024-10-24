'use client'

import dynamic from 'next/dynamic'
import { PartyBackground } from './_components/party-background'

const LottiePlayer = dynamic(() => import('@/components/ui/lottie'))
const Confetti = dynamic(() => import('@/components/ui/confetti'))

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
