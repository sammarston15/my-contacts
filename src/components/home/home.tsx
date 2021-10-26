import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../models/interfaces/user";
import { setNewUser, getAllContacts } from "../../redux/contacts/actions";
import { selectContacts, selectUser } from "../../redux/contacts/selectors";
import styles from "./home.module.scss";
import axios from "axios";

// Components
import Header from "../header/Header";

export const Home: FC = () => {
  // DISPATCH HOOK
  const dispatch = useDispatch();

  // SELECTORS
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  // DISPATCHERS
  // const handleLogin = (currentUser: User) => dispatch(setNewUser(currentUser));

  useEffect(() => {
    axios
      .get("/api/getcontacts")
      .then((response) => {
        console.log("dispatch the get contacts action");
        dispatch(getAllContacts(response.data));
      })
      .catch((error) => {
        // ====== FROM AXIOS DOCS BELOW =======
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("error.response.data: ", error.response.data);
          console.log("error.response.status: ", error.response.status);
          console.log("error.response.headers: ", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error.request: ", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("error.message: ", error.message);
        }
        console.log("error.config: ", error.config);
        // =====================================
      });
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.homeBody}>
        {contacts.map((contact, i) => (
          <h1 key={i}>{contact.firstName}</h1>
        ))}
      </div>
    </div>
  );
};
