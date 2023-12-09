import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Box, Button, Typography } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1" color="primary.contrastText" sx={{ mr: 1 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
}
