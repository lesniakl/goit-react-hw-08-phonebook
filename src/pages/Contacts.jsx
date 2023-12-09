import ContactList from 'components/ContacList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import { Container, LinearProgress } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <ContactForm />
      <Filter />
      <div>{isLoading && <LinearProgress />}</div>
      <ContactList />
    </Container>
  );
}
