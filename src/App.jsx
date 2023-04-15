import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/templates/MainLayout';
import Galeria from './views/Galeria';
import Home from './views/Home';
import Kontakt from './views/Kontakt';
import Wycieczki from './views/Wycieczki';
import Zaloguj from './views/Zaloguj';
import Zarejestruj from './views/Zarejestruj';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wycieczki" element={<Wycieczki />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/zaloguj" element={<Zaloguj />} />
          <Route path="/zarejestruj" element={<Zarejestruj />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
