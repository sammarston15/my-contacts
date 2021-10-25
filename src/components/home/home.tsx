import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../models/interfaces/user";
import { setNewUser } from "../../redux/contacts/actions";
import { selectUser } from "../../redux/contacts/selectors";
import styles from "./home.module.scss";

// Components
import Header from '../header/Header'

export const Home: FC = () => {
  // DISPATCH HOOK
  const dispatch = useDispatch();

  // SELECTORS
  const user = useSelector(selectUser);

  // DISPATCHERS
  const handleLogin = (currentUser: User) => dispatch(setNewUser(currentUser));
  //     let sortedContacts = data.sort();
  //     console.log(sortedContacts)
  //     let contactMap = sortedContacts.map((person: any) => {
  //       return(
  //         <div className='contact-list-card'>
  //             {person.firstName} {person.lastName}
  //         </div>
  //     )
  //   })

  useEffect(() => {
    console.log('render home page')
  })

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.homeBody}>Home body</div>
    </div>
  );
};
