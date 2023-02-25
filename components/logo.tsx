import { Music } from 'lucide-react'

export const Logo = () => {
  return (
    <div className="flex select-none items-center gap-4 text-xl font-medium tracking-wide">
      <Music className="h-6 w-6 text-blue-500" />

      <span className="text-white">Eletrohits</span>
    </div>
  )
}
