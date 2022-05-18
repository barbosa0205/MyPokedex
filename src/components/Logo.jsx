import Avatar from 'boring-avatars'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/user/useUser'
import styles from '../styles/components/Logo.module.scss'
export const Logo = () => {
  const navigate = useNavigate()
  const { username } = useUser()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => {
        navigate('/')
      }}
    >
      <Avatar
        size={40}
        name={username}
        variant='beam'
        colors={['#E0112D', '#FFE139', '#5BDB54', '#0C8F8F', '#3EA6E1']}
      />
      <span className={styles.avatarName}>{username}</span>
    </div>
  )
}
