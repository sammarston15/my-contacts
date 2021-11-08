import React, { FC } from 'react'
import styles from './Header.module.scss'
import { setContactSearch } from '../../redux/contacts/actions'
import { useDispatch } from 'react-redux'

const Header: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.title}>My Contacts</div>
      </div>
      <div className={styles.headerRight}>
        <input type="text" className={styles.search} /* value={} */ placeholder='Search Contacts...' onChange={(e) => {
          dispatch(setContactSearch(e.target.value))
        }} />
        {/* <div className={styles.accountMenu}>account menu</div> */}
      </div>
    </div>
  )
}

export default Header
