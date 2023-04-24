import classNames from 'classnames';
import { HTMLProps, forwardRef } from 'react';

export interface Props extends HTMLProps<HTMLInputElement> {
  bordered?: boolean;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, bordered = true, ...rest }, ref) => (
    <input
      ref={ref}
      {...rest}
      className={classNames(
        'input',
        'w-full',
        {
          'input-bordered': bordered,
        },
        error && 'input-error',
      )}
    />
  ),
);

Input.displayName = 'Input';

export default Input;
