import { Link as RouterLink } from 'react-router-dom';
import { ReactProps } from '../typings/props';
import classNames from 'classnames';

export interface Props extends ReactProps {
  to: string;
  cssClasses?: string;
}

export const Link = ({ children, cssClasses, ...props }: Props) => (
  <RouterLink {...props} className={classNames('link', cssClasses)}>
    {children}
  </RouterLink>
);

export default Link;
