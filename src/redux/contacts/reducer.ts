import { createReducer } from "@reduxjs/toolkit";
import { Contact } from "../../models/interfaces/contact";
import { User } from "../../models/interfaces/user";
import * as ContactActions from "./actions";
import { SortValues } from '../../models/SortValues'

interface ContactsState {
  contacts: Contact[];
  user: User;
  isLoggedIn: boolean;
  loading: boolean;
  sortStatus: SortValues;
  firstClickCount: number;
  lastClickCount: number;
}

const initialState: ContactsState = {
  contacts: [],
  user: {} as User,
  isLoggedIn: false,
  loading: false,
  sortStatus: SortValues.FIRST_ASC,
  firstClickCount: 0,
  lastClickCount: 0
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
    .addCase(
      ContactActions.setFirstClickCount,
      (state: ContactsState, { payload }) => ({
        ...state,
        firstClickCount: payload,
      })
    )
    .addCase(
      ContactActions.setLastClickCount,
      (state: ContactsState, { payload }) => ({
        ...state,
        lastClickCount: payload,
      })
    )
    .addDefaultCase((state: ContactsState) => state);
});

export default contactReducer;
