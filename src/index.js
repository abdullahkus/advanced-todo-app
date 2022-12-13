import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App';
// Contexts
import { ThemeProvider } from './contexts/Theme.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
