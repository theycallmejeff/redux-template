import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, getName } from './redux/firstName/firstNameSlice.js';
import Counter from './helpers/Counter.jsx';

function App() {
  const firstName = useSelector(getName);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setName({ firstname: e.target.value }));
  };

  return (
    <>
      <h1>Hello</h1>
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <input type="text" placeholder={firstName.firstname} onChange={handleChange} />
      <br />
      <br />
      <span>{firstName.firstname}</span>
    </>
  );
}

export default App;
