'use client'

import { motion } from 'framer-motion'

import { CustomBg } from '@/components/custom-bg'

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <CustomBg className="from-pink-400 to-purple-700" />

      <h1 className="mb-10">Albums</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grd-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-10">
          {children}
        </div>
      </motion.div>
    </>
  )
}

export default HomeLayout
