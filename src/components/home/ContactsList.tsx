import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, setSortStatus } from '../../redux/contacts/actions';
import { selectContacts, selectIsLoading, selectSortStatus } from '../../redux/contacts/selectors';
import styles from "./home.module.scss";
import { SortValues } from '../../models/SortValues';

const ContactsList = () => {
  // DISPATCH HOOK
  const dispatch = useDispatch();

  // SELECTORS
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const sortStatus = useSelector(selectSortStatus);


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

  useEffect(() => {
    dispatch(getAllContacts())
  }, []);

  return (
    <>
      <div className={styles.sortDropdownContainer}>
        <select value={sortStatus} onChange={(e) => {
          dispatch(setSortStatus(e.target.value))
        }}>
          {/* <option value=>Sort Contacts</option> */}
          <option value={SortValues.FIRST_ASC}>First Name: A-Z</option>
          <option value={SortValues.FIRST_DESC}>First Name: Z-A</option>
          <option value={SortValues.LAST_ASC}>Last Name: A-Z</option>
          <option value={SortValues.LAST_DESC}>Last Name: Z-A</option>
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
