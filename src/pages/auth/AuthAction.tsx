import LoadingScreen from '../../core/components/LoadingScreen';
import useAuthAction from '../../core/hooks/useAuthAction';
import { useNavigate } from 'react-router-dom';

function AuthAction() {
  const { error, loading } = useAuthAction();
  const navigate = useNavigate();
  if (!loading) {
    navigate(error ? '/invalid-auth-code' : '/login');
  }
  return <LoadingScreen />;
}

export default AuthAction;
