import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Box, Typography } from '@mui/material';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          color="primary.contrastText"
          sx={{ mr: 2, textDecoration: 'none' }}
        >
          Home
        </Typography>
        {isLoggedIn && (
          <Typography
            variant="h6"
            component={NavLink}
            to="/contacts"
            color="primary.contrastText"
            sx={{ textDecoration: 'none' }}
          >
            Contacts
          </Typography>
        )}
      </nav>
    </Box>
  );
}
