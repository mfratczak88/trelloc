import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, authDomain } from '../firebase';
import { useState } from 'react';
import { FirebaseError } from 'firebase/app';

export interface ApiError {
  [code: string]: string;
}

const ErrorCodesFirebase: ApiError = {
  'auth/email-already-in-use': 'Account already exists',
};

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(user, {
        url: `https://${authDomain}`,
      });
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(ErrorCodesFirebase[err.code] || 'An Error has occured. Please try again');
      }
    } finally {
      setLoading(false);
    }
  };

  return { signUp, error, loading };
};
