import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <Input
            name="name"
            value={this.state.name}
            type={'text'}
            placeholder={'contact name'}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.inputChange}
          />
        </label>

        <label>
          <span>Number</span>
          <Input
            name="number"
            value={this.state.number}
            type={'tel'}
            placeholder={'contact number'}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button type="submit" text="Create contact" />
        </label>
      </form>
    );
  }
}
