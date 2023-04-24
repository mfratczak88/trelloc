import { PropsWithChildren } from 'react';

export default function FieldValidationError({ children }: PropsWithChildren) {
  return (
    <label className='label block w-100'>
      <span className='label-text-alt text-error'>{children}</span>
    </label>
  );
}
