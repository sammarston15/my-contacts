import React, { FC, useState } from 'react'
import styles from './newContact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectNewContact } from '../../redux/contacts/selectors'
// import { Contact } from '../../models/interfaces/contact'
import { setNewContact, saveNewContact } from '../../redux/contacts/actions'


// Components
import Header from '../header/Header'
import { Contact } from '../../models/interfaces/contact'

const NewContact: FC = (props) => {
  const loading = useSelector(selectIsLoading);
  const newContact = useSelector(selectNewContact);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNewContact({
      ...newContact, 
      [e.target.name]: e.target.value
    }))
  };

  const handleSave = () => dispatch(saveNewContact(newContact))

  return (
    <>
      <Header />
      {loading? 
      <h1>loading...</h1>
      :
      <div className={styles.newContactContainer}>
        <form onSubmit={handleSave} className={styles.contactForm}>
          <label>First Name</label>
          <input type="text" name='firstName' required onChange={handleChange}/>
          <label>Last Name</label>
          <input type="text" name='lastName' onChange={handleChange}/>
          <label>Phone</label>
          <input type="text" name='phone' onChange={handleChange}/>
          <label>Email</label>
          <input type="text" name='email' onChange={handleChange}/>
          <label>Address 1</label>
          <input type="text" name='address1' onChange={handleChange}/>
          <label>Address 2</label>
          <input type="text" name='address2' onChange={handleChange}/>
          <label>City</label>
          <input type="text" name='city' onChange={handleChange}/>
          <label>State</label>
          <input type="text" name='state' onChange={handleChange}/>
          <label>Zip Code</label>
          <input type="text" name='zip' onChange={handleChange}/>
          <button className={styles.btn} type='submit'>Save</button>
        </form>
      </div>
      }
    </>
  )
}

export default NewContact
