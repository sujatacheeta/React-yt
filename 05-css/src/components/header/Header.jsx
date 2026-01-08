import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Job Portal</h1>
      <p>Find your dream job</p>
    </div>
  )
}

export default Header