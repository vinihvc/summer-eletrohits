'use client'

import { motion } from 'framer-motion'

import { CustomBg } from '@/components/layout/custom-bg'

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <CustomBg className="from-pink-400 to-purple-700" />

      <div className="space-y-10">
        <h1 className="text-4xl font-bold">Albums</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 md:grid-cols-5">
            {children}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default HomeLayout
