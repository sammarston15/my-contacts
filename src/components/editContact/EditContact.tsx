import React, { FC, useEffect } from 'react'
import styles from './editContact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectIsLoading, selectEditingContact, selectUpdatedContact} from '../../redux/contacts/selectors'
import { setUpdatedContact, setEditingContact, saveEditedContact } from '../../redux/contacts/actions'
import { useParams, useHistory, useLocation } from 'react-router-dom'


// Components
import Header from '../header/Header'


const EditContact: FC = () => {
  let { contactIndex } : any = useParams();
  let history = useHistory();
  // let location = useLocation();
  console.log(history)
  
  const loading = useSelector(selectIsLoading);
  
  const dispatch = useAppDispatch();

  const editingContact = useSelector(selectEditingContact(contactIndex))
  dispatch(setEditingContact(editingContact))
  const updatedContact = useSelector(selectUpdatedContact)

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUpdatedContact({
      ...updatedContact, 
      [e.target.name]: e.target.value
    }))
  };
  
  const handleSave = () => {
    if (updatedContact) {
      const data = {
        editingContact, 
        changes: updatedContact
      }
      dispatch(saveEditedContact(data)).unwrap().then(() => {
        alert('successfully saved edited contact!')
        history.push('/')
      }).catch(error => alert(error))
    } else {
      alert('problem with updating contact | \'updatedContact\' is falsy')
    }
  }

  return (
    <>
      <Header />
      {loading? 
      <h1>loading...</h1>
      :
      <div className={styles.editContactContainer}>
        <form onSubmit={handleSave} className={styles.contactForm}>
          <label>First Name</label>
          <input type="text" name='firstName' defaultValue={editingContact?.firstName} onChange={handleChange} required/>
          <label>Last Name</label>
          <input type="text" name='lastName' defaultValue={editingContact?.lastName} onChange={handleChange}/>
          <label>Phone</label>
          <input type="text" name='phone' defaultValue={editingContact?.phone} onChange={handleChange}/>
          <label>Email</label>
          <input type="text" name='email' defaultValue={editingContact?.email} onChange={handleChange}/>
          <label>Address 1</label>
          <input type="text" name='address1' defaultValue={editingContact?.address1} onChange={handleChange}/>
          <label>Address 2</label>
          <input type="text" name='address2' defaultValue={editingContact?.address2} onChange={handleChange}/>
          <label>City</label>
          <input type="text" name='city' defaultValue={editingContact?.city} onChange={handleChange}/>
          <label>State</label>
          <input type="text" name='state' defaultValue={editingContact?.state} onChange={handleChange}/>
          <label>Zip Code</label>
          <input type="text" name='zip' defaultValue={editingContact?.zip} onChange={handleChange}/>
          <button className={styles.btn} type='submit'>Save</button>
        </form>
      </div>
      }
    </>
  )
}

export default EditContact
