import Contact from 'components/Contact/Contact';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFiltered } from '../../redux/contacts/selectors';
import { Grid } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectFiltered);

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {contacts.map(contact => {
        return (
          <Grid item key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
