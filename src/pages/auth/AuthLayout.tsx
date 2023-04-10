import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className='min-h-screen pt-8'>
      <div className='flex justify-center gap-3'>
        <img className='w-8 md:w-16' src='favicon.svg' alt='Logo' />
        <span className='self-center text-5xl font-bold'>Trelloc</span>
      </div>
      <Outlet />
    </div>
  );
}
