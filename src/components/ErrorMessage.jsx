import React from 'react'
import styles from '../styles/components/ErrorMessage.module.scss'
export const ErrorMessage = ({ message }) => {
  return <div className={styles.error}>{message}</div>
}
