import React from 'react';

const ErrorPage = ({ error, message }) => (
  <div>
    <h1>{error}</h1>
    <p>{message}</p>
    <p>Zostaniesz przekierowany na stronę główną</p>
  </div>
);

export default ErrorPage;
