import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../models/interfaces/user";
import { setNewUser, getAllContacts } from "../../redux/contacts/actions";
import { selectContacts, selectIsLoading, selectUser } from "../../redux/contacts/selectors";
import styles from "./home.module.scss";
import axios from "axios";

// Components
import Header from "../header/Header";
import ContactsList from '../home/ContactsList';

export const Home: FC = () => {
  // DISPATCH HOOK
  const dispatch = useDispatch();

  // SELECTORS
  // const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  

  // DISPATCHERS
  // const handleLogin = (currentUser: User) => dispatch(setNewUser(currentUser));

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
    console.log(contacts)
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <ContactsList />
    </div>
  );
};
