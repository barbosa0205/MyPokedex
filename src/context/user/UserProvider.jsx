import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('')

  const logOut = () => {
    localStorage.removeItem('pokeUsername')
    setUsername('')
  }

  useEffect(() => {
    if (localStorage.getItem('pokeUsername')) {
      setUsername(localStorage.getItem('pokeUsername'))
    }
  })

  const values = {
    username,
    setUsername,
    logOut,
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
