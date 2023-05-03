import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/templates/MainLayout';
import AuthProvider from './Providers/AuthProvider';
import PostProvider from './Providers/PostProvider';
import Galeria from './views/Galeria';
import Home from './views/Home';
import Kontakt from './views/Kontakt';
import UtworzPost from './views/UtworzPost';
import Wycieczki from './views/Wycieczki';
import Zaloguj from './views/Zaloguj';
import Zarejestruj from './views/Zarejestruj';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <QueryClientProvider client={queryClient}>
        <PostProvider>
          <AuthProvider>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/wycieczki" element={<Wycieczki />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/zaloguj" element={<Zaloguj />} />
                <Route path="/zarejestruj" element={<Zarejestruj />} />
                <Route path="/utworz_post" element={<UtworzPost />} />
              </Route>
            </Routes>
          </AuthProvider>
        </PostProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
