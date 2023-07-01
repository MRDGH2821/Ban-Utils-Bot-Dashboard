import React from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

const Index = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  React.useEffect(() => {
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [user]);

  return null;
};

export default Index;