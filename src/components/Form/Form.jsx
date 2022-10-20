import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const Form = ({ newContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    newContact({
      name: name,
      number: number,
    });

    setName('');
    setNumber('');
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <Input
          name="name"
          value={name}
          type={'text'}
          placeholder={'contact name'}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={inputChange}
        />
      </label>

      <label>
        <span>Number</span>
        <Input
          name="number"
          value={number}
          type={'tel'}
          placeholder={'contact number'}
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button type="submit" text="Create contact" />
      </label>
    </form>
  );
};

Form.propTypes = {
  newContact: PropTypes.func.isRequired,
};
