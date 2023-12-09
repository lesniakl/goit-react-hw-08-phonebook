import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/filter/slice';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filterInput">Find contacts by name</label>
      <input
        type="text"
        id="filterInput"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
}
