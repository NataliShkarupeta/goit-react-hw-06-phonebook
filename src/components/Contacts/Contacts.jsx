import { Item } from './Contacts.styled';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onDeleteContactAction } from 'redux/contactSlice';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  return contact.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name} :{number}{' '}
        <Button
          text="Delete"
          onClicked={() => dispatch(onDeleteContactAction(id))}
        />
      </Item>
    );
  });
};

Contacts.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
