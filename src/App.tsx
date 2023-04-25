import { Route, Routes } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import useUser from './core/hooks/useUser';
import LoadingScreen from './core/components/LoadingScreen';
import AuthAction from './pages/auth/AuthAction';
import ErrorLayout from './pages/error/ErrorLayout';
import InvalidAuthCode from './pages/error/InvalidAuthCodePage';
import NotFoundPage from './pages/error/NotFoundPage';

function App() {
  const { loading } = useUser();
  if (loading) return <LoadingScreen />;
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
      </Route>
      <Route path='auth-action' element={<AuthAction />} />
      <Route element={<ErrorLayout />}>
        <Route path='invalid-auth-code' element={<InvalidAuthCode />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
