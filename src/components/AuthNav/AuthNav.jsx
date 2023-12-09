import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <Typography
        variant="h6"
        component={NavLink}
        to="/register"
        color="primary.contrastText"
        sx={{ mr: 2, textDecoration: 'none' }}
      >
        Register
      </Typography>
      <Typography
        variant="h6"
        component={NavLink}
        to="/login"
        color="primary.contrastText"
        sx={{ mr: 2, textDecoration: 'none' }}
      >
        Log In
      </Typography>
    </div>
  );
}
