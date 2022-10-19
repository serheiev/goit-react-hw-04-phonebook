import { ContactsItem } from 'components/ContactItem/ContactsItem';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
          key={contact.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
