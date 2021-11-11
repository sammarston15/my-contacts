import React, { FC, useState } from 'react'
import styles from './newContact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading } from '../../redux/contacts/selectors'

// Components
import Header from '../header/Header'
import { setNewContact } from '../../redux/contacts/actions'

const NewContact: FC = (props) => {
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '', 
    phone: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setContactInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    const data = {
      firstName: contactInfo.firstName,
      lastName: contactInfo.lastName,
      phone: contactInfo.phone,
      email: contactInfo.email,
      address1: contactInfo.address1,
      address2: contactInfo.address2,
      city: contactInfo.city,
      state: contactInfo.state,
      zip: contactInfo.zip
    }
    dispatch(setNewContact(data))
    setContactInfo({
      firstName: '',
      lastName: '', 
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    })

  }

  return (
    <>
      <Header />
      {loading? 
      <h1>loading</h1>
      :
      <div className={styles.newContactContainer}>
        <div className={styles.contactForm}>
          <label>First Name</label>
          <input type="text" name='firstName' value={contactInfo.firstName} onChange={handleChange} />
          <label>Last Name</label>
          <input type="text" name='lastName' value={contactInfo.lastName} onChange={handleChange} />
          <label>Phone</label>
          <input type="text" name='phone' value={contactInfo.phone} onChange={handleChange} />
          <label>Email</label>
          <input type="text" name='email' value={contactInfo.email} onChange={handleChange} />
          <label>Address 1</label>
          <input type="text" name='address1' value={contactInfo.address1} onChange={handleChange} />
          <label>Address 2</label>
          <input type="text" name='address2' value={contactInfo.address2} onChange={handleChange} />
          <label>City</label>
          <input type="text" name='city' value={contactInfo.city} onChange={handleChange} />
          <label>State</label>
          <input type="text" name='state' value={contactInfo.state} onChange={handleChange} />
          <label>Zip Code</label>
          <input type="text" name='zip' value={contactInfo.zip} onChange={handleChange} />
          <button className={styles.btn} onClick={handleSave}>Save</button>
        </div>
      </div>
      }
    </>
  )
}

export default NewContact
