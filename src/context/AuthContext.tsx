import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types/index';
import { auth } from '../services/firebase';

interface AuthContextProps {
  user: User | null;
  initializing: boolean;
}

export const AuthContext = createContext<AuthContextProps>({ user: null, initializing: true });

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, uid } = user;
        setUser({ displayName, email, uid });
      } else {
        setUser(null);
      }
      if (initializing) setInitializing(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [initializing]);

  return (
    <AuthContext.Provider value={{ user, initializing }}>
      {children}
    </AuthContext.Provider>
  );
};