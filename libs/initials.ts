import { User } from 'next-auth'

export const getUserInitials = (user: User) => {
  const name = user.name || user.email || 'No Name'
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return initials
}
