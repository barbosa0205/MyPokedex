import React from 'react'
import styles from '../styles/components/Button.module.scss'
export const Button = ({ text, disable, ...rest }) => {
  return (
    <button disabled={disable} className={styles.button} {...rest}>
      {text}
    </button>
  )
}
