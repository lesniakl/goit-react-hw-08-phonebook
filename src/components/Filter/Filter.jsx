import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/filter/slice';
import { TextField } from '@mui/material';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <TextField
      helperText="Find contacts by name"
      value={filter}
      onChange={handleChange}
      variant="standard"
      fullWidth={true}
      margin="dense"
    />
  );
}
