import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/molecules/Button';
import Input from '../components/molecules/Input';

const Zaloguj = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleUserLogin = async e => {
    e.preventDefault();

    await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password
      })
    }).then(res => {
      if (res.status === 401) {
        alert('Niepoprawne dane logowania');
      }
      if (res.status === 200) navigate('/');
    });
  };

  return (
    <form
      onSubmit={handleUserLogin}
      className="flex max-w-[15rem] flex-col gap-5"
    >
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="e-mail"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="hasło"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <Button type="submit">Zaloguj się</Button>
    </form>
  );
};

export default Zaloguj;
