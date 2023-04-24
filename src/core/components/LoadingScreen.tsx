import React from 'react';

function LoadingScreen() {
  return (
    <div className='min-h-screen pt-8 flex flex-col gap-24'>
      <div className='flex justify-center gap-3'>
        <img className='w-8 md:w-16 lg:w-24' src='favicon.svg' alt='Logo' />
        <span className='self-center text-5xl font-bold'>Trelloc</span>
      </div>
      <p className='text-4xl text-center'>Loading...</p>
      <progress className='progress block w-1/2' style={{ marginLeft: '25%' }} />
    </div>
  );
}

export default LoadingScreen;
