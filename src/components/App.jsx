import React from 'react';
// import { useState, useEffect } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
// import { nanoid } from 'nanoid';
import { InputFind } from './Input/InputFind';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('Contacts')) || []
  // );
  // const [filter, setFilter] = useState('');
const addNewContact = data =>{
  console.log('data',data)
dispatch(addContact({ data }));
}

  // const addContact = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  //   setContacts(prev => [...prev, newContact]);
  // };

  const nameForFilter = e => {
    // setFilter(e.target.value);
  };

  const cangeArreyContacts = () => {
    // if (filter.length > 0) {
    //   return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    //   );
    // } else {
    //   return contacts;
    // }
  };

  const onDeleteContact = idContact => {
    // setContacts(prev => prev.filter(contact => contact.id !== idContact));
  };

  // useEffect(() => {
  //   localStorage.setItem('Contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Title text="Phonebook" />
      <Wrap>
        <InputName  send={addNewContact} />
      </Wrap>
      <Title text="Contscts" />
      <InputFind  find={nameForFilter} />
      <Contacts contact={cangeArreyContacts()} onDelete={onDeleteContact} />
    </>
  );
};


