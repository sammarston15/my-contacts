import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user"
import { Contact } from '../../models/interfaces/contact'
import axios from 'axios'

// export const getAllContacts = createAction<Contact[]>('GET_ALL_CONTACTS');
export const getAllContacts = createAsyncThunk('contacts/getAllContacts', async () => {
  const backendCall = axios
      .get("/api/getcontacts")
      .then((response) => {
        console.log("successful axios call to backend");
        return response.data
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
      return backendCall
})
export const setNewContacts = createAction<User[]>("SET_NEW_CONTACTS");
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");
export const setNewUser = createAction<User>("SET_NEW_USER");
