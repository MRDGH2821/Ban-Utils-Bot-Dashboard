import firebase from './firebase';
import { User } from '../types';

export const signIn = async (email: string, password: string): Promise<User | null> => {
  const response = await firebase.auth().signInWithEmailAndPassword(email, password);
  return response.user ? { uid: response.user.uid, email: response.user.email } : null;
};

export const signUp = async (email: string, password: string): Promise<User | null> => {
  const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
  return response.user ? { uid: response.user.uid, email: response.user.email } : null;
};

export const signOut = async (): Promise<void> => {
  await firebase.auth().signOut();
};