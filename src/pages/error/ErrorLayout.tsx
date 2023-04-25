import WhiteScreenWithLogoLayout from '../../core/layouts/WhiteScreenWithLogoLayout';
import { Outlet } from 'react-router-dom';

function ErrorLayout() {
  return (
    <WhiteScreenWithLogoLayout>
      <Outlet />
    </WhiteScreenWithLogoLayout>
  );
}

export default ErrorLayout;
