import { auth } from '../firebase';
import { applyActionCode } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useAuthAction = () => {
  const [queryParams] = useSearchParams();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const oobCode = queryParams.get('oobCode') || '';
  let isSubscribed = true;
  useEffect(() => {
    isSubscribed &&
      applyActionCode(auth, oobCode)
        .then(() => {
          setError('');
        })
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });
    return () => {
      isSubscribed = false;
    };
  }, [queryParams]);

  return { error, loading };
};
export default useAuthAction;
