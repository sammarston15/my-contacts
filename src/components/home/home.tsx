import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../models/interfaces/user";
import { setNewUser } from "../../redux/contacts/actions";
import { selectUser } from "../../redux/contacts/selectors";
import styles from "./home.module.scss";

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

  return (
    <div className={styles.home}>
      <div className={styles.menuContainer}>
        <div>menu-container</div>
        <div className={styles.menuItem}>All contacts</div>
        <div className={styles.menuItem}>Groups</div>
      </div>
      <div className={styles.contactListContainer}>
        <div>contact-list-container</div>
        <div className={styles.contactListCard}>contact name here*</div>
      </div>
      <div className={styles.contactInfoContainer}>contact-info-container</div>
    </div>
  );
};
