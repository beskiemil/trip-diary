import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/molecules/Button';
import Input from '../components/molecules/Input';
import { UserContext } from '../Providers/UserProvider';

const Zarejestruj = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleUserRegister = async e => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formValues.name,
        lastname: formValues.lastname,
        email: formValues.email,
        password: formValues.password
      })
    });
    if (response.status === 409) {
      setFormErrors({
        ...formErrors,
        email: 'Podany adres email już istnieje.'
      });
    }
    if (response.status === 200) {
      response.json().then(data => {
        setUserInfo({
          id: data.id,
          name: data.name,
          lastname: data.lastname,
          email: data.email
        });
      });
      return navigate('/');
    }
    return null;
  };

  return (
    <form
      onSubmit={handleUserRegister}
      className="flex max-w-[15rem] flex-col gap-5"
    >
      <Input
        type="name"
        id="name"
        name="name"
        placeholder="imię"
        value={formValues.name}
        onChange={handleInputChange}
        error={formErrors.name}
      />
      <Input
        type="lastname"
        id="lastname"
        name="lastname"
        placeholder="nazwisko"
        value={formValues.lastname}
        onChange={handleInputChange}
        error={formErrors.lastname}
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="e-mail"
        value={formValues.email}
        onChange={handleInputChange}
        error={formErrors.email}
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="hasło"
        value={formValues.password}
        onChange={handleInputChange}
        error={formErrors.password}
      />
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="powtórz hasło"
        value={formValues.confirmPassword}
        onChange={handleInputChange}
        error={formErrors.confirmPassword}
      />
      <Button type="submit">Zarejestruj się</Button>
    </form>
  );
};

export default Zarejestruj;
