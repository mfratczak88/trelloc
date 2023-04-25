import { PropsWithChildren } from 'react';
import Link, { Props } from '../Link';

function ReturnLink({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <Link {...rest} cssClasses={['block', 'text-center']}>
      {children}
    </Link>
  );
}

export default ReturnLink;
