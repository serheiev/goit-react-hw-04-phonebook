import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contact/Contact';
// import { InputFilter } from './InputFilter/InputFilter';
import { nanoid } from 'nanoid';
import { Input } from './Input/Input';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Ann Kopen', number: '456-12-58' },
      { id: 'id-6', name: 'Daria Send', number: '258-16-97' },
      { id: 'id-7', name: 'Kian Smith', number: '228-02-04' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  contactSubmit = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    if (this.state.contacts.map(el => el.name).includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  filterContacts = ({ target: { value } }) => {
    this.setState(() => ({ filter: value }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.contactSubmit}></Form>
        </Section>

        <Section title="Contacts">
          <Input
            placeholder="name in contacts"
            type="text"
            filter={filter}
            onChange={this.filterContacts}
            title=""
            name="search"
            pattern=""
          />

          <Contacts contacts={filteredContacts} onDelete={this.deleteContact} />
        </Section>
      </>
    );
  }
}
