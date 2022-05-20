import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AnimalProvider } from './context/AnimalContext';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <UserProvider>
      <AnimalProvider>
        <App />
      </AnimalProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
