import React from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { InputFind } from './Input/InputFind';
import { useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const filter = useSelector(state => state.filter.filter);
  let contact = useSelector(state => state.contacts.contacts);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('Contacts')) || []
  // );


  const cangeArreyContacts = () => {
    if (filter.length > 0) {
      return contact.filter(cont =>
        cont.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contact;
    }
  };

  // useEffect(() => {
  //   localStorage.setItem('Contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Title text="Phonebook" />
      <Wrap>
        <InputName />
      </Wrap>
      <Title text="Contscts" />
      <InputFind />
      <Contacts contact={cangeArreyContacts()} />
    </>
  );
};
