import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
    //   console.log(state);
    //   console.log(action);
      state.contacts.push({ id: nanoid(), ...action.payload.data });
    },
    onDeleteContact(state, action) {},
    cangeArreyContacts(state, action) {},
  },
});

export const { addContact, onDeleteContact, cangeArreyContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
