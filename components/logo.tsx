import { GiHeraldicSun } from 'react-icons/gi'

export const Logo = () => {
  return (
    <div className="flex items-center gap-4 tracking-wide select-none font-medium text-xl">
      <GiHeraldicSun className="text-blue-500" size={30} />

      <span className="text-white">Eletrohits</span>
    </div>
  )
}
