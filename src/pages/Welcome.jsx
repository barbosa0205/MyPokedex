import React, { useEffect, useState } from 'react'
import { Avatars } from '../components/Avatars'
import { Button } from '../components/Button'
import { ErrorMessage } from '../components/ErrorMessage'
import styles from '../styles/components/Welcome.module.scss'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/user/useUser'
export const Welcome = () => {
  const navigate = useNavigate()
  const { username, setUsername } = useUser()
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || username.length < 3) {
      setError('El nombre de usuario debe tener al menos 3 caracteres')
      return
    }
    localStorage.setItem('pokeUsername', username)
    navigate('/')
    setError('')
  }

  const handleInputChange = (e) => {
    const { value } = e.target
    setUsername(value.trim())
  }

  useEffect(() => {
    if (localStorage.getItem('pokeUsername')) {
      navigate('/')
    }
  })

  return (
    <main className={styles.mainContainer}>
      <h1>Bienvenido Invitado</h1>

      <input
        type='text'
        placeholder='Ingresa Tu nombre o apodo'
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(e)
          }
        }}
      />
      {error && <ErrorMessage message={error} />}
      <Avatars username={username} />
      <Button text='Continuar' onClick={handleSubmit} />
    </main>
  )
}
