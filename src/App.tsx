import { Route, Routes } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';

function App() {
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
