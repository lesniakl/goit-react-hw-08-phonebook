import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Box, Button, TextField } from '@mui/material';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <TextField size="small" required label="Name" name="name" />
        <TextField
          required
          size="small"
          label="Number"
          type="tel"
          name="number"
        />
        <Button type="submit" variant="contained" size="small">
          Add contact
        </Button>
      </Box>
    </form>
  );
}
