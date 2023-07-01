import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { StyledForm, StyledInput, StyledButton } from '../styles/styled-components';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledForm id="login-form" onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  );
};

export default Login;