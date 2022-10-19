import PropTypes from 'prop-types';

export const Input = ({
  type,
  title,
  placeholder,
  onChange,
  name,
  pattern,
  filter,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      pattern={pattern}
      title={title}
      filter={filter}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  filter: PropTypes.string,
};
