import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import contactReducer from "./contacts/reducer";

// when adding a new reducer, make sure to add it here
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
