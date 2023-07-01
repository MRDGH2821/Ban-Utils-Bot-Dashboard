import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);