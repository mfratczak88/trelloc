import classNames from 'classnames';
import React from 'react';
import { ElementWidth, WidthBreakpoints } from '../../typings/props';
import FieldValidationError from './FieldValidationError';

export interface Props {
  error?: React.ReactNode;
  children: React.ReactElement;
  width?: ElementWidth;
  maxWidth?: WidthBreakpoints;
}
export default function Field({ width, maxWidth, children, error }: Props) {
  return (
    <div className={classNames(`max-w-${maxWidth}`, `w-${width}`)}>
      {children}
      {error && <FieldValidationError>{error}</FieldValidationError>}
    </div>
  );
}
