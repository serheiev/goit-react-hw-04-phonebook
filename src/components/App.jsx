import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contact/Contact';
import { nanoid } from 'nanoid';
import { Input } from './Input/Input';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    if (contacts.length === 0) return;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts')) ?? [];
    setContacts(localContacts);
  }, []);

  const contactSubmit = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    if (contacts.some(c => c.name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const onfilterContacts = ({ target: { value } }) => {
    setFilterContacts(value);
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filterContacts.toLocaleLowerCase())
  );

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  return (
    <>
      <Section title="Phonebook">
        <Form newContact={contactSubmit} />
      </Section>

      <Section title="Contacts">
        <Input
          placeholder="name in contacts"
          type="text"
          filter={filterContacts}
          onChange={onfilterContacts}
          title=""
          name="search"
          pattern=""
        />

        <Contacts contacts={filteredContacts} onDelete={deleteContact} />
      </Section>
    </>
  );
};
