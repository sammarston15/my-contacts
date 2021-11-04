import { RootState } from "../store";
import { SortValues } from '../../models/SortValues'

export const selectUser = (state: RootState) => state.contacts.user;
export const selectContacts = (state: RootState) => {
  if (state.contacts.sortStatus === SortValues.FIRST_ASC) {
    return [...state.contacts.contacts].sort((a, b) => {
      const nameA = a.firstName.toLowerCase();
      const nameB = b.firstName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
  
    })
  } else if (state.contacts.sortStatus === SortValues.FIRST_DESC) {
    return [...state.contacts.contacts].sort((a, b) => {
      const nameA = a.firstName.toLowerCase();
      const nameB = b.firstName.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
  
    })
  } else if (state.contacts.sortStatus === SortValues.LAST_ASC) {
    return [...state.contacts.contacts].sort((a, b) => {
      const nameA = a.lastName.toLowerCase();
      const nameB = b.lastName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
  
    })
  } else if (state.contacts.sortStatus === SortValues.LAST_DESC) {
    return [...state.contacts.contacts].sort((a, b) => {
      const nameA = a.lastName.toLowerCase();
      const nameB = b.lastName.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
  
    })
  } else {
    return [...state.contacts.contacts].sort((a, b) => {
      const nameA = a.firstName.toLowerCase();
      const nameB = b.firstName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
  }
};
export const selectIsLoggedIn = (state: RootState) => state.contacts.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.contacts.loading;
export const selectSortStatus = (state: RootState) => state.contacts.sortStatus;
