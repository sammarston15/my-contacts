import React, { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.title}>My Contacts</div>
      </div>
      <div className={styles.headerRight}>
        <input type="text" className={styles.search} placeholder='Search Contacts...'/>
        <div className={styles.accountMenu}>account menu</div>
      </div>
    </div>
  )
}

export default Header
