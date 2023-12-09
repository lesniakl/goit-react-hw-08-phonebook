import Contact from 'components/Contact/Contact';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFiltered } from '../../redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFiltered);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
}
