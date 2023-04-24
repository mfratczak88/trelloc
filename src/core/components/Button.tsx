import classNames from 'classnames';
import { ReactProps } from 'core/typings/props';
import { HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLButtonElement>, ReactProps {
  type?: 'primary' | 'accent';
  outline?: boolean;
  onClick?: () => void;
  width?: 'full' | number;
  loading?: boolean;
  submit?: boolean;
}

export const Button = ({
  type,
  submit = true,
  width = 'full',
  children,
  loading = false,
  outline = false,
  ...rest
}: Props) => {
  const cssClassNames = [
    ...['btn', type && `btn-${type}`, outline && 'btn-outline', `w-${width}`],
    { loading },
  ];
  return (
    <button className={classNames(cssClassNames)} type={submit ? 'submit' : 'button'} {...rest}>
      {children}
    </button>
  );
};

export interface ButtonWithIconProps extends Props {
  icon: JSX.Element;
  text: string;
}
export const ButtonWithIcon = ({ icon, text, ...props }: ButtonWithIconProps) => (
  <Button {...props}>
    {icon}
    <span className='ml-2'>{text}</span>
  </Button>
);
