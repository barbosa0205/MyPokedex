import React, { useState } from 'react'
import { Icon } from './Icon'
import styles from '../styles/components/Navbar.module.scss'
import { Logo } from './Logo'
import { Search } from './Search'
import { useUser } from '../context/user/useUser'
import { Menu } from './Menu'
export const Navbar = () => {
  const { username } = useUser()

  const [menu, setMenu] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.menu_logo_container}>
          <Icon
            className={`${styles.menu_icon} ${
              menu ? 'ri-menu-2-line' : 'ri-menu-line'
            } `}
            onClick={() => setMenu(!menu)}
          />
          <Logo />
        </div>
        <Search />
      </nav>
      <Menu menu={menu} setMenu={setMenu} />
    </>
  )
}
