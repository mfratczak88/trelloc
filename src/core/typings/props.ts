import { ReactNode } from 'react';

export interface ReactProps {
  children?: ReactNode;
}

export type WidthBreakpoints = 'sm' | 'md' | 'lg';
export type ElementWidth = 'full' | number;
