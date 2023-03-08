import PropTypes from 'prop-types';
import { PhonebookList, NoContacts } from './ContactList.styled';
import { ContactListItem } from 'components';

export const ContactList = ({ contacts, removeContact }) => {
    return (
        <>
            {contacts.length >= 1 ? (
                <PhonebookList>
                    {contacts.map(({ id, name, number }) => (
                        <ContactListItem
                            id={id}
                            name={name}
                            number={number}
                            removeContact={removeContact}
                        />
                    ))}
                </PhonebookList>
            ) : (
                <NoContacts>There are no contacts in your phonebook</NoContacts>
            )}
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    removeContact: PropTypes.func,
};
