import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number, contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };
  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts, name, number, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </Div>
    );
  }
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
