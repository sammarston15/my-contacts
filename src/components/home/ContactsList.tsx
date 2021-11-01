import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, setSortStatus } from '../../redux/contacts/actions';
import { selectContacts, selectIsLoading, selectSortStatus } from '../../redux/contacts/selectors';
import styles from "./home.module.scss";

const ContactsList = () => {
  // DISPATCH HOOK
  const dispatch = useDispatch();

  // SELECTORS
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const sortStatus = useSelector(selectSortStatus);

  const sortContacts = () => {
    console.log('hit sortContacts function: ', contacts)
    console.log('sortStatus at begging of function: ', sortStatus)
    if (sortStatus === 'first-ascending') {
      contacts.sort((a: any, b: any) => {
        console.log('sort firstName a-z: ', contacts)
        return a.firstName - b.lastName
      })
    } else if (sortStatus === 'descending') {
      contacts.sort((a: any, b: any) => b - a)
    } else {
      console.log('sortStatus: ', sortStatus)
      console.log('else...sortStatus did not match')
    }
  }

  const contactsMap = contacts.map((contact, i) => (
    <div className={styles.contactCard} key={i}>
      <div>{contact.firstName}</div>
      <div>{contact.lastName}</div>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>
      <div>{contact.address1}</div>
      <div>{contact.address2}</div>
      <div>{contact.city}</div>
      <div>{contact.state}</div>
      <div>{contact.zip}</div>
    </div>
  ))


  return (
    <>
      <div className={styles.sortDropdownContainer}>
        <select value={sortStatus} onChange={(e) => {
          dispatch(setSortStatus(e.target.value))
          console.log('sortStatus during onChange: ', sortStatus)
          sortContacts()
        }}>
          <option value="default">Sort Contacts</option>
          <option value="first-ascending">First Name: A-Z</option>
          <option value="first-descending">First Name: Z-A</option>
          <option value="last-ascending">Last Name: A-Z</option>
          <option value="last-descending">Last Name: Z-A</option>
        </select>
      </div>
      <div className={styles.contactList}>
        <div className={styles.listHeader}>
          <div>First</div>
          <div>Last</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Address 1</div>
          <div>Address 2</div>
          <div>City</div>
          <div>State</div>
          <div>Zip</div>
        </div>
        {loading && contacts === undefined? 
        <h1>loading</h1>
        :
        contactsMap
        }
      </div>
    </>
  )
}

export default ContactsList
