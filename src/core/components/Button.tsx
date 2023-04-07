import classNames from 'classnames';
import { ReactProps } from 'core/typings/props';

export interface Props extends ReactProps {
  type?: 'primary' | 'accent' | 'outline';
  onClick?: () => void;
  width?: 'full' | number;
}

export const Button = ({ type = 'primary', width = 'full', onClick, children }: Props) => {
  return (
    <button className={classNames(...['btn', `btn-${type}`, `w-${width}`])} onClick={onClick}>
      {children}
    </button>
  );
};
