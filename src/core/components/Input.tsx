import classNames from 'classnames';
import { ElementWidth, WidthBreakpoints } from '../typings/props';

export interface Props {
  type: 'text' | 'password';
  placeholder: string;
  bordered?: boolean;
  width?: ElementWidth;
  maxWidth?: WidthBreakpoints;
}

export const Input = ({
  type,
  placeholder,
  bordered = true,
  width = 'full',
  maxWidth = 'md',
}: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    className={classNames(
      'input',
      {
        'input-bordered': bordered,
      },
      `max-w-${maxWidth}`,
      `w-${width}`,
    )}
  ></input>
);
