import { Container, Typography } from '@mui/material';
import React from 'react';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Welcome to SimplePhonebook
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 3 }}>
        Storing all of your important contacts since today
      </Typography>
    </Container>
  );
}
