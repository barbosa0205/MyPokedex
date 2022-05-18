import { useContext } from 'react'
import { UserContext } from './UserContext'

export const useUser = () => {
  const contextValue = useContext(UserContext)
  return contextValue
}
