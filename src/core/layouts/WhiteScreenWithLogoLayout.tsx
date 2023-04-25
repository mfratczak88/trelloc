import { PropsWithChildren } from 'react';

function WhiteScreenWithLogoLayout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen pt-8 flex flex-col gap-24'>
      <div className='flex justify-center gap-3'>
        <img className='w-8 md:w-16 lg:w-24' src='favicon.svg' alt='Logo' />
        <span className='self-center text-5xl font-bold'>Trelloc</span>
      </div>
      {children}
    </div>
  );
}

export default WhiteScreenWithLogoLayout;
