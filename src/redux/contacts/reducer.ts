import { createReducer } from "@reduxjs/toolkit";
import { Contact } from "../../models/interfaces/contact";
import { User } from "../../models/interfaces/user";
import * as ContactActions from "./actions";

interface ContactsState {
  contacts: Contact[];
  user: User;
  isLoggedIn: boolean;
  loading: boolean;
  sortStatus: string;
}

const initialState: ContactsState = {
  contacts: [],
  user: {} as User,
  isLoggedIn: false,
  loading: false,
  sortStatus: 'default'
};

const contactReducer = createReducer(initialState, (contacts) => {
  contacts
    .addCase(
      ContactActions.getAllContacts.pending, 
      (state: ContactsState) => ({
        ...state,
        loading: true
    }))
    .addCase(
      ContactActions.getAllContacts.fulfilled,
      (state: ContactsState, { payload }) => ({
        ...state,
        loading: false,
        contacts: payload.data,
      })
    )
    .addCase(
      ContactActions.getAllContacts.rejected,
      (state: ContactsState, { error }) => {
        alert(`${error.stack}`)
      }
    )
    .addCase(
      ContactActions.setNewLoggedIn,
      (state: ContactsState, { payload }) => ({
        ...state,
        isLoggedIn: payload,
      })
    )
    .addCase(
      ContactActions.setNewUser,
      (state: ContactsState, { payload }) => ({
        ...state,
        user: payload,
      })
    )
    .addCase(
      ContactActions.setSortStatus,
      (state: ContactsState, { payload }) => ({
        ...state,
        sortStatus: payload,
      })
    )
    .addDefaultCase((state: ContactsState) => state);
});

export default contactReducer;
