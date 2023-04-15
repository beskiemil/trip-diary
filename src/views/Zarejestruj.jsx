import React, { useState } from 'react';

import Button from '../components/molecules/Button';
import Input from '../components/molecules/Input';

const Zarejestruj = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleUserRegister = async e => {
    e.preventDefault();

    await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password
      })
    }).then(res => {
      if (res.status === 409) {
        setFormErrors({
          ...formErrors,
          email: 'Email already exists'
        });
      } else if (res.status === 200) {
        // REGISTRATION SUCCESSFUL --> REDIRECT
      }
    });
  };

  return (
    <form
      onSubmit={handleUserRegister}
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
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="powtórz hasło"
        value={formValues.confirmPassword}
        onChange={handleInputChange}
      />
      <Button type="submit">Zarejestruj się</Button>
    </form>
  );
};

export default Zarejestruj;
