import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../services/auth';
import '../styles/SignUp.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password);
      history.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;