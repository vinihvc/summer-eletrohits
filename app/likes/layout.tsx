import { CustomBg } from '@/components/custom-bg'

type LikesLayoutProps = {
  children: React.ReactNode
}

const LikesLayout = ({ children }: LikesLayoutProps) => {
  return (
    <>
      <CustomBg className="from-red-500 to-yellow-300" />

      <h1>Your Likes</h1>

      {children}
    </>
  )
}

export default LikesLayout
