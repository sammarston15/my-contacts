import React, { FC, useState } from 'react'
import styles from './newContact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectNewContact } from '../../redux/contacts/selectors'
// import { Contact } from '../../models/interfaces/contact'

// Components
import Header from '../header/Header'
import { setNewContact } from '../../redux/contacts/actions'
import { FormEvent } from 'hoist-non-react-statics/node_modules/@types/react'

const NewContact: FC = (props) => {
  const loading = useSelector(selectIsLoading);
  const newContact = useSelector(selectNewContact);

  const dispatch = useDispatch();
  // const [contactInfo, setContactInfo] = useState({
  //   firstName: '',
  //   lastName: '', 
  //   phone: '',
  //   email: '',
  //   address1: '',
  //   address2: '',
  //   city: '',
  //   state: '',
  //   zip: ''
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.persist();
  //   setContactInfo((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address1, address2, city, state, zip } = e.target as typeof e.target & {
      firstName: { value: string}, 
      lastName: { value: string},
      phone: { value: string}, 
      email: { value: string}, 
      address1: { value: string}, 
      address2: { value: string}, 
      city: { value: string}, 
      state: { value: string}, 
      zip: { value: string}, 
    };

    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      address1: address1.value,
      address2: address2.value,
      city: city.value,
      state: state.value, 
      zip: zip.value
    }

    dispatch(setNewContact(data))

  }

  console.log(newContact)
  return (
    <>
      <Header />
      {loading? 
      <h1>loading</h1>
      :
      <div className={styles.newContactContainer}>
        <form onSubmit={handleSave} className={styles.contactForm}>
          <label>First Name</label>
          <input type="text" name='firstName'  />
          <label>Last Name</label>
          <input type="text" name='lastName'  />
          <label>Phone</label>
          <input type="text" name='phone'  />
          <label>Email</label>
          <input type="text" name='email'  />
          <label>Address 1</label>
          <input type="text" name='address1'  />
          <label>Address 2</label>
          <input type="text" name='address2'  />
          <label>City</label>
          <input type="text" name='city'  />
          <label>State</label>
          <input type="text" name='state'  />
          <label>Zip Code</label>
          <input type="text" name='zip'  />
          <button className={styles.btn} type='submit'>Save</button>
        </form>
      </div>
      }
    </>
  )
}

export default NewContact
