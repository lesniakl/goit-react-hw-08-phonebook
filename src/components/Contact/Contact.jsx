import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="subtitle1">{number}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleDelete}
          sx={{ ml: 1, mb: 1 }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
