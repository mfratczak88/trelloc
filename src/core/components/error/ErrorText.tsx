import { PropsWithChildren } from 'react';

function ErrorText({ children }: PropsWithChildren) {
  return <p className='text-4xl text-center'>{children}</p>;
}

export default ErrorText;
