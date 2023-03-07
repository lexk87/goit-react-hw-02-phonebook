import React, { Component } from 'react';
import {
    Container,
    Header,
    ContactForm,
    ContactsTitle,
    Filter,
    ContactList,
    ContactsContainer,
} from 'components';

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        isOpenForm: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            isOpenForm: !prevState.isOpenForm,
        }));
    };

    addContact = contact => {
        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));
    };

    onFilterChange = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    filteredContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    removeContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    contact => contact.id !== id
                ),
            };
        });
    };

    render() {
        const { contacts, filter, isOpenForm } = this.state;

        return (
            <>
                <Container>
                    <Header isOpenForm={isOpenForm} toggle={this.toggle} />
                    {isOpenForm && (
                        <ContactForm
                            contacts={contacts}
                            addContact={this.addContact}
                        />
                    )}

                    <ContactsContainer>
                        <ContactsTitle />
                        <Filter value={filter} onChange={this.onFilterChange} />
                        <ContactList
                            contacts={this.filteredContacts()}
                            removeContact={this.removeContact}
                        />
                    </ContactsContainer>
                </Container>
            </>
        );
    }
}
