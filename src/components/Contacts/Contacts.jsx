import { Item } from './Contacts.styled';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Contacts = ({  onDelete }) => {
  const contact = useSelector(state => state.contacts.contacts);
  // contact from props
  return contact.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name} :{number}{' '}
        <Button
          text="Delete"
          onClicked={() => {
            onDelete(id);
          }}
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
  onDelete: PropTypes.func.isRequired,
};
