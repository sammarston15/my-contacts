import { createReducer } from "@reduxjs/toolkit";
import { Contact } from "../../models/interfaces/contact";
import { User } from "../../models/interfaces/user";
import * as ContactActions from "./actions";

interface ContactsState {
  contacts: Contact[];
  user: User;
  isLoggedIn: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  user: {} as User,
  isLoggedIn: false,
};

const contactReducer = createReducer(initialState, (contacts) => {
  contacts
    .addCase(
      ContactActions.getAllContacts,
      (state: ContactsState, { payload }) => ({
        ...state,
        contacts: payload,
      })
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
    .addDefaultCase((state: ContactsState) => state);
});

export default contactReducer;
