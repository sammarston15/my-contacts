import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user"
import { Contact } from '../../models/interfaces/contact'
// import { SortValues } from '../../models/SortValues'
import axios from 'axios'

export const getAllContacts = createAsyncThunk<any>('CONTACTS/GET_ALL_CONTACTS', async () => await axios.get('/api/contacts'));
export const setNewContact = createAsyncThunk<any, Contact>("SET_NEW_CONTACT", async (data) => {
  await axios.post('/api/contacts', data)
});
// export const setNewContact = createAction<Contact>("SET_NEW_CONTACT");
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");
export const setNewUser = createAction<User>("SET_NEW_USER");
export const setSortStatus = createAction<any>('SET_SORT_STATUS');
export const setFirstClickCount = createAction<number>('SET_FIRST_CLICK_COUNT');
export const setLastClickCount = createAction<number>('SET_LAST_CLICK_COUNT');
export const setContactSearch = createAction<string>('SET_CONTACT_SEARCH');
