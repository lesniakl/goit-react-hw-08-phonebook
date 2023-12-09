import { Container } from '@mui/material';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import React from 'react';

export default function Register() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <RegisterForm />
    </Container>
  );
}
