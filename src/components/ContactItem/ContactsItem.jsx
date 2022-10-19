import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const ContactsItem = ({ name, number, onDelete, id }) => {
  return (
    <li key={id}>
      <span>
        {name} {number}
      </span>
      <Button type="button" text="Delete" onDelete={() => onDelete(id)} />
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
