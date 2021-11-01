import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user"
import { Contact } from '../../models/interfaces/contact'
import axios from 'axios'

export const getAllContacts = createAsyncThunk<any>('CONTACTS/GET_ALL_CONTACTS', async () => await axios.get('/api/contacts'));
export const setNewContacts = createAction<User[]>("SET_NEW_CONTACTS");
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");
export const setNewUser = createAction<User>("SET_NEW_USER");
