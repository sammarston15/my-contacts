import { createReducer } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user";
import * as ContactActions from "./actions";

interface ContactsState {
  contacts: User[];
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
      ContactActions.setNewContacts,
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
    .addDefaultCase((state: ContactsState) => state);
});

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "LOGIN_USER":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}

export default contactReducer;
