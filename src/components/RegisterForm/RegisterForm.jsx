import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexDirection: 'column',
        }}
      >
        <TextField size="small" required label="Name" name="name" />
        <TextField
          size="small"
          required
          label="E-mail"
          name="email"
          type="email"
        />
        <TextField
          size="small"
          required
          label="Password"
          name="password"
          type="password"
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ maxWidth: 'fit-content', mt: 2 }}
        >
          Register
        </Button>
      </Box>
    </form>
  );
}
