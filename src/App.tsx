import { Route, Routes } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import useUser from './core/hooks/useUser';
import LoadingScreen from './core/components/LoadingScreen';

function App() {
  const { loading } = useUser();
  if (loading) return <LoadingScreen />;
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
