import { createAction } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user";

export const setNewContacts = createAction<User[]>("SET_NEW_CONTACTS");
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");

export const getContacts = (contacts: any) => {
  return {
    type: "GET_CONTACTS",
    payload: contacts,
  };
};

export const loginUser = () => {
  return {
    type: "LOGIN_USER",
  };
};
