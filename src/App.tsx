import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;