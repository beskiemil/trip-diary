import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/molecules/Button';
import Input from '../components/molecules/Input';
import { UserContext } from '../Providers/UserProvider';

const Zaloguj = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const { setUserInfo } = useContext(UserContext);

  const handleUserLogin = async e => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password
      })
    });
    if (response.status === 401) {
      response.json().then(data => {
        setFormErrors(data);
      });
    } else if (response.status === 200) {
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
      <Button type="submit">Zaloguj się</Button>
    </form>
  );
};

export default Zaloguj;
