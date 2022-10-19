import PropTypes from 'prop-types';

export const Button = ({ text, type, onDelete }) => {
  return (
    <button type={type} onClick={onDelete}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
