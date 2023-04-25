import ErrorText from '../../core/components/error/ErrorText';
import ReturnLink from '../../core/components/error/ReturnLink';

function NotFoundPage() {
  return (
    <>
      <ErrorText>Page not found.</ErrorText>
      <ReturnLink to='/'>Take me home</ReturnLink>
    </>
  );
}

export default NotFoundPage;
