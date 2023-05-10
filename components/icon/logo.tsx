import { Music } from 'lucide-react'

export const Logo = () => {
  return (
    <div className="flex select-none items-center space-x-2 text-lg font-bold tracking-wide">
      <Music className="h-6 w-6 text-blue-500" />

      <span className="text-sm">Eletrohits</span>
    </div>
  )
}
