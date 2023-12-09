import { Container } from '@mui/material';
import LoginForm from '../components/LoginForm/LoginForm';
import React from 'react';

export default function Login() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <LoginForm />
    </Container>
  );
}
