import { RootState } from "../store";

export const selectUser = (state: RootState) => state.contacts.user;
export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectIsLoggedIn = (state: RootState) => state.contacts.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.contacts.loading;
export const selectSortStatus = (state: RootState) => state.contacts.sortStatus;
