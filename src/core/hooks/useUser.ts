import { useEffect, useState } from 'react';
import { auth } from '../firebase';

const useUser = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(!user);
  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authState) => {
      authState ? setUser(authState) : setUser(null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return { loading, user };
};
export default useUser;
