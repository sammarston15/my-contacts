import { createAction } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user"
import { Contact } from '../../models/interfaces/contact'

export const getAllContacts = createAction<Contact[]>('GET_ALL_CONTACTS');
export const setNewContacts = createAction<User[]>("SET_NEW_CONTACTS");
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");
export const setNewUser = createAction<User>("SET_NEW_USER");
