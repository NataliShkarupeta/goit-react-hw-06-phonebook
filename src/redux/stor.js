import { configureStore } from "@reduxjs/toolkit";
import contactReduser from'./contactSlice'
import filterReduser from "./filterNameSlice";


export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReduser,
  },
});