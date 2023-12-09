import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Log In
        </Button>
      </Box>
    </form>
  );
}
