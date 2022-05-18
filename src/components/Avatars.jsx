import React from 'react'
import styles from '../styles/components/Avatars.module.scss'
import Avatar from 'boring-avatars'

export const Avatars = ({ username }) => {
  return (
    <section className={styles.container}>
      <h4>Tu Avatar</h4>
      <div className={styles.avatars}>
        <Avatar
          size={80}
          name={username}
          variant='beam'
          colors={['#E0112D', '#FFE139', '#5BDB54', '#0C8F8F', '#3EA6E1']}
        />
      </div>
    </section>
  )
}
