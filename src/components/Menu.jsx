import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/user/useUser'
import styles from '../styles/components/Menu.module.scss'
import { Button } from './Button'
import { Icon } from './Icon'
import { ListContainer } from './ListContainer'
import { ListItem } from './ListItem'
export const Menu = ({ menu, setMenu }) => {
  const navigate = useNavigate()
  const { logOut } = useUser()
  return (
    <section
      className={`${styles.menuContainer} ${menu ? styles.open : styles.close}`}
    >
      <ListContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0.5rem',
            borderBottom: '1px solid var(--light-shadow)',
          }}
        >
          <Icon
            className='ri-close-line'
            style={{
              fontSize: '2rem',
            }}
            onClick={() => {
              setMenu(!menu)
            }}
          />
        </div>
        <Link
          to='/all-pokemons'
          className={styles.link}
          onClick={() => setMenu(!menu)}
        >
          Todos los pokemón
        </Link>
        <div className={styles.btnLogout}>
          <Button
            text='LogOut'
            onClick={() => {
              logOut()
              navigate('/welcome')
            }}
          />
          <Icon className='ri-logout-box-line' />
        </div>
      </ListContainer>
    </section>
  )
}
