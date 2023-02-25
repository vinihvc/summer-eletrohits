import { MusicalNoteIcon } from '@heroicons/react/24/solid'

export const Logo = () => {
  return (
    <div className="flex items-center gap-4 tracking-wide select-none font-medium text-xl">
      <MusicalNoteIcon className="text-blue-500 w-6 h-6" />

      <span className="text-white">Eletrohits</span>
    </div>
  )
}
