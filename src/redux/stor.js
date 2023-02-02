import { configureStore } from "@reduxjs/toolkit";
import contactReduser from'./contactSlice'
import filterSlice from "./filterNameSlice";


export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterSlice,
  },
});